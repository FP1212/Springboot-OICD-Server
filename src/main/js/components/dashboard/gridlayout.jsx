import React, { useCallback, useMemo, useRef, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { SizeMe } from "react-sizeme";
import { useDispatch } from "react-redux";
import GridLayoutItem from "./gridlayoutItem";
import CustomCard from "../card";
import AddCard from "./AddCard";
import { DEFAULT_CARD_LAYOUT_PROPS } from "../../constants";

const GridLayout = (props) => {
  const { data, tabIndex } = props;
  const [breakpoint, onBreakpointChange] = useState("ls");
  const [layouts, onLayoutsChange] = useState({});
  const dispatch = useDispatch();

  const handleLayoutsChange = useCallback((currentLayout, newLayouts) => {
    //dispatch(layout({ tab: tabIndex, newLayout: newLayouts }));
    onLayoutsChange(newLayouts);
  }, []);

  const handleBreakpointChange = useCallback((newBreakpoint, newCols) => {
    // dispatch(
    //   breakpoint({
    //     tab: tabIndex,
    //     cols: newCols,
    //     breakpoint: newBreakpoint,
    //   }),
    // );
    onBreakpointChange(newBreakpoint);
  }, []);

  const renderCards = ({ cards }) =>
    cards
      ? cards[tabIndex].gridlayout.cards.map((data, i) => {
          return (
            <GridLayoutItem
              key={`gridlayout-${tabIndex}-${i}`}
              data-grid={cards[breakpoint]}
            >
              <CustomCard
                tab={tabIndex}
                index={i}
                // children={cardGenerator(data, theme, index)}
              />
            </GridLayoutItem>
          );
        })
      : [];

  const memoizedContent = useMemo(() => {
    const cards = renderCards(data);
    cards.push(
      <AddCard
        tabIndex={tabIndex}
        index={cards.length + 1}
        key={`defaultAddCard${cards.length + 1}`}
        {...DEFAULT_CARD_LAYOUT_PROPS}
      />,
    );
    return cards;
  }, [tabIndex, breakpoint]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "100vh",
      }}
    >
      <SizeMe>
        {({ size }) => (
          <ResponsiveGridLayout
            measureBeforeMount={true}
            maxRows={11}
            autoSize={true}
            width={size.width || 700}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 3, xxs: 3 }}
            {...props}
            compactType={"vertical"}
            onLayoutChange={handleLayoutsChange}
            onBreakpointChange={handleBreakpointChange}
          >
            {memoizedContent}
          </ResponsiveGridLayout>
        )}
      </SizeMe>
    </div>
  );
};

export default React.memo(GridLayout);
