import React,{ ComponentType, ReactNode } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

interface IChildren{
  children: ReactNode
}

export function withLayout<T extends IChildren>(Component: ComponentType<T>) {
  return (hocProps: T) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Component {...(hocProps as T)} />
        </div>
        <Footer />
      </div>
    );
  };
}

export default withLayout;
