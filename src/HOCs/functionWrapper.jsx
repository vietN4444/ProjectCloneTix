import { Box } from "@material-ui/core";
import React from "react";
import FooterComponent from "../components/Footer";
import HeaderComponent from "../components/Header";

const Wrapper = (Component) => {
  return (props) => {
    return (
      <Box style={{ position: "relative" }}>
        <HeaderComponent />
        <Component {...props} />
        <FooterComponent />
      </Box>
    );
  };
};

export default Wrapper;
