import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const ChecklistHeader = () => {
  const classes = useStyles();

  const handleClickAdd = () => {
    //do something. show input checklist
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h1" variant="h2">
        Checklist
      </Typography>
      <Button
        onClick={handleClickAdd}
        variant="contained"
        color="primary"
        disableElevation
      >
        Create new list
      </Button>
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
    marginBottom: theme.spacing(2),
  },
}));

export default ChecklistHeader;
