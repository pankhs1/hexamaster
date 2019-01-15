import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";
import { ic_home } from "react-icons-kit/md/ic_home";
import { ListItem, ListItemIcon, ListItemText, List } from "@material-ui/core";
export default props => {
  const { classProp } = props;
  return (
    <Fragment>
      <div>
        <div className={classProp.toolbar} />
      </div>
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <Icon icon={ic_home} size={30} />
          </ListItemIcon>
          <ListItemText secondary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <Icon icon={ic_account_circle} size={30} />
          </ListItemIcon>
          <ListItemText secondary="Profile" />
        </ListItem>
      </List>
    </Fragment>
  );
};
