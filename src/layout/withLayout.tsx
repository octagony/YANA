import React, { ComponentType } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./withLayout.module.css";
import { ILayout } from "./withLayout.props";
import { Provider } from "react-supabase";
import { supabase } from "../services/auth/auth.helpers";

export function withLayout<T extends ILayout>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    return (
      <Provider value={supabase}>
        <div className={styles.wrapper}>
          <Header />
          <div className={styles.inject}>
            <Component {...(hocProps as T)} />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  };
}

export default withLayout;
