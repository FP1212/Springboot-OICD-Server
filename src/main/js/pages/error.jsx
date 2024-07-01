import React from "react";
import {
  CssBaseline,
  Container,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  paper: {
    padding: 4,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    fontSize: "72px",
    color: "#f44336", // Color rojo
  },
  message: {
    marginTop: 2,
  },
  button: {
    marginTop: 2,
  },
};

const ErrorPage = ({ history }) => {
  return (
    <Container maxWidth="sm" sx={styles.container}>
      <CssBaseline />
      <Paper elevation={3} sx={styles.paper}>
        <ErrorOutlineIcon sx={styles.icon} />
        <Typography variant="h5">¡Error!</Typography>
        <Typography variant="body1" sx={styles.message}>
          Ocurrió un error en la plataforma de IoT.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
          onClick={() => history.goBack()}
        >
          Volver al inicio
        </Button>
      </Paper>
    </Container>
  );
};

ErrorPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default ErrorPage;
