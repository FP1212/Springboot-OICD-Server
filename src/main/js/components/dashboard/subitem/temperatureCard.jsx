import React from "react";
import { Slider, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function preventHorizontalKeyboardNavigation(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
  }
}
const scale = (unscaledNum, minAllowed, maxAllowed, min, max) => {
  return (
    ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) + minAllowed
  );
};
const TemperatureCard = (props) => {
  const { data, index } = props;

  return (
    <Box
      sx={{
        height: "inherit",
        margin: "auto",
      }}>
      <Slider
        sx={{
          "& .MuiSlider-valueLabelOpen": {
            background: "#159a5a",
            // color: theme.palette.mode==="dark" ? "#e2e2e2":theme.palette.text.primary,
          },

          '& input[type="range"]': {
            WebkitAppearance: "slider-vertical",
          },
          "color": "#159a5a",
          "width": "1vw",

          "& .MuiSlider-markLabel": {
            fontSize: "clamp(0.5rem,1vw,1rem)",
          },
        }}
        orientation="vertical"
        value={scale(Math.round(data.value), 0, 100, 0, 50)}
        aria-label="Temperature"
        onKeyDown={preventHorizontalKeyboardNavigation}
        valueLabelDisplay="on"
        valueLabelFormat={(value) => (
          <div>{Number.parseFloat(data.value).toFixed(1)}</div>
        )}
        getAriaValueText={(value) => {
          return data.unit;
        }}
        marks={[
          { value: 0, label: "0°C" },
          { value: 50, label: "25°C" },
          { value: 100, label: "50°C" },
        ]}
      />
    </Box>
  );
};

export default TemperatureCard;
