import React, { Fragment } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Button,
  FormHelperText
} from "@material-ui/core";
export default props => {
  let { errors } = props;
  errors = errors.map(i => i.replace(/"/g, ""));
  const EmailErr = [];
  const PassErr = [];
  const AuthErr = [];

  errors.map((item, index) => {
    if (item.indexOf("email") > -1) {
      EmailErr.push(
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
      );
    } else if (item.indexOf("pass") > -1) {
      PassErr.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    } else {
      AuthErr.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    }
    return false;
  });
  return (
    <Fragment>
      <Grid container className="loginGrad">
        <Grid xs item />
        <Grid md={3} xs={12} item style={{ marginTop: 100 }}>
          <Card style={{ textAlign: "center", padding: 30 }}>
            <CardHeader title="Login" />
            <CardContent>
              <TextField
                fullWidth={true}
                id="email"
                label="Email"
                type="text"
                onBlur={props.setCredentials}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                error={EmailErr.length ? true : false}
              />
              {EmailErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}
              <TextField
                fullWidth={true}
                id="password"
                label="Password"
                type="password"
                InputLabelProps={{
                  shrink: true
                }}
                onBlur={props.setCredentials}
                margin="normal"
                error={PassErr.length ? true : false}
              />
              {PassErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}
              {AuthErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}
            </CardContent>
            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
                size="medium"
                color="primary"
                onClick={props.login}
                style={{
                  textTransform: "capitalize",
                  boxShadow: "none  ",
                  padding: "5px"
                }}
              >
                Login
              </Button>
            </CardActions>

            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
                size="medium"
                color="secondary"
                disableRipple
                style={{
                  background: "white",
                  color: "#000",
                  textTransform: "capitalize",
                  boxShadow: "none  ",
                  border: "solid 0.5px #666666",
                  marginTop: "1.5em",
                  padding: "5px",
                  "&:active": { boxShadow: "2px 3px 5px lightblue" }
                }}
              >
                <img
                  src="/images/google-min.png"
                  style={{ paddingRight: "20px" }}
                  width="20px"
                  alt="google"
                />
                Login with Google
              </Button>
            </CardActions>
            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
                size="medium"
                color="inherit"
                style={{
                  textTransform: "capitalize",
                  color: "#fff",
                  background: "#3A5A99",
                  boxShadow: "none  ",
                  padding: "5px"
                }}
              >
                <img
                  alt="facebook"
                  src="/images/fb-min.png"
                  style={{ paddingRight: "20px" }}
                  width="20px"
                />
                Login with Facebook
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs item />
      </Grid>
    </Fragment>
  );
};
