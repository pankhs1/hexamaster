import React, { Fragment } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  CardActions,
  Button
} from "@material-ui/core";
import {
  alignText,
  displayFlex,
  justifyCenter,
  getMargin
} from "../../JsStyles";
import { Icon } from "react-icons-kit";
import { ic_loop } from "react-icons-kit/md/ic_loop";
import { ic_arrow_back } from "react-icons-kit/md/ic_arrow_back";
import { ic_arrow_forward } from "react-icons-kit/md/ic_arrow_forward";
export default props => {
  const ButtonStyle = {
    ...alignText("left"),
    ...displayFlex,
    ...justifyCenter
  };
  return (
    <Fragment>
      <Grid container alignItems="center">
        <Grid xs={12} item />
        <Card style={{ width: "inherit" }}>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="headline">Question 1</Typography>
            <Typography variant="subheading">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos non quae amet delectus fuga, placeat nemo quis,
              facilis illo sit pariatur commodi ut tempora mollitia omnis
              veritatis ducimus autem vero?
            </Typography>
            <Grid container style={getMargin("top", 50)}>
              <Grid md={3} item />
              <Grid xs={12} style={alignText("LEFT")} md={8} item>
                <FormControl component="fieldset">
                  <RadioGroup aria-label="Gender" value="1" name="gender1">
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Option 1"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Option 2"
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Option 3"
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Option 4"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
          <Grid
            container
            style={{
              ...getMargin("bottom", 50),
              ...getMargin("top", 50)
            }}
          >
            <Grid xs item style={ButtonStyle}>
              <CardActions>
                <Button variant="contained">
                  <Icon
                    icon={ic_arrow_back}
                    style={{ ...getMargin("right", 10) }}
                  />
                  Prev
                </Button>
              </CardActions>
            </Grid>
            <Grid xs item style={ButtonStyle}>
              <CardActions>
                <Button
                  variant="contained"
                  style={{
                    background: "#ff5722",
                    color: "#fff"
                  }}
                >
                  <Icon icon={ic_loop} style={{ ...getMargin("right", 10) }} />
                  Review
                </Button>
              </CardActions>
            </Grid>
            <Grid xs item style={ButtonStyle}>
              <CardActions>
                <Button variant="contained">
                  Next
                  <Icon icon={ic_arrow_forward} style={getMargin("left", 10)} />
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Fragment>
  );
};
