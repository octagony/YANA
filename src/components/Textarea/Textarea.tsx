import { forwardRef } from "react";
import styles from "./Textarea.module.css";
import { ITextarea } from "./Textarea.props";
import cn from "classnames";

const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>((props, ref) => {
  const { value, changeFunc, keyDownFunc, editMode } = props;

  return (
    <textarea
      className={cn(
        styles.area,
        { [styles.edit_mode]: editMode },
        { [styles.new_mode]: !editMode }
      )}
      cols={10}
      rows={8}
      placeholder="Just start type..."
      ref={ref}
      onChange={changeFunc}
      onKeyDown={keyDownFunc}
      value={value}
    />
  );
});

export default Textarea;
