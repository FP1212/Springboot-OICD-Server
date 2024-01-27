import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "Constants/routes";
import AuthService from "Services/AuthService";
// import styles from "Styles/login.module.scss";
import { useTranslation } from "react-i18next";
import Copyright from "Components/Copyright";
import hashPassword from "../../utils/PasswordHash";
import { selectLogin } from "../../redux/components/login/loginSlice";
import responseStatus from "../../constants/responseStatus.json";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { show } from "../../redux/components/globalAlert/globalAlert";
import LoadingBackdrop from "../../components/default/loadingBackdrop";

const defaultTheme = createTheme();

const SignInSide = () => {
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const { status, message } = useSelector(selectLogin);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async ({ username, password, rememberMe }) => {
    dispatch(
      AuthService.signin({ username, password, rememberMe, setLoading }),
    );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <LoadingBackdrop open={loading} />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("common.sign.in")}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 1 }}
            >
              <Controller
                name="username"
                control={control}
                rules={{
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }}
                render={({ field }) => (
                  <TextField
                    error={errors?.username}
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Email"
                    name="username"
                    autoComplete="user@email.com"
                    autoFocus
                    {...field}
                    helperText={
                      errors?.username?.type === "required"
                        ? "This field is required"
                        : errors?.username?.type === "pattern"
                          ? "Enter a valid email"
                          : ""
                    }
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    error={errors?.password}
                    margin="normal"
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    {...field}
                    helperText={
                      errors?.password?.type === "required"
                        ? "This field is required"
                        : ""
                    }
                  />
                )}
              />

              <Controller
                name="rememberMe"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox color="primary" {...field} />}
                    label="Remember me"
                  />
                )}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {t("common.sign.in")}
              </Button>
              <Grid container>
                {status && status != responseStatus.SUCCESS && (
                  <Grid item xs={12}>
                    <Alert severity="error">{message}</Alert>
                  </Grid>
                )}
                <Grid item xs>
                  <Link href={ROUTES.SIGNUP} variant="body2">
                    {t("common.register.forgot")}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={ROUTES.SIGNUP} variant="body2">
                    {t("common.register.account")}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default SignInSide;
