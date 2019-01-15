import React from "react";
import Logo from "../../images/Hexa_white.png";
import { Link } from "react-router-dom";
import TableImg from "../../images/table_2.png";
import { getPadding, alignText, getMargin } from "../../JsStyles";
import { Grid, Typography, Button, Hidden } from "@material-ui/core";
export default () => {
  return (
    <div className="Mainbody">
      <Grid container>
        <Grid xs={12} sm={12} md={12} lg={12} item>
          <Hidden only={["sm", "xs"]}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "210px",
                ...getPadding("top", 35),
                ...getPadding("left", 30)
              }}
            />
          </Hidden>
          <Hidden only={["md", "xl", "lg"]}>
            <div style={{ textAlign: "center" }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  width: "210px",
                  ...getPadding("top", 10)
                  // ...getPadding("left", 30)
                }}
              />
            </div>
          </Hidden>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          item
          style={{
            ...getPadding("", 20)
          }}
        >
          <Typography
            align="center"
            variant="display3"
            style={{
              color: "#fff"
              // fontFamily: "initial"
            }}
          >
            Placements around the corner?
          </Typography>

          <Typography
            align="center"
            variant="headline"
            style={{
              color: "#fff",
              // fontFamily: "initial",
              ...getPadding("", 20)
            }}
          >
            Profile is the strong indicator of what you could contribute to the
            organisation.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          style={{ ...alignText("center") }}
        >
          <Hidden only={["sm", "xs"]}>
            <Typography
              variant="title"
              style={{
                fontWeight: "900",
                ...getMargin("top", 100),
                padding: 50,
                paddingBottom: 30
              }}
            >
              Schedule a personal counselling, get your profile reviewed for
              FREE!
            </Typography>
          </Hidden>
          <Hidden only={["lg", "md", "xl"]}>
            <Typography
              variant="title"
              style={{
                fontWeight: "900",
                // ...getMargin("top", 100),
                paddingLeft: 30,
                paddingRight: 30,
                paddingBottom: 30
              }}
            >
              Schedule a personal counselling, get your profile reviewed for
              FREE!
            </Typography>
          </Hidden>

          <Button
            component={Link}
            to="schedule"
            variant="flat"
            style={{
              color: "#fff",
              fontWeight: "bold ",
              background: "#2CBB74"
            }}
            size="large"
          >
            Schedule Now
          </Button>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6} style={{ textAlign: "right" }}>
          <Hidden only={["lg", "md", "xl"]}>
            <img
              src={TableImg}
              style={{
                width: "88%",
                ...getMargin("bottom", -5),
                ...getMargin("top", -25)
              }}
            />
          </Hidden>
          <Hidden only={["xs", "sm"]}>
            <img
              src={TableImg}
              style={{ width: "100%", ...getMargin("bottom", -5) }}
            />
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};
