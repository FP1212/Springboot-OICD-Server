import React, { useEffect, useRef } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { SizeMe } from "react-sizeme";
import useSizeMe from "Components/dashboard/useSizeme";

const defaultCols = { lg: 12, md: 10, sm: 6, xs: 3, xxs: 3 };

const GridLayout = (props) => {
  const { create, layouts, handleLayoutChange, handleBreakpointChange, cols } =
    props;

  const [sized, width, height] = useSizeMe(
    ({ width, height }) => {
      return (
        <ResponsiveGridLayout
          maxRows={11}
          autoSize={true}
          measureBeforeMount={false}
          width={width || 700}
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={cols || defaultCols}
          {...props}
          compactType={"vertical"}
          // onLayoutChange={handleLayoutChange}
          onBreakpointChange={handleBreakpointChange}>
          {create}
        </ResponsiveGridLayout>
      );
    },
    { monitorHeight: true }
  );

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "30vh",
      }}>
      {sized}
    </div>
  );
};

export default GridLayout;
