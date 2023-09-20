import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, Typography, CardActionArea, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import styles from "Styles/card.module.scss";

//monitorSliec reducers
import {
  update,
  selectMonitorDevice,
  toggle,
  selectMonitorPlayStopStatus,
} from "Redux/components/monitor/monitorSlice";

//brokerSlice reducers
import {
  suscribe,
  resuscribe,
  unsuscribe,
} from "Redux/components/broker/brokerSlice";

// Import params
const { ddu } = window.api.config.broker.exchanges;

const ActionCard = ({ index, card, topic, ipcKey }) => {
  const dispatch = useDispatch();
  const { id, title, backgroundColor } = card;
  const isInitialMount = useRef(true);
  const selectedDevice = useSelector(selectMonitorDevice);
  const statusPlayStop = useSelector(selectMonitorPlayStopStatus);
  const theme = useTheme();
  const [t, i18n] = useTranslation();

  const brokerOptions = {
    params: {
      exchange: ddu,
      routingKey: topic,
    },
    ipcChannel: ipcKey,
  };

  const suscribeMonitorOnce = useCallback((device) => {
    if (device === selectedDevice) {
      dispatch(
        resuscribe({
          ...brokerOptions,
          action: update,
        })
      );
    }
  });

  useEffect(() => {
    return () => {
      if (selectedDevice === id) {
        dispatch(unsuscribe(brokerOptions));
      }
    };
  }, []);

  useEffect(() => {
    if (selectedDevice === id) {
      if (statusPlayStop) {
        dispatch(unsuscribe(brokerOptions));
      } else {
        suscribeMonitorOnce(id);
      }
    }
  }, [statusPlayStop, selectedDevice]);

  return (
    <React.Fragment>
      <Card
        ref={isInitialMount}
        raised={true}
        className={styles.card}
        sx={{
          backgroundColor:
            theme.palette.mode == "dark"
              ? backgroundColor.dark
              : backgroundColor.light,
        }}>
        <CardActionArea
          onClick={() => {
            dispatch(toggle({ device: { name: id }, title }));
          }}>
          <Stack spacing={2} className={styles.card_action}>
            <Typography
              className={styles.title_1}
              sx={{
                textTransform: "capitalize",
                fontSize: "clamp(0.7rem,1vw,1.5rem)",
                fontWeight: "500",
                color: "#edf6f9",
              }}>
              {t(title)}
            </Typography>
            <div className={styles.card_box_content}>
              <card.Icon className={styles.card_icon_big} />
            </div>
          </Stack>
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
};

export default React.memo(ActionCard);
