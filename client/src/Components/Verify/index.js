import React, { Fragment } from "react";
import { Zoom, Grid, Card, CardHeader, CardContent } from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { androidDoneAll } from "react-icons-kit/ionicons/androidDoneAll";
export default props => {
  return (
    <Fragment>
      <Grid container>
        <Grid xs={false} md={3} item />
        <Grid xs={12} md={6} item>
          <Card style={{ marginTop: 100, textAlign: "center" }}>
            <CardContent>
              <Zoom in={true} style={{ transitionDelay: 600 }}>
                <Icon
                  icon={androidDoneAll}
                  style={{ color: "green" }}
                  size={50}
                />
              </Zoom>
              <CardHeader title="Email has been Verified" />
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={false} md={3} item />
      </Grid>
    </Fragment>
  );
};
