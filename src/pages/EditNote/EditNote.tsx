// Libraries
import {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useContext,
} from "react";
import { animated, useSpring } from "@react-spring/web";
import { doc, updateDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { TbMarkdown, TbMarkdownOff } from "react-icons/tb";
import { useLocation, useRoute } from "wouter";

// Components
import Button from "../../UI/Button/Button";
import Textarea from "../../components/Textarea/Textarea";
import { Toaster } from "react-hot-toast";
import withLayout from "../../layout/withLayout";

// Store
import { useNotes } from "../../store/notes.store";
import { useAuthStore } from "../../store/auth.store";

// Types
import { INote } from "../../../types/INotes";

// Hooks
import { useNotify } from "../../hooks/useNotify";

// Context
import { AuthContext } from "../../context/auth.context";

// Styles
import styles from "./EditNote.module.css";

const EditNote = () => {
  const { user, isLoading } = useContext(AuthContext);
  const { notes } = useNotes();
  const [match, params] = useRoute("/edit-note/:id");
  const { setLoading } = useAuthStore();
  const areaRef = useRef<HTMLTextAreaElement>(null);
  const { notify } = useNotify();
  const [location, setLocation] = useLocation();
  const [markdownMode, setMarkdownMode] = useState<boolean>(true);

  const notesCollectionRef = collection(db, "users", `${user.uid}`, "notes");

  const animation = useSpring({
    x: 0,
    from: {
      x: -300,
    },
  });

  const note = notes.find((note: INote) => note.id === params?.id);
  const [handleChange, setHandleChange] = useState<string>(
    note?.text as string
  );

  useEffect(() => {
    if (areaRef.current) {
      areaRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (note?.id !== params?.id) {
      setLocation("/");
    }
  }, []);

  const saveNote = async () => {
    try {
      setLoading(true);
      await updateDoc(doc(notesCollectionRef, params?.id), {
        text: handleChange,
      });
      notify.success();
    } catch (e) {
      notify.error();
      console.error("Error:", e);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeTextNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setHandleChange(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.ctrlKey && event.key === "Enter") {
      saveNote();
    }
  };

  return (
    <animated.div style={animation}>
      <h2 className={styles.title}>Edit Note</h2>
      <div className={styles.wrapper}>
        {markdownMode ? (
          <Textarea
            value={handleChange}
            ref={areaRef}
            changeFunc={handleChangeTextNote}
            keyDownFunc={handleKeyDown}
            editMode={true}
            markdownMode={markdownMode}
          />
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const matchLanguange = /language-(\w+)/.exec(className || "");
                return !inline && matchLanguange ? (
                  <SyntaxHighlighter language={matchLanguange[1]}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
          >
            {handleChange}
          </ReactMarkdown>
        )}
        <div className={styles.buttons__wrapper}>
          <Button
            disabled={isLoading}
            ariaLabel="Save note"
            className={styles.btn}
            action={saveNote}
          >
            Save
          </Button>
          <button
            className={styles.markdown__button}
            onClick={() => setMarkdownMode((prev) => !prev)}
          >
            {markdownMode ? (
              <TbMarkdown size={30} />
            ) : (
              <TbMarkdownOff size={30} />
            )}
          </button>
        </div>
        <Toaster />
      </div>
    </animated.div>
  );
};

export default withLayout(EditNote);
