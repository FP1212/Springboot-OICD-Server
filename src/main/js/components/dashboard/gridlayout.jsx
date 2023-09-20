import React, { useRef } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { SizeMe } from "react-sizeme";

const defaultCols = { lg: 12, md: 10, sm: 6, xs: 3, xxs: 3 };

const GridLayout = (props) => {
  const {
    children,
    handleLayoutChange,
    handleBreakpointChange,
    cols,
  } = props;

  return (
    <div
      style={{
        width: "100%",
        maxHeight: "100vh",
      }}>
      <SizeMe>
        {({ size }) => (
          <ResponsiveGridLayout
            measureBeforeMount={true}
            maxRows={11}
            autoSize={true}
            width={size.width || 700}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={cols || defaultCols}
            {...props}
            compactType={"vertical"}
            onLayoutChange={handleLayoutChange}
            onBreakpointChange={handleBreakpointChange}>
            {children}
          </ResponsiveGridLayout>
        )}
      </SizeMe>
    </div>
  );
};

export default React.memo(GridLayout);
