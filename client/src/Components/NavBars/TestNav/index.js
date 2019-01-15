import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { ic_menu } from "react-icons-kit/md/ic_menu";

export default props => {
  const { classProp, drawerToggle, logout } = props;
  const linkNoStyle = {
    textDecoration: "none",
    color: "inherit"
  };
  return (
    <Fragment>
      <AppBar color="primary" className={classProp.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={drawerToggle}
            className={classProp.navIconHide}
          >
            <Icon size={25} icon={ic_menu} />
          </IconButton>
          <Typography
            style={{ flexGrow: 1 }}
            variant="title"
            color="inherit"
            noWrap
          >
            <Link style={linkNoStyle} to="/">
              Foundation Maker
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};
