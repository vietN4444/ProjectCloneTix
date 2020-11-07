import { Box, Typography } from "@material-ui/core";
import React, { useCallback } from "react";
import Style from "./style";

const NavbarTabTitle = ({ dataNav, navPage, handleSetTab, tab, ...props }) => {
  const classes = Style(props);

  const renderNavbar = useCallback(() => {
    return dataNav.map((title, index) => {
      return (
        <Box
          key={index}
          className={
            tab === index
              ? classes.title
              : navPage
              ? `${classes.subTitleDetailPage} ${classes.subTitle}`
              : classes.subTitle
          }
          onClick={() => handleSetTab(index)}
        >
          <Typography variant="h4" component="h4">
            {title}
          </Typography>
        </Box>
      );
    });
  }, [dataNav, tab]);

  return (
    <Box className={classes.boxTitle} mb={2}>
      {renderNavbar()}
    </Box>
  );
};

export default NavbarTabTitle;
