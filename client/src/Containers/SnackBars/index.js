import React from "react";
import PropTypes from "prop-types";

import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import CustomSnackBarContent from "../../Components/SnackBars";

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

class CustomizedSnackbars extends React.Component {
  render() {
    const { variant, messageText, status, closeButton } = this.props;

    return (
      <div>
        <Snackbar
          key={this.props.snackKey}
          autoHideDuration={5000}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
          open={status}
          onClose={closeButton}
        >
          <CustomSnackBarContent
            onClose={closeButton}
            variant={variant}
            message={messageText}
          />
        </Snackbar>
      </div>
    );
  }
}

CustomizedSnackbars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedSnackbars);
