import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import ROUTES from '../constants/routes.json';
import '../styles/login.module.scss';
import { useKeycloak } from '@react-keycloak/web';

const Home = () => {
  const history = useHistory();
  const [t] = useTranslation();
  const { keycloak, initialized } = useKeycloak();
  return <div className="home-container">Home</div>;
};

export default Home;
