import React, { ComponentType, ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "./withLayout.module.css";
import { ILayout } from "./withLayout.props";

export function withLayout<T extends ILayout>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.inject}>
          <Component {...(hocProps as T)} />
        </div>
        <Footer />
      </div>
    );
  };
}

export default withLayout;
