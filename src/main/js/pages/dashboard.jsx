import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Tab, Tabs, Box, AppBar, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useApi } from '../utils/useApi';
import API_ROUTES from '../constants/apiRoutes';
import CreateDashboardModal from '../components/dashboard/CreateDashboardModal';
import GridLayout from '../components/dashboard/gridlayout';
import TabPanel from '../components/dashboard/subitem/tabpanel';
import ActionSpeedDial from '../components/default/ActionSpeedDial';
import styles from '../styles/dashboard.module.scss';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';

//brokerSlice reducers
// import { suscribe, unsuscribe } from "Redux/components/broker/brokerSlice";

const Dashboard = () => {
  const [t] = useTranslation();
  const theme = useTheme();
  const [result = {}, loaded, refresh] = useApi(API_ROUTES.DASHBOARD, false);
  const [openDashboardModal, setOpenDashboardModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDashboardModal = () => {
    setOpenDashboardModal(true);
  };

  const handleCloseDashboardModal = () => {
    setOpenDashboardModal(false);
  };

  const actions = [
    {
      icon: <DashboardCustomizeIcon />,
      name: 'Add Card',
      handleOnClick: handleOpenDashboardModal,
    },
  ];

  const [tabs, setTabs] = useState([{ title: 'test1' }, { title: 'test2' }]);
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
        display: 'flex',
        flexDirection: 'column',
        width: 'inherit',
        height: '100%',
      }}
    >
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
      <TabPanel
        key={`tab-panel#${tabIndex}`}
        value={tabIndex}
        index={tabIndex}
        dir={theme.direction}
      >
        {result ? (
          <GridLayout rowHeight={60} data={result} tabIndex={tabIndex} />
        ) : (
          <Box className={styles.flex_box_center}>
            <Typography variant={'h5'} color={'silver'}>
              {t('dashboard.cards.not.found.add.new')}
            </Typography>
          </Box>
        )}
      </TabPanel>
      <CreateDashboardModal open={openDashboardModal} onClose={handleCloseDashboardModal} />
      <ActionSpeedDial actions={actions} />
    </Box>
  );
};

export default React.memo(Dashboard);
