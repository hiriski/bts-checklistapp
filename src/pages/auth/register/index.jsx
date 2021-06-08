import React from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Page from 'src/components/common/page';
import RegisterFormContainer from 'src/containers/auth/register-form';
import RegisterHeader from 'src/containers/auth/register-form/header';
import { useSelector } from 'react-redux';

const RegisterPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { isRegisterSuccess } = useSelector((state) => state.authReducer);

  React.useEffect(() => {
    if (isRegisterSuccess) {
      navigate('/login', { replace: true });
    }
  }, [isRegisterSuccess]);

  return (
    <Page className={classes.root} title="Register">
      <Container>
        <RegisterHeader />
        <RegisterFormContainer />
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
