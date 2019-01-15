import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

export default props => {
  return (
    <Fragment>
      <Typography style={{ marginTop: 20 }} variant="title">
        {props.company}
      </Typography>
      <Typography variant="caption">{props.title}</Typography>
      <Typography variant="caption">{props.period}</Typography>
      <Typography variant="caption">{props.location}</Typography>
    </Fragment>
  );
};
