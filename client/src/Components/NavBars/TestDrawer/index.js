import React, { Fragment } from "react";
// import { Link } from "react-router-dom";
import { getMargin } from "../../../JsStyles";
import {
  SwipeableDrawer,
  Hidden,
  ListItem,
  ListItemText,
  List,
  Drawer,
  Grid,
  Button,
  Typography
} from "@material-ui/core";

export default props => {
  const { classProp, mobileOpen, drawerToggle } = props;
  return (
    <Fragment>
      <Hidden mdUp>
        <SwipeableDrawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onOpen={drawerToggle}
          onClose={drawerToggle}
          classes={{
            paper: classProp.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <List>
            <ListItem>
              <Grid container spacing={16}>
                <Grid xs item>
                  <Typography variant="display1">0</Typography>
                  <Typography variant="subheading">Hours</Typography>
                </Grid>
                <Grid xs item>
                  <Typography variant="display1">33</Typography>
                  <Typography variant="subheading">Minutes</Typography>
                </Grid>
                <Grid xs item>
                  <Typography variant="display1">36</Typography>
                  <Typography variant="subheading">Seconds</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container spacing={24}>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    style={{ boxShadow: "none" }}
                    aria-label="Delete"
                    // className={classes.button}
                  >
                    1
                  </Button>
                </Grid>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none", background: "#4285F4" }}
                    // className={classes.button}
                  >
                    2
                  </Button>
                </Grid>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none" }}
                    // className={classes.button}
                  >
                    3
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid
                container
                direction="row"
                justify="space-around"
                spacing={16}
              >
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    style={{ boxShadow: "none" }}
                    aria-label="Delete"
                    // className={classes.button}
                  >
                    4
                  </Button>
                </Grid>
                <Grid xs item />
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none" }}
                    // className={classes.button}
                  >
                    5
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="row" justify="flex-start">
                <Grid xs item>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#4285F4" }}
                    />
                    <ListItemText>Current Question</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button variant="fab" mini style={{ boxShadow: "none" }} />
                    <ListItemText>Not Attempted</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#08BF29" }}
                    />
                    <ListItemText>Answered</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#FFC107" }}
                    />
                    <ListItemText>Not Answered</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#d00" }}
                    />
                    <ListItemText>Review</ListItemText>
                  </ListItem>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <ListItem>
            <Button
              variant="contained"
              style={{ background: "#388E3C", color: "#fff" }}
            >
              Submit
            </Button>
          </ListItem>
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          anchor={"right"}
          onOpen={drawerToggle}
          onClose={drawerToggle}
          color="secondary"
          variant="permanent"
          open
          classes={{
            paper: classProp.drawerPaper
          }}
        >
          <div>
            <div className={classProp.toolbar}>
              <Typography
                variant="title"
                style={{ fontSize: "2em", padding: "10px" }}
              >
                Foundation Makers
              </Typography>
            </div>
          </div>
          <List>
            <ListItem>
              <Grid container spacing={16}>
                <Grid xs item>
                  <Typography variant="display1">0</Typography>
                  <Typography variant="subheading">Hours</Typography>
                </Grid>
                <Grid xs item>
                  <Typography variant="display1">33</Typography>
                  <Typography variant="subheading">Minutes</Typography>
                </Grid>
                <Grid xs item>
                  <Typography variant="display1">36</Typography>
                  <Typography variant="subheading">Seconds</Typography>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container spacing={24}>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    style={{ boxShadow: "none" }}
                    aria-label="Delete"
                    // className={classes.button}
                  >
                    1
                  </Button>
                </Grid>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none", background: "#4285F4" }}
                    // className={classes.button}
                  >
                    2
                  </Button>
                </Grid>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none" }}
                    // className={classes.button}
                  >
                    3
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="row" justify="center" spacing={16}>
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    style={{ boxShadow: "none" }}
                    aria-label="Delete"
                    // className={classes.button}
                  >
                    4
                  </Button>
                </Grid>
                <Grid xs item />
                <Grid xs item>
                  <Button
                    variant="fab"
                    mini
                    aria-label="Delete"
                    style={{ boxShadow: "none" }}
                    // className={classes.button}
                  >
                    {5}
                  </Button>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem>
              <Grid container direction="row" justify="center">
                <Grid xs item>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#4285F4" }}
                    />
                    <ListItemText>Current Question</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button variant="fab" mini style={{ boxShadow: "none" }} />
                    <ListItemText>Not Attempted</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{
                        boxShadow: "none",
                        background: "#08BF29"
                      }}
                    />
                    <ListItemText>Answered</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#FFC107" }}
                    />
                    <ListItemText>Not Answered</ListItemText>
                  </ListItem>
                  <ListItem>
                    <Button
                      variant="fab"
                      mini
                      style={{ boxShadow: "none", background: "#d00" }}
                    />
                    <ListItemText>Review</ListItemText>
                  </ListItem>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <ListItem
            style={{ justifyContent: "center", ...getMargin("bottom", 50) }}
          >
            <Button
              variant="contained"
              style={{ background: "#388E3C", color: "#fff" }}
            >
              Submit
            </Button>
          </ListItem>
        </Drawer>
      </Hidden>
    </Fragment>
  );
};
