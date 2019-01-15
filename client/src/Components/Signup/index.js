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
import SignupSuccess from "../../Containers/SnackBars";
export default props => {
  let {
    errors,
    setFields,
    name,
    email,
    password,
    cpass,
    userSignup,
    status,
    closeSnack
  } = props;

  errors = errors.map(i => i.replace(/"/g, ""));
  const EmailErr = [];
  const PassErr = [];
  const NameErr = [];
  const AuthErr = [];
  const CpassErr = [];
  errors.map(item => {
    if (item.indexOf("email") > -1) {
      EmailErr.push(
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
      );
    } else if (item.indexOf("pass") > -1) {
      PassErr.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    } else if (item.indexOf("name") > -1) {
      NameErr.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    } else if (item.indexOf("match") > -1) {
      CpassErr.push(
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
      );
    } else {
      AuthErr.push(item.slice(0, 1).toUpperCase() + item.slice(1, item.length));
    }
    return false;
  });
  return (
    <Fragment>
      <Grid container>
        <Grid xs item />
        <Grid md={3} xs={12} item style={{ marginTop: 150 }}>
          <Card style={{ textAlign: "center", padding: 30 }}>
            <CardHeader title="Sign Up " />
            <CardContent>
              <TextField
                value={status ? "" : name}
                fullWidth={true}
                id="name"
                label="Full Name"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                onBlur={setFields}
                error={NameErr.length ? true : false}
              />
              {NameErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}
              <TextField
                value={status ? "" : email}
                fullWidth={true}
                id="email"
                label="Email"
                type="email"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                onBlur={setFields}
                error={EmailErr.length ? true : false}
              />
              {EmailErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}

              <TextField
                value={status ? "" : password}
                fullWidth={true}
                id="password"
                label="Password"
                type="password"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                onBlur={setFields}
                error={PassErr.length ? true : false}
              />
              {PassErr.map((item, index) => (
                <FormHelperText error key={index}>
                  * {item}
                </FormHelperText>
              ))}

              <TextField
                value={status ? "" : cpass}
                fullWidth={true}
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                onBlur={setFields}
                error={CpassErr.length ? true : false}
              />
              {CpassErr.map((item, index) => (
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
                onClick={userSignup}
              >
                Sign up
              </Button>
            </CardActions>
          </Card>

          <SignupSuccess
            status={status}
            messageText="You have signed up successfully!. Check your inbox for confirmation Link"
            variant="success"
            closeButton={closeSnack}
            snackKey={1}
          />
        </Grid>
        <Grid xs item />
      </Grid>
    </Fragment>
  );
};
