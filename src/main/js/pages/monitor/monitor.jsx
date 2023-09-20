import React, { useState, useRef, useEffect } from "react";
import {
  Typography,
  Stack,
  Box,
  Divider,
  Card,
  styled,
  Toolbar,
} from "@mui/material";
import monitorLayout from "Constants/layouts/monitor";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import GridLayout from "Components/dashboard/gridlayout";
import ActionCard from "Components/monitor/actionCard";
import MonitorCard from "Components/monitor/monitorCard";
import ResumeTableCard from "Components/monitor/resumeTableCard";
import IPCKEYS from "Constants/ipckeys.json";
import { DDU_MAIN_UNIT_TOPICS } from "Broker/config/topics";
import styles from "Styles/monitor.module.scss";

const createActionCard = (layouts, breakpoint, cards) => {
  return layouts[breakpoint].map((card, index) => {
    return (
      <div
        key={card.i + "actioncard"}
        style={{ width: "100%", height: "100%" }}>
        <ActionCard
          card={cards[index]}
          index={index}
          topic={`${DDU_MAIN_UNIT_TOPICS.ddu_main_unit_device_data_input.id}.${cards[index].id}`}
          ipcKey={IPCKEYS.monitorKey}
        />
      </div>
    );
  });
};

const Monitor = () => {
  const [state, setState] = useState(monitorLayout.gridlayout);

  const handleLayoutChange = (currentLayout, layouts) => {
    setState({
      ...state,
      layouts: { ...state.layouts, layouts },
    });
  };

  const handleBreakpointChange = (newBreakpoint, newCols) => {
    setState({ ...state, cols: newCols, breakpoint: newBreakpoint });
  };

  const ref = useRef(null);
  return (
    <React.Fragment>
      <div className={styles.monitor}>
        <div className={styles.monitor_col_left}>
          <GridLayout
            layouts={state.layouts}
            handleBreakpointChange={handleBreakpointChange}
            isResizable={true}
            isDraggable={true}
            isDroppable={true}
            rowHeight={77}
            cols={{ lg: 9, md: 9, sm: 9, xs: 9, xxs: 9 }}>
            {createActionCard(state.layouts, state.breakpoint, state.cards)}
          </GridLayout>
        </div>
        <div className={styles.monitor_col_right}>
          <div className={styles.monitor_col_right_card}>
            <MonitorCard />
          </div>
          <div className={styles.monitor_col_right_card}>
            <ResumeTableCard />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Monitor;
