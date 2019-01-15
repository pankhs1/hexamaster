import React, { Fragment } from "react";
import {
  Grid,
  Card,
  Typography,
  Button,
  CardContent,
  Slide,
  CircularProgress
} from "@material-ui/core";
import { Icon } from "react-icons-kit";
import { ic_access_time } from "react-icons-kit/md/ic_access_time";
import { ic_perm_contact_calendar } from "react-icons-kit/md/ic_perm_contact_calendar";
import moment from "moment-timezone";
export default props => {
  const { isFetching, setInfo, slotData } = props;

  return (
    <Fragment>
      {isFetching ? (
        <div style={{ textAlign: "center", margin: "10px 0px" }}>
          <CircularProgress />
        </div>
      ) : null}
      {slotData.length > 0 ? (
        slotData.map((i, j) => {
          return i.available ? (
            moment(i.date)
              .tz("Asia/Kolkata")
              .valueOf() >
            moment()
              .tz("Asia/Kolkata")
              .valueOf() ? (
              <Slide key={j} in direction="left">
                <Card
                  style={{
                    borderRight: "solid green 5px",
                    marginTop: "20px",
                    boxShadow: "2px 2px 15px grey"
                  }}
                >
                  <CardContent style={{ paddingRight: "0px" }}>
                    <Grid container>
                      <Grid xs={8} item>
                        <Typography variant="caption">
                          <Icon icon={ic_perm_contact_calendar} />{" "}
                          {new Date(i.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </Typography>
                        <Typography variant="caption">
                          <Icon icon={ic_access_time} />{" "}
                          {new Date(i.date).toLocaleString("en-IN", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true
                          })}
                        </Typography>
                      </Grid>

                      <Grid xs item>
                        <Button
                          data-dom={i.date}
                          variant="flat"
                          size="small"
                          style={{
                            color: "#fff",
                            background: "green",

                            borderRadius: 5
                          }}
                          onClick={e => setInfo.apply(null, [e, "timeslot"])}
                        >
                          Book
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Slide>
            ) : null
          ) : (
            <Slide key={j} direction="left" in>
              <Card
                style={{
                  borderRight: "solid orange 5px",
                  marginTop: "20px",
                  boxShadow: "2px 2px 15px grey"
                }}
              >
                <CardContent style={{ paddingRight: "0px" }}>
                  <Grid container>
                    <Grid xs={8} item>
                      <Typography variant="caption">
                        <Icon icon={ic_perm_contact_calendar} />{" "}
                        {new Date(i.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </Typography>
                      <Typography variant="caption">
                        <Icon icon={ic_access_time} />{" "}
                        {new Date(i.date).toLocaleString("en-IN", {
                          hour: "numeric",
                          minute: "numeric",
                          hour12: true
                        })}
                      </Typography>
                    </Grid>

                    <Grid xs item>
                      <Button
                        disabled={true}
                        variant="flat"
                        size="small"
                        style={{
                          color: "#fff",
                          background: "#808080",

                          borderRadius: 5
                        }}
                      >
                        Booked
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Slide>
          );
        })
      ) : isFetching ? null : (
        <Typography
          variant="title"
          style={{ padding: 20, textAlign: "center" }}
        >
          No slots available
        </Typography>
      )}
    </Fragment>
  );
};
