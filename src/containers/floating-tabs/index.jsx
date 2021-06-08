import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { CSSTransition } from 'react-transition-group';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import tabs from 'src/config/tabs';

const FloatingTab = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const [contentWidth, setContentWidth] = React.useState(0);
  const elRef = React.useRef(null);

  React.useEffect(() => {
    if (elRef.current.offsetWidth > 0) {
      setContentWidth(elRef.current.offsetWidth);
    }
  }, [elRef]);

  return (
    <CSSTransition in={Boolean(contentWidth)} timeout={400}>
      <div
        className={classes.root}
        style={{ left: `calc(50% - ${contentWidth / 2}px)` }}
        ref={elRef}
      >
        <Box className={classes.container}>
          {tabs.map((item, index) => (
            <RouterLink
              className={clsx(
                classes.item,
                pathname === item.path && classes.itemActive,
              )}
              key={index}
              to={item.path}
            >
              {<item.Icon />}
              <Typography
                className={classes.label}
                component="span"
                variant="subtitle2"
              >
                {item.title}
              </Typography>
            </RouterLink>
          ))}
        </Box>
      </div>
    </CSSTransition>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(4),
    visibility: 'hidden',
    transform: 'translateY(114px)',
    '&.enter-done': {
      visibility: 'visible',
      transform: 'translateY(0)',
      transition: `all ${300}ms ease`,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    padding: theme.spacing(1.4, 2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 31px 65px -6px rgba(0,0,0,0.20)',
    '-webkit-box-shadow': '0px 31px 65px -6px rgba(0,0,0,0.20)',
    '-moz-box-shadow': '0px 31px 65px -6px rgba(0,0,0,0.20)',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 40,
    textDecoration: 'none',
    padding: theme.spacing(1, 1.6),
    color: theme.palette.primary.main,
    margin: theme.spacing(0, 0.5),
    '& svg': {
      fontSize: '1.2rem',
      marginRight: theme.spacing(1),
    },
  },
  itemActive: {
    backgroundColor: theme.palette.primary.main,
    color: '#fbfbfb',
  },
  label: {
    lineHeight: 1.1,
  },
}));

export default FloatingTab;
