import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

export default () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }} variant="title" color="inherit">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            Foundation Makers
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
        <Button color="inherit" component={Link} to="/register">
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};
