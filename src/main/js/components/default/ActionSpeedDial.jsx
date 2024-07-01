import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import PropTypes from "prop-types";

const ActionSpeedDial = ({ actions }) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: 32, right: 32 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.handleOnClick}
        />
      ))}
    </SpeedDial>
  );
};

ActionSpeedDial.propTypes = {
  actions: PropTypes.array.isRequired,
};

export default ActionSpeedDial;
