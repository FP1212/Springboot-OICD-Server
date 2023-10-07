import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Tooltip,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ROUTES from "Constants/routes";
import Alert from "@mui/material/Alert";
import React, { useState, useEffect } from "react";
import DarkLightSwitch from "Components/darkLightSwitch";
import { useHistory } from "react-router";
// Import loginSlice reducers
import { login, selectLogin } from "Redux/components/login/loginSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "Styles/login.module.scss";
import { useTranslation } from "react-i18next";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      Cotecmar {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const WarningAlert = (props) => {
  switch (props.status) {
    case 1:
      return <Alert severity="success">Sucesfull</Alert>;
    case 2:
      return (
        <Alert severity="warning">
          Error, Usuario o contraseña incorrectos
          {/* ,IP:
          {params.config_connection_api.address}, PORT:
          {params.config_connection_api.port} */}
        </Alert>
      );
    case 3:
      return (
        <Alert severity="info">
          Intentando conectar al servidor
          {/* , IP:
          {params.config_connection_api.address}, PORT:
          {params.config_connection_api.port} */}
        </Alert>
      );
    case 4:
      return (
        <Alert severity="error">
          Servidor Inaccesible:
          {/* {params.config_connection_api.address}, PORT:
          {params.config_connection_api.port} */}
        </Alert>
      );
    case 5:
      console.log("Missing user or password");
      return (
        <Alert severity="error">
          Falta uno o mas campos
          {/* ,IP:
          {params.config_connection_api.address}, PORT:
          {params.config_connection_api.port} */}
        </Alert>
      );

    default:
      return <div></div>;
  }
};

const SignIng = () => {
  const history = useHistory();
  const loginState = useSelector(selectLogin);
  const dispatch = useDispatch();
  const [t] = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    const rememberMe = data.get("remember");

    dispatch(login({ username, password, rememberMe }));
  };

  useEffect(() => {
    if (loginState.authenticate) {
      history.push(ROUTES.DASHBOARD);
    }
  }, [loginState]);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={styles.login_box}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h4">
          {t("common.sign.in")}
        </Typography>
        <Typography component="h3" variant="h5">
          {t("common.register.banner") + ", " + t("common.register.register")}
        </Typography>
        <Box
          component="form"
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label={"User Name"}
            name="username"
            autoComplete="Username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={"Password"}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox value="true" name="remember" color="primary" />
              }
              label={"Remember me"}
            />
            <DarkLightSwitch />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {"Sign in"}
          </Button>
        </Box>
      </div>
      <WarningAlert status={loginState.status} />
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
  );
};
export default SignIng;
