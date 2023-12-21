import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
// import TabPanel from "Components/dashboard/subitem/tabpanel";
// import GridLayout from "Components/dashboard/gridlayout";
// import GridLayoutItem from "Components/dashboard/gridlayoutItem";
import { useTheme } from "@mui/material/styles";
import { Tab, Tabs, Box, AppBar, Button } from "@mui/material";
// import CustomCard from "Components/card";
// import { tabs } from "Constants/layouts/dashboard";
// import IPCKEYS from "Constants/ipckeys.json";
// import { resuscribe } from "Redux/components/broker/brokerSlice";
//import ButtonAddCard from "Components/dashboard/gridlayout/subitem/buttonAddCard";
// import { cardGenerator } from "Utils/CardGenerator";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import AuthService from "Services/AuthService";
import { useApi } from "../../utils/useApi";
import API_ROUTES from "Constants/apiRoutes";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { AddCircle } from "@mui/icons-material";
import CreateDashboardModal from "../../components/dashboard/CreateDashboardModal";

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

// const TabContent = React.memo((props) => {
//   const { index, selectedTab, theme, defaultCols } = props;
//   const dispatch = useDispatch();
//   const cards = useSelector(getCards);
//   const currentBreakpoint = useSelector(selectCurrentBreakpoint(selectedTab));
//   const handleLayoutChange = useCallback((currentLayout, layouts) => {
//     //dispatch(layout({ tab: selectedTab, newLayout: layouts }));
//   }, []);
//
//   const handleBreakpointChange = useCallback((newBreakpoint, newCols) => {
//     dispatch(
//       breakpoint({
//         tab: selectedTab,
//         cols: newCols,
//         breakpoint: newBreakpoint,
//       }),
//     );
//   }, []);
//
//   const memoizedContent = useMemo(
//     () =>
//       cards[selectedTab].gridlayout.cards.map((data, i) => {
//         return (
//           <GridLayoutItem
//             key={`gridlayout-${selectedTab}-${i}`}
//             data-grid={data.dimensions[currentBreakpoint]}
//           >
//             <CustomCard
//               tab={selectedTab}
//               index={i}
//               children={cardGenerator(data, theme, index)}
//             />
//           </GridLayoutItem>
//         );
//       }),
//     [selectedTab, currentBreakpoint],
//   );
//
//   return (
//     <TabPanel
//       key={`tabpanel${index}`}
//       value={selectedTab}
//       index={selectedTab}
//       dir={theme.direction}
//     >
//       <GridLayout
//         className="layout"
//         handleLayoutChange={handleLayoutChange}
//         handleBreakpointChange={handleBreakpointChange}
//         rowHeight={60}
//         cols={defaultCols}
//       >
//         {memoizedContent}
//       </GridLayout>
//     </TabPanel>
//   );
// });

const Dashboard = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const [result = [], loaded, refresh] = useApi(API_ROUTES.DASHBOARD, false);
  const [openDashboardModal, setOpenDashboardModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDashboardModal = () => {
    setOpenDashboardModal(true);
  };

  const handleCloseDashboardModal = () => {
    setOpenDashboardModal(false);
  };

  const [tabs, setTabs] = useState([{ title: "test1" }, { title: "test2" }]);
  const [tabIndex, setTabIndex] = useState(0);

  const tabsComponent = useMemo(
    () =>
      tabs.map((tab, index) => (
        <Tab
          className="tab-item"
          key={`tab${index}`}
          label={t(tab.title)}
          id={`full-width-tab-${index}`}
          aria-controls={`full-width-tabpanel-${index}`}
        />
      )),
    [tabs],
  );

  const handleOnChangeTabIndex = (event, index) => {
    setTabIndex(index);
  };

  const handleAddTab = () => {
    const newTabIndex = tabs.length + 1;
    const newTab = {
      title: `Pestaña ${newTabIndex}`,
    };
    setTabs([...tabs, newTab]);
    setTabIndex(newTabIndex - 1); // Selecciona la pestaña recién creada
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "inherit",
        height: "inherit",
      }}
    >
      {/*<Typography variant={"h4"} color={"inherit"}>*/}
      {/*  Dashboard*/}
      {/*</Typography>*/}
      <Box display="flex" alignItems="center">
        <Tabs
          value={tabIndex}
          onChange={handleOnChangeTabIndex}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
        >
          {tabsComponent}
        </Tabs>
        <Button variant="contained" color="primary" onClick={handleAddTab}>
          +
        </Button>
      </Box>
      {/*<TabContent*/}
      {/*  tabs={tabs}*/}
      {/*  selectedTab={tab}*/}
      {/*  theme={theme}*/}
      {/*  defaultCols={defaultCols}*/}
      {/*/>*/}
      <CreateDashboardModal
        open={openDashboardModal}
        onClose={handleCloseDashboardModal}
      />
    </Box>
  );
};

export default React.memo(Dashboard);
