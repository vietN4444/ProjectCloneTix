import React from "react";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const Wrapper = (Component) => {
  return (props) => {
    return (
      <>
        <HeaderComponent />
        <Component {...props} />
        {/* <FooterComponent /> */}
      </>
    );
  };
};

export default Wrapper;
