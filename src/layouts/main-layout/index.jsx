import React from 'react';
import { Outlet } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import FloatingTab from 'src/containers/floating-tabs';

const MainLayout = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Outlet />
        <FloatingTab />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
    width: '100%',
  },
}));

export default MainLayout;
