import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChecklistItem from '../checklist-item';

export const ChecklistContainer = ({ data }) => {
  const classes = useStyles();
  return (
    <List className={classes.root}>
      {data.map((item, index) => (
        <ChecklistItem key={index} item={item} />
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

ChecklistContainer.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ChecklistContainer;
