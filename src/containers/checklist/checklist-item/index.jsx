import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const CheckListItem = ({ item }) => {
  const classes = useStyles();

  const handleClickDelete = () => {
    // dispatch()
    // do somthing delete item. delete item
  };

  const handleToggle = () => {
    // do something.
  };

  return (
    <ListItem
      key={item.id}
      role={undefined}
      dense
      button
      onClick={handleToggle}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={item.checklistCompletionStatus}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': item.id }}
        />
      </ListItemIcon>
      <ListItemText id={'id-' + item.id} primary={`${item.name}`} />
      <ListItemSecondaryAction>
        <IconButton
          className={classes.iconButtonDelete}
          onClick={handleClickDelete}
          edge="end"
          aria-label="delete"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

const useStyles = makeStyles((theme) => ({
  iconButtonDelete: {
    color: 'red',
  },
}));

CheckListItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CheckListItem;
