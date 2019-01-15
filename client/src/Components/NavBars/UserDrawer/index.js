import React, { Fragment } from "react";
import { SwipeableDrawer, Hidden } from "@material-ui/core";
import UserList from "./UserList";
import AdminList from "./AdminList";
export default props => {
  const { classProp, mobileOpen, drawerToggle, isAdmin } = props;

  return (
    <Fragment>
      <Hidden mdUp>
        <SwipeableDrawer
          style={{ overflowY: "auto" }}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onOpen={drawerToggle}
          onClose={drawerToggle}
          classes={{
            paper: classProp.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {isAdmin ? (
            <AdminList classProp={classProp} />
          ) : (
            <UserList classProp={classProp} />
          )}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <SwipeableDrawer
          style={{ overflowY: "auto" }}
          onOpen={drawerToggle}
          onClose={drawerToggle}
          color="secondary"
          variant="permanent"
          open
          classes={{
            paper: classProp.drawerPaper
          }}
        >
          {isAdmin ? (
            <AdminList classProp={classProp} />
          ) : (
            <UserList classProp={classProp} />
          )}
        </SwipeableDrawer>
      </Hidden>
    </Fragment>
  );
};
