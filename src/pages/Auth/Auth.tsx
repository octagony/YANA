// Libraries
import { FormEvent, useState } from "react";

// Components
import withLayout from "../../layout/withLayout";

// Hooks
import { useThemeToggling } from "../../hooks/useThemeToggling";
import useAuth from "../../hooks/useAuth";

// Store
import { useAuthStore } from "../../store/auth.store";

// Types
import { IUser } from "../../../types/IUser";

// Styles
import styles from './Auth.module.css'


const AuthPage = () => {
  const [authState, setAuthState] = useState<"signup" | "signin">("signin");
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  } as IUser);
  const { signUp, login } = useAuth();
  const { error, isLoading } = useAuthStore();

  const toggleAuth = () => {
    setAuthState((prev) => (prev === "signin" ? "signup" : "signin"));
  };

  useThemeToggling();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (authState === "signup") {
      signUp(userData.email, userData.password);
    } else {
      login(userData.email, userData.password);
    }
  };

  return (
    <div>
      <div className={styles.layout}>
        <div
          className={styles.form__wrapper}
        >
          <h2 className={styles.form__header}>
            {authState === "signup" ? "Sign Up" : "Login"}
          </h2>
          {error && (
            <div className={styles.form__error}>
              {error}
            </div>
          )}
          <form
            className={styles.form}
            method="POST"
            onSubmit={(event) => handleSubmit(event)}
          >
            <label
              htmlFor="email"
              className={styles.email__label}
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              className={styles.email__input}
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />

            <label
              htmlFor="password"
              className={styles.password__label}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              className={styles.password__input}
              required
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />

            <button
              className={styles.form__button}
              disabled={isLoading}
            >
              {isLoading
                ? "Loading..."
                : authState === "signup"
                ? "Sign Up"
                : "Login"}
            </button>

            <div className={styles.info__wrapper}>
              <p className={styles.info__state}>
                {authState === "signup"
                  ? "Already have account?"
                  : "Not account yet?"}
              </p>
              <span
                className={styles.info__label}
                onClick={toggleAuth}
              >
                {authState === "signup" ? "Sign in" : "Sign up now"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withLayout(AuthPage);
