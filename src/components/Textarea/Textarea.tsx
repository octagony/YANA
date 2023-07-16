import React from "react";
import styles from "./Textarea.module.css";

const Textarea = ({ value, ref, changeFunc, keyDownFunc }: any) => {
  return (
    <textarea
      className={styles.area}
      cols={10}
      rows={8}
      placeholder="Just start type..."
      value={value}
      ref={ref}
      onChange={changeFunc}
      onKeyDown={keyDownFunc}
    ></textarea>
  );
};

export default Textarea;
