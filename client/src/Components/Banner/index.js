import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default () => {
  return (
    <Paper id="banner">
      <div className="dark-overlay">
        <Typography
          variant="display2"
          className="slogan"
          style={{ textAlign: "center" }}
        >
          Are You prepared for the future?
        </Typography>
      </div>
    </Paper>
  );
};
