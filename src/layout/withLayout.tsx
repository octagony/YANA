import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const withLayout = (Component) => {
  return (props) => {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Component {...props} />
        </div>
        <Footer />
      </div>
    );
  };
};

export default withLayout;
