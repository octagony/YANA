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
import rehypeRaw from "rehype-raw";

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

// Styles
import styles from "./EditNote.module.css";

// Hooks
import { useNotify } from "../../hooks/useNotify";

// Context
import { AuthContext } from "../../context/auth.context";

// Router
import { useLocation, useRoute } from "wouter";

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
      <button onClick={() => setMarkdownMode((prev) => !prev)}>
        Switch to markdown
      </button>
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
            rehypePlugins={[rehypeRaw]}
            className={styles.markdown}
          >
            {handleChange}
          </ReactMarkdown>
        )}
        <div>
          <Button
            disabled={isLoading}
            ariaLabel="Save note"
            className={styles.btn}
            action={saveNote}
          >
            Save
          </Button>
        </div>
        <Toaster />
      </div>
    </animated.div>
  );
};

export default withLayout(EditNote);
