import React from "react";
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import ROUTES from "Constants/routes";
import "Styles/login.module.scss";

const Home = () => {
  const history = useHistory();
  const [t] = useTranslation();

  return (
    <div className="home-container">
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className="app-title">
            IotWatch
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => history.push(ROUTES.SIGNUP)}
            sx={{
              width: "auto",
              textTransform: "capitalize",
              fontSize: "clamp(0.5rem,1vw,1rem)",
              fontWeight: "400",
            }}
          >
            {t("common.sign.up")}
          </Button>
          <Button
            color="inherit"
            onClick={() => history.push(ROUTES.SIGNIN)}
            sx={{
              width: "auto",
              textTransform: "capitalize",
              fontSize: "clamp(0.5rem,1vw,1rem)",
              fontWeight: "400",
            }}
          >
            {t("common.sign.in")}
          </Button>
        </Toolbar>
      </AppBar>
      <section className="banner">
        <Container>
          <Typography variant="h2" className="banner-title">
            Bienvenido a IotWatch
          </Typography>
        </Container>
      </section>
      <section className="features">
        <Container>
          <Typography variant="h4" className="features-title">
            Características destacadas
          </Typography>
          {/* Agrega aquí información sobre las características de la aplicación */}
        </Container>
      </section>
      <section className="contact">
        <Container>
          <Typography variant="h4" className="contact-title">
            Contáctenos
          </Typography>
          {/* Agrega aquí información de contacto */}
        </Container>
      </section>
    </div>
  );
};

export default Home;
