import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { memo, useCallback, useState } from "react";

import Combo from "../../assets/imgs/combo.png";
import Information from "../../assets/imgs/information.png";

import Style from "./style";

const ComboItem = ({ funcPriceCombo, priceCombo, count, item, ...props }) => {
  const classes = Style(props);

  const [countState, setCountState] = useState(count);

  const handleBtnCombo = useCallback(
    (type, price) => {
      if (type) {
        setCountState(countState + 1);
        funcPriceCombo(+priceCombo + price);
      } else {
        if (countState === 0) return;
        setCountState(countState - 1);
        funcPriceCombo(+priceCombo - price);
      }
    },
    [countState, priceCombo, funcPriceCombo]
  );

  return (
    <Grid container className={classes.comboItem}>
      <Grid item md={2} sm={2} className="comboLogo">
        <img src={Combo} alt="combo" />
      </Grid>
      <Grid item md={7} sm={7} className="comboDetail">
        <Accordion className={classes.collapse}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <img src={Information} alt="info" />
            {item.itemTitle}
          </AccordionSummary>
          <AccordionDetails className="collapseDetails">
            <Typography>{item.info}</Typography>
          </AccordionDetails>
        </Accordion>
        <Typography>
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ
        </Typography>
      </Grid>
      <Grid item md={3} sm={3} className="comboCount">
        <Button
          className="btnDiminish"
          onClick={() => handleBtnCombo(0, item.price)}
        >
          -
        </Button>
        <Typography component="span">{countState}</Typography>
        <Button
          className="btnAdd"
          onClick={() => handleBtnCombo(1, item.price)}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default memo(ComboItem);
