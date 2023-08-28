// Styles
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader} role="status"></div>
    </div>
  );
};

export default Loader;
