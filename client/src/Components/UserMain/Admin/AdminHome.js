import React, { Fragment } from "react";

import { Card, CardContent, Grid, Typography } from "@material-ui/core";

export default props => {
  //   const { name, email } = props.user;

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container>
            <Grid xs item>
              <Typography variant="headline" color="primary">
                {"Welcome Admin!"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};
