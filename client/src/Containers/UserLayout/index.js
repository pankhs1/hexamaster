import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Layout from "../../Components/Layout";
import { connect } from "react-redux";
import { compose } from "redux";
import { toggleDrawer } from "../../Store/Actions/GenericActions";
import { checkAuthState, logout } from "../../Store/Actions/AuthActions";
import { withRouter } from "react-router";
const drawerWidth = 240;

const styles = theme => ({
  "@global": {
    "html,body,#root": {
      height: "100%"
    }
  },
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflowX: "hidden",
    overflowY: "auto",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    height: "100vh",
    // backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class ResponsiveDrawer extends React.Component {
  handleDrawerToggle = () => {
    this.props.toggleDrawer({ mobileOpen: !this.props.mobileOpen });
  };
  logout = () => {
    this.props.logout();
  };

  render() {
    const { classes, theme, children } = this.props;

    return (
      <Layout
        drawerToggle={this.handleDrawerToggle.bind(this)}
        mobileOpen={this.props.Generic.mobileOpen}
        classProp={classes}
        themeProp={theme}
        childEl={children}
        logout={this.logout.bind(this)}
        isAdmin={this.props.Auth.isAdmin}
      />
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const MapStateToProps = state => {
  return { Generic: state.Generic, Auth: state.Auth };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter,
  connect(
    MapStateToProps,
    { toggleDrawer, checkAuthState, logout }
  )
)(ResponsiveDrawer);
