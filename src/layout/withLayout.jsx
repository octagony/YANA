import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const withLayout = (Component) => {
  return (props) => {
    return (
      <>
        <Header />
        <Component {...props} />
        <Footer />
      </>
    );
  };
};

export default withLayout;
