import GridLayoutItem from "./gridlayoutItem";
import CustomCard from "../card";
import React from "react";
import PropTypes from "prop-types";
import styles from "../../styles/card.module.scss";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const AddCard = React.forwardRef(({ tabIndex, index, ...props }, ref) => {
  const [t] = useTranslation();
  return (
    <GridLayoutItem
      ref={ref}
      key={`gridlayoutitem-${tabIndex}-${index}`}
      {...props}
    >
      <CustomCard tab={tabIndex} index={index}>
        <div className={styles.card_box_content}>
          <Typography component={"h3"} color={"silver"}>
            {t("add.new.card")}
          </Typography>
        </div>
      </CustomCard>
    </GridLayoutItem>
  );
});

AddCard.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default AddCard;
