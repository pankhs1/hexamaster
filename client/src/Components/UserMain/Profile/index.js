import React, { Fragment } from "react";

import { Grid, Typography, Paper } from "@material-ui/core";
import Education from "./Education";
import Experience from "./Experience";
import { Icon } from "react-icons-kit";
import { library } from "react-icons-kit/icomoon/library";
import { office } from "react-icons-kit/icomoon/office";
export default props => {
  return (
    <Fragment>
      <Grid container spacing={24} direction="row" justify="flex-start">
        <Grid xs={12} md={6} item>
          <Paper style={{ padding: 20 }}>
            <Grid item xs>
              <Typography variant="headline" style={{ fontWeight: 600 }}>
                <Icon size={20} icon={library} /> Education
              </Typography>
              <Education
                title={"Thapar University"}
                course={"B.E in Computer Science"}
                period={"2014-2017"}
              />
              <Education
                title={"Thapar University"}
                course={"B.E in Computer Science"}
                period={"2014-2017"}
              />
              <Education
                title={"Thapar University"}
                course={"B.E in Computer Science"}
                period={"2014-2017"}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={12} md={6} item>
          <Paper style={{ padding: 20, marginBottom: 20 }}>
            <Grid item xs>
              <Typography variant="headline" style={{ fontWeight: 600 }}>
                <Icon size={20} icon={office} /> Experience
              </Typography>
              <Experience
                title={"Software Engineer"}
                company={"The Printers Mysore Pvt Ltd."}
                period={"Jan,2018-Present"}
                location={"Bangalore,Karnataka,India"}
              />
              <Experience
                title={"Software Engineer"}
                company={"The Printers Mysore Pvt Ltd."}
                period={"Jan,2018-Present"}
                location={"Bangalore,Karnataka,India"}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
