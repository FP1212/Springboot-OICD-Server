import React from "react";
import SpeedGauge from "Components/dashboard/subitem/speedGauge";
import HeadingGauge from "Components/dashboard/subitem/headingGauge";
import DepthCard from "Components/dashboard/subitem/depthCard";
import LatLonCard from "Components/dashboard/subitem/latlonCard";
import BarometerGauge from "Components/dashboard/subitem/barometerGauge";
import PolarChart from "Components/dashboard/subitem/polarchart";
import CustomCard from "Components/dashboard/subitem/pitchrollCard";
import TemperatureCard from "Components/dashboard/subitem/temperatureCard";
import HumidityCard from "Components/dashboard/subitem/humidityCard";
import HeaveCard from "Components/dashboard/subitem/heaveCard";
import LineChart from "Components/dashboard/subitem/lineChart";
import AreaChart from "Components/dashboard/subitem/areaChart";
import ModelInertial3D from "Components/dashboard/subitem/viewer3D";
import NavyModel from "Resources/others/navy.stl";

export const cardGenerator = (props, theme, index = 0) => {
  const { designType: type, subtype } = props;

  switch (type) {
    case "polarArea":
      return (
        <PolarChart
          sx={{ color: theme.palette.text.primary }}
          index={index}
          {...props}
        />
      );
    case "latlon":
      return <LatLonCard index={index} {...props} />;
    case "heave":
      return (
        <HeaveCard {...props} key={`${props.title} heave`} index={index} />
      );
    case "pitchroll":
      switch (subtype) {
        case "3d":
          return (
            <ModelInertial3D
              {...props}
              url={NavyModel}
              key={`${props.title} 3d`}
              index={index}
            />
          );
        default:
          return (
            <CustomCard
              {...props}
              key={`${props.title} CustomCard`}
              index={index}
            />
          );
      }

    case "temperature":
      switch (subtype) {
        case "chart":
          return (
            <LineChart
              {...props}
              key={`${props.title} temperature`}
              index={index}
            />
          );
        default:
          return (
            <TemperatureCard
              {...props}
              key={`${props.title} TemperatureCard`}
              index={index}
            />
          );
      }

    case "humidity":
      return (
        <HumidityCard
          {...props}
          key={`${props.title} humidity`}
          index={index}
        />
      );
    case "depth":
      switch (subtype) {
        case "chart":
          return (
            <AreaChart {...props} key={`${props.title} depth`} index={index} />
          );
        default:
          return <DepthCard {...props} index={index} />;
      }

    case "barometer":
      return <BarometerGauge {...props} index={index} />;
    case "heading":
      return (
        <HeadingGauge {...props} key={`${props.title} heading`} index={index} />
      );
    case "stw":
      return <SpeedGauge {...props} key={`${props.title} stw`} index={index} />;
    case "sog":
      return <SpeedGauge {...props} key={`${props.title} sog`} index={index} />;
    default:
      throw new Error("CardType not found");
  }
};
