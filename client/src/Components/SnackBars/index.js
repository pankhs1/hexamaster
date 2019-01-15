import React, { Fragment } from "react";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import classNames from "classnames";
import { ic_check_circle } from "react-icons-kit/md/ic_check_circle";
import { ic_close } from "react-icons-kit/md/ic_close";
import { ic_error } from "react-icons-kit/md/ic_error";
import { Icon } from "react-icons-kit";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

const CustomSnackbar = props => {
  const { classes, className, message, onClose, variant } = props;

  return (
    <Fragment>
      <SnackbarContent
        className={classNames(classes[variant], className)}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            {variant === "success" ? (
              <Icon
                className={classNames(classes.icon, classes.iconVariant)}
                icon={ic_check_circle}
              />
            ) : (
              <Icon
                className={classNames(classes.icon, classes.iconVariant)}
                icon={ic_error}
              />
            )}
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={onClose}
          >
            <Icon icon={ic_close} />
          </IconButton>
        ]}
      />
    </Fragment>
  );
};

CustomSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};
// export default
export default withStyles(styles)(CustomSnackbar);
