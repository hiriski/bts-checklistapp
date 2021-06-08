import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from 'src/components/common/page';
import LoginFormContainer from 'src/containers/auth/login-form';
import LoginHeader from 'src/containers/auth/login-form/header';
import { resetRegisterState } from 'src/modules/auth/actions';

const RegisterPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isRegisterSuccess, token } = useSelector(
    (state) => state.authReducer,
  );

  React.useEffect(() => {
    if (token) {
      dispatch(resetRegisterState());
      navigate('/app', { replace: true });
    }
  }, [token, isRegisterSuccess]);

  return (
    <Page className={classes.root} title="Register">
      <Container>
        <LoginHeader />
        <LoginFormContainer />
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

export default RegisterPage;
