import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Tab, Tabs, Grid } from "@mui/material";
import TabPanel from "Components/dashboard/subitem/tabpanel";
import TableStatusPriority from "Components/customTablePriority";
import {
  update,
  changePriority,
  setTab,
  selectTabs,
  selectExchange,
  selectCurrentTab,
} from "Redux/components/configuration/configurationSlice";
import { useTranslation } from "react-i18next";

const status = () => {
  const tabIndex = useSelector(selectCurrentTab);
  const tabs = useSelector(selectTabs);
  const dispatch = useDispatch();
  const exchange = useSelector(selectExchange);
  const [t, i18n] = useTranslation();

  return (
    <React.Fragment>
      <div>
        <Tabs
          value={tabIndex}
          onChange={(e, index) => dispatch(setTab(index))}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered>
          {tabs.map((tab, index) => (
            <Tab
              className="tab-item"
              key={`tab${index}`}
              label={t(tab.title)}
              id={`full-width-tab-${tab.id}`}
              aria-controls={`full-width-tabpanel-${tab.id}`}
            />
          ))}
        </Tabs>
      </div>
      {tabs.map((tab, index) => (
        <TabPanel key={`tabpanel${index}`} value={tabIndex} index={index}>
          <Grid container spacing={2}>
            {tab.tables.map((table, index) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  ls={4}
                  key={`tabstatus${index}`}>
                  <TableStatusPriority
                    title={t(table.title)}
                    sources={table.content.sources}
                    action={{ update, changePriority }}
                    headers={
                      table.showValues
                        ? [t("Source"), t("Status"), t("Priority")]
                        : [t("Source"), t("Status")]
                    }
                    showValues={table.showValues}
                    customStyle={table.style}
                    brokerOptions={{
                      params: {
                        exchange,
                        routingKey: table.content.routingKey,
                      },
                      ipcChannel: table.content.ipcChannel,
                      table: table.title,
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </TabPanel>
      ))}
    </React.Fragment>
  );
};

export default status;
