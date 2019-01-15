import React, { Fragment } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";

import { Icon } from "react-icons-kit";
import { androidCheckmarkCircle } from "react-icons-kit/ionicons/androidCheckmarkCircle";
export default () => {
  return (
    <Fragment>
      <Grid xs={6} item style={{ marginTop: 20 }}>
        <Card>
          <CardHeader title="Exam 1" style={{ textAlign: "center" }} />
          <CardContent>
            <Typography variant="body2">
              <Icon
                icon={androidCheckmarkCircle}
                size={20}
                style={{
                  color: "green",
                  verticalAlign: "middle",
                  marginRight: 5
                }}
              />
              Question 1
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Fragment>
  );
};
