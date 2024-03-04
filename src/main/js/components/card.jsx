import React, { useState, cloneElement, useRef, useMemo } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import styles from "Styles/card.module.scss";

const menuItems = ["Cambiar Color", "Forzar Valor", "Remover"];

const CustomCardHeader = React.memo(
  ({ Icon, title = "", tab, index, items, date }) => {
    const [menu, setMenuState] = useState({
      open: false,
      anchorEl: null,
      selected: undefined,
    });

    const dispatch = useDispatch();
    const theme = useTheme();

    // Effect to execute a function when a menu has been selected
    // useEffect(() => {
    //   const item = items[menu.selected];

    //   if (item) {
    //     switch (item) {
    //       case "Cambiar Color":
    //         break;
    //       case "Forzar Valor":
    //         break;
    //       case "Remover":
    //         dispatch(remove({ tab: tab, index: index }));
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    // }, [menu.selected]);

    const menuList = useMemo(
      () =>
        items.map((menu, index) => (
          <MenuItem
            key={"menu" + index}
            value={index}
            onClick={(event) => {
              setMenuState({
                ...menu,
                open: false,
                anchorEl: event.currentTarget,
                selected: event.currentTarget.value,
              });
            }}
          >
            {menu}
          </MenuItem>
        )),
      [],
    );

    return (
      <React.Fragment>
        <CardHeader
          sx={{ width: "100%" }}
          avatar={
            Icon && (
              <Icon
                sx={{ fill: theme.palette.info.dark }}
                aria-label="recipe"
              />
            )
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={(event) => {
                setMenuState({
                  ...menu,
                  anchorEl: event.currentTarget,
                  open: Boolean(event.currentTarget),
                });
              }}
            >
              <MoreVertIcon />
            </IconButton>
          }
          titleTypographyProps={{
            textTransform: "capitalize",
            fontSize: "clamp(0.7rem,1vw,1.5rem)",
            fontWeight: "500",
            color: theme.palette.text.primary,
          }}
          title={title}
          //subheader={date.toLocaleString()}
        />
        <Menu
          id="simple-menu"
          anchorEl={menu.anchorEl}
          keepMounted
          open={menu.open}
          onClose={() => {
            setMenuState({
              ...menu,
              anchorEl: null,
              open: false,
            });
          }}
        >
          {menuList}
        </Menu>
      </React.Fragment>
    );
  },
);

/**
 * Componente que representara una Card con un sensor
 */
const CustomCard = ({ children, tab, index }) => {
  const theme = useTheme();
  const [t] = useTranslation();

  return (
    <Card
      raised={true}
      className={styles.card}
      sx={{
        backgroundColor: theme.palette.mode == "dark" ? grey[900] : "#f8f9fa",
      }}
    >
      <CustomCardHeader
        title={children.props?.title?.()}
        date={children.props.date?.()}
        tab={tab}
        index={index}
        items={menuItems}
        Icon={children.props.Icon?.()}
      />
      <CardContent
        className={styles.card_content}
        sx={{
          padding: "0px",
        }}
        children={children}
      />
    </Card>
  );
};

export default React.memo(CustomCard);
