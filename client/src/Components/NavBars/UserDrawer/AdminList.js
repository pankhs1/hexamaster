import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";
import { ic_account_circle } from "react-icons-kit/md/ic_account_circle";
import { ic_home } from "react-icons-kit/md/ic_home";
import { ic_toc } from "react-icons-kit/md/ic_toc";
import { caretDown } from "react-icons-kit/fa/caretDown";
import { listUl } from "react-icons-kit/fa/listUl";
import { caretUp } from "react-icons-kit/fa/caretUp";
import { ic_av_timer } from "react-icons-kit/md/ic_av_timer";
import { ic_cloud_upload } from "react-icons-kit/md/ic_cloud_upload";
import { clipboard } from "react-icons-kit/fa/clipboard";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  Collapse
} from "@material-ui/core";
export default props => {
  const { classProp, state } = props;
  return (
    <Fragment>
      <div>
        <div className={classProp.toolbar} />
      </div>
      <List>
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <Icon icon={ic_home} size={25} />
          </ListItemIcon>
          <ListItemText secondary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Icon icon={listUl} size={20} />
          </ListItemIcon>
          <ListItemText secondary="Question" />
          <ListItemIcon>
            <Icon icon={caretDown} size={10} />
          </ListItemIcon>
        </ListItem>

        <Collapse in={true} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/uploadques">
              <ListItemIcon>
                <Icon icon={ic_cloud_upload} size={25} />
              </ListItemIcon>
              <ListItemText secondary="Upload Questions" />
            </ListItem>
            <ListItem button component={Link} to="/createtest">
              <ListItemIcon>
                <Icon icon={clipboard} size={25} />
              </ListItemIcon>
              <ListItemText secondary="Create Test" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button component={Link} to="/timeslot">
          <ListItemIcon>
            <Icon icon={ic_account_circle} size={25} />
          </ListItemIcon>
          <ListItemText secondary="Create Time Slot" />
        </ListItem>
        <ListItem button component={Link} to="/managetime">
          <ListItemIcon>
            <Icon icon={ic_av_timer} size={25} />
          </ListItemIcon>
          <ListItemText secondary="Manage Time Slot" />
        </ListItem>
        <ListItem button component={Link} to="/slotdetails">
          <ListItemIcon>
            <Icon icon={ic_toc} size={25} />
          </ListItemIcon>
          <ListItemText secondary="Slot Details" />
        </ListItem>
      </List>
    </Fragment>
  );
};
