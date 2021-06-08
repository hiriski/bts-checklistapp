import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const RegisterHeader = () => {
  const classes = useStyles();
  const { isRegisterSuccess, token } = useSelector(
    (state) => state.authReducer,
  );

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h2">
        Login
      </Typography>
      <Typography>
        {" Don't Have Account ?"}{' '}
        <RouterLink component={Link} to="/register">
          Sign Up
        </RouterLink>
      </Typography>
      {isRegisterSuccess && (
        <Typography className={classes.hint}>
          Silahkan login dengan credentials yang sudah Anda daftarkan.
        </Typography>
      )}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
  hint: {
    color: 'blue',
  },
}));

export default RegisterHeader;
