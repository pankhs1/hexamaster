import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

export default props => {
  return (
    <Fragment>
      <Typography style={{ marginTop: 20 }} variant="title">
        {props.title}
      </Typography>
      <Typography variant="caption">{props.course}</Typography>
      <Typography variant="caption">{props.period}</Typography>
    </Fragment>
  );
};
