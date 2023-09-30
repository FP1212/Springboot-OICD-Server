import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
// import TabPanel from "Components/dashboard/subitem/tabpanel";
// import GridLayout from "Components/dashboard/gridlayout";
// import GridLayoutItem from "Components/dashboard/gridlayoutItem";
import { useTheme } from "@mui/material/styles";
import { Tab, Tabs, Box, AppBar } from "@mui/material";
// import CustomCard from "Components/card";
// import { tabs } from "Constants/layouts/dashboard";
// import IPCKEYS from "Constants/ipckeys.json";
// import { resuscribe } from "Redux/components/broker/brokerSlice";
//import ButtonAddCard from "Components/dashboard/gridlayout/subitem/buttonAddCard";
// import { cardGenerator } from "Utils/CardGenerator";
import { useTranslation } from "react-i18next";

//dashboardSlice reducers
// import {
//   selectDashboardLayouts,
//   selectDashboardTab,
//   update,
//   breakpoint,
//   setTab,
//   selectCurrentBreakpoint,
//   getCards,
//   selectRoutingKey,
// } from "Redux/components/dashboard/dashboardSlice";

//brokerSlice reducers
// import { suscribe, unsuscribe } from "Redux/components/broker/brokerSlice";

const TabContent = React.memo((props) => {
  const { index, selectedTab, theme, defaultCols } = props;
  const dispatch = useDispatch();
  const cards = useSelector(getCards);
  const currentBreakpoint = useSelector(selectCurrentBreakpoint(selectedTab));
  const handleLayoutChange = useCallback((currentLayout, layouts) => {
    //dispatch(layout({ tab: selectedTab, newLayout: layouts }));
  }, []);

  const handleBreakpointChange = useCallback((newBreakpoint, newCols) => {
    dispatch(
      breakpoint({
        tab: selectedTab,
        cols: newCols,
        breakpoint: newBreakpoint,
      })
    );
  }, []);

  const memoizedContent = useMemo(
    () =>
      cards[selectedTab].gridlayout.cards.map((data, i) => {
        return (
          <GridLayoutItem
            key={`gridlayout-${selectedTab}-${i}`}
            data-grid={data.dimensions[currentBreakpoint]}
          >
            <CustomCard
              tab={selectedTab}
              index={i}
              children={cardGenerator(data, theme, index)}
            />
          </GridLayoutItem>
        );
      }),
    [selectedTab, currentBreakpoint]
  );

  return (
    <TabPanel
      key={`tabpanel${index}`}
      value={selectedTab}
      index={selectedTab}
      dir={theme.direction}
    >
      <GridLayout
        className="layout"
        handleLayoutChange={handleLayoutChange}
        handleBreakpointChange={handleBreakpointChange}
        rowHeight={60}
        cols={defaultCols}
      >
        {memoizedContent}
      </GridLayout>
    </TabPanel>
  );
});

const Dashboard = () => {
  const [t] = useTranslation();
  const theme = useTheme();

  //Simil to DidComponentMount
  const isInitialMount = useRef(true);
  // const dispatch = useDispatch();
  // const selectedTab = useSelector(selectDashboardTab);
  // const routingKey = useSelector(selectRoutingKey(selectedTab));

  // useEffect(() => {
  //   if (isInitialMount) {
  //     dispatch(
  //       resuscribe({
  //         ...brokerOptions,
  //         action: update,
  //       })
  //     );
  //   }
  //   return () => {
  //     dispatch(unsuscribe(brokerOptions));
  //   };
  // }, [routingKey]);

  const tabsComponent = useMemo(
    () =>
      tabs.map((tab, index) => (
        <Tab
          className="tab-item"
          key={`tab${index}`}
          label={t(tab.title)}
          id={`full-width-tab-${tab.id}`}
          aria-controls={`full-width-tabpanel-${tab.id}`}
        />
      )),
    []
  );

  const handleOnChangeTabIndex = useCallback((event, index) => {
    dispatch(setTab({ tab: index }));
  }, []);

  return (
    <React.Fragment>
      <Box>
        Dashboard
        {/* <Tabs
          value={selectedTab}
          onChange={handleOnChangeTabIndex}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered>
          {tabsComponent}
        </Tabs> */}
      </Box>
      {/* <TabContent
        tabs={tabs}
        selectedTab={selectedTab}
        theme={theme}
        defaultCols={defaultCols}
      /> */}
    </React.Fragment>
  );
};

export default React.memo(Dashboard);
