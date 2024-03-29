// Libraries
import { AiFillGithub } from "react-icons/ai";

// Styles
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.link}
        href="https://github.com/octagony"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className={styles.icon} size={40} />
      </a>
      <p>Octagony / {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
