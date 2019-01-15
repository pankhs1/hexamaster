import React, { Fragment } from "react";

import {
  Card,
  CardContent,
  Avatar,
  Grid,
  Typography,
  Divider
} from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { socialGithub } from "react-icons-kit/typicons/socialGithub";
import { socialTwitter } from "react-icons-kit/typicons/socialTwitter";
import { socialLinkedin } from "react-icons-kit/typicons/socialLinkedin";
import { socialGooglePlus } from "react-icons-kit/typicons/socialGooglePlus";
export default props => {
  const { name, email } = props.user;
  const style = {
    width: 150,
    height: 150
  };
  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container>
            <Grid md={2} xs={12} item>
              <Avatar
                style={style}
                alt="Remy Sharp"
                src="https://cdn4.buysellads.net/uu/1/3386/1525189943-38523.png"
              />
            </Grid>
            <Grid xs item>
              <Typography variant="headline" color="primary">
                {name}
              </Typography>
              <Grid container>
                <Grid md={9} xs={6} item>
                  <Typography variant="subheading">{email}</Typography>
                </Grid>

                <Grid xs item style={{ textAlign: "right" }}>
                  <a href="https://www.github.com">
                    <Icon icon={socialLinkedin} size={25} />
                  </a>
                  <a href="https://www.github.com">
                    <Icon icon={socialTwitter} size={25} />
                  </a>
                  <a href="https://www.github.com">
                    <Icon icon={socialGooglePlus} size={25} />
                  </a>
                  <a href="https://www.github.com">
                    <Icon icon={socialGithub} size={25} />
                  </a>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};
