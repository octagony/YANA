// Libraries
import { Link } from "wouter";
import { HiOutlineLogout, HiOutlineLogin } from "react-icons/hi";

// Components
import ThemeToggle from "../ThemeToggle/ThemeToggle";

// Store
import { useAuthStore } from "../../store/auth.store";

// Hooks
import useAuth from "../../hooks/useAuth";

// Styles
import styles from "./Header.module.css";

const Header = () => {
  const { user } = useAuthStore();
  const { logout } = useAuth();
  return (
    <header className={styles.header}>
      <div className={styles.header__info}>
        <Link to={user?.email ? "/" : "/auth"}>
          <h1 className={styles.title}>YANA</h1>
        </Link>
        <span className={styles.subtitle}>Yet Another Notes App</span>
        {user?.email && (
          <span className={styles.user__info}>for {user?.email}</span>
        )}
      </div>
      <div className={styles.icons__wrapper}>
        {user?.email && (
          <HiOutlineLogout
            className={styles.auth__btns}
            size={25}
            onClick={logout}
            data-testId="logout"
          />
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
