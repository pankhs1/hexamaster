import React, { Fragment } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  TextField,
  Grid,
  Button,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  FormHelperText,
  DialogTitle,
  CircularProgress
} from "@material-ui/core";
import TimeSlot from "../TimeSlot/index";
import { Link } from "react-router-dom";

import OTP from "../OTP";

import { Icon } from "react-icons-kit";
import { ic_cloud_upload } from "react-icons-kit/md/ic_cloud_upload";

export default props => {
  let {
    bookSlot,
    getOTP,
    setInfo,
    toggleModal,
    slotState,
    resetState,
    getSlots,
    getAvailDates,
    checkSlot,
    toggleCheck
  } = props;

  let errors = slotState.slotError.map(i => i.replace(/"/g, ""));

  let slotArray = slotState.slotArray;
  let NameErr = "";
  let EmailErr = "";
  let ContactErr = "";
  let TimeErr = "";
  let DocErr = "";
  let OTPErr = "";
  let ServerErrors = "";
  errors.map(item => {
    if (item.toLowerCase().indexOf("filename") > -1) {
      DocErr = "Please select valid file.";
    } else if (item.toLowerCase().indexOf("email") > -1) {
      EmailErr = "Please enter valid email";
    } else if (item.toLowerCase().indexOf("contact") > -1) {
      ContactErr = "Please enter valid Mobile No.";
    } else if (item.toLowerCase().indexOf("name") > -1) {
      NameErr = "Please enter valid name";
    } else if (item.toLowerCase().indexOf("slottime ") > -1) {
      TimeErr = "Please select a time slot";
      return false;
    } else if (item.toLowerCase().indexOf("5242880") > -1) {
      DocErr = "File size must be less than 5 MB";
    } else if (item.toLowerCase().indexOf("invalid file type") > -1) {
      DocErr = "Invalid File Type";
    } else if (item.toLowerCase().indexOf("error sending otp") > -1) {
      OTPErr = "Error Sending OTP";
    } else if (item.toLowerCase().indexOf("otp") > -1) {
      OTPErr = "Invalid OTP";
    } else if (item.toLowerCase().indexOf("session") > -1) {
      ServerErrors = "Session Already scheduled for this Number";
    } else if (item.toLowerCase().indexOf("no slots") > -1) {
    } else {
      ServerErrors = "Server Error";
    }
    return false;
  });

  return (
    <Fragment>
      <Grid container className="loginGrad" wrap="wrap">
        <Grid xs item />
        <Grid md={3} xs={12} item style={{ marginTop: 25 }}>
          <Card style={{ textAlign: "center", padding: 30, paddingTop: 10 }}>
            <CardMedia
              component={Link}
              to="/"
              style={{
                height: 60,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                textAlign: "center"
                // marginLeft: 60
              }}
              image={require("../../images/Hexa_black.png")}
            />
            <CardHeader title="Schedule Session" style={{ paddingBottom: 0 }} />
            <CardContent>
              <TextField
                fullWidth={true}
                id="name"
                label="Full Name"
                type="text"
                value={slotState.name}
                onChange={setInfo}
                InputLabelProps={{
                  shrink: true
                }}
                margin="normal"
                error={NameErr.length > 0 ? true : false}
              />
              {NameErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {NameErr}
                </FormHelperText>
              ) : null}

              <TextField
                fullWidth={true}
                id="email"
                label="Email"
                type="email"
                InputLabelProps={{
                  shrink: true
                }}
                value={slotState.email}
                onChange={setInfo}
                margin="normal"
                error={EmailErr.length > 0 ? true : false}
              />
              {EmailErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {EmailErr}
                </FormHelperText>
              ) : null}
              <TextField
                fullWidth={true}
                id="contact"
                label="Contact"
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                value={slotState.contact}
                onChange={e => {
                  setInfo.apply(null, [e, "contact"]);
                }}
                margin="normal"
                error={ContactErr.length > 0 ? true : false}
              />
              {ContactErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {ContactErr}
                </FormHelperText>
              ) : null}

              <TextField
                fullWidth={true}
                InputProps={{
                  readOnly: true
                }}
                id="time"
                label="Select Time Slot"
                type="text"
                InputLabelProps={{
                  shrink: true
                }}
                value={
                  slotState.slotTime
                    ? new Date(slotState.slotTime).toLocaleString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                      })
                    : ""
                }
                onClick={e => toggleModal.apply(null, [e, "open"])}
                margin="normal"
                error={TimeErr.length > 0 ? true : false}
              />
              {TimeErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {TimeErr}
                </FormHelperText>
              ) : null}

              <Grid xs item style={{ textAlign: "left", padding: "18px 0px" }}>
                <input
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text"
                  // className={classes.input}
                  style={{ display: "none" }}
                  id="raised-button-file"
                  multiple
                  type="file"
                  onChange={e => setInfo.apply(null, [e, "file"])}
                />
                <label htmlFor="raised-button-file">
                  <Button
                    variant="contained"
                    component="span"
                    color="primary"
                    size="small"
                    fullWidth={true}
                    style={{
                      background: "#2F6BF2",
                      textTransform: "capitalize"
                    }}

                    // className={classes.button}
                  >
                    {slotState.fileName === "" ? (
                      <Fragment>
                        <Icon
                          icon={ic_cloud_upload}
                          style={{ padding: "0px 10px" }}
                        />
                        Upload Resume
                      </Fragment>
                    ) : slotState.fileName.length > 20 ? (
                      slotState.fileName.substr(0, 17) + "..."
                    ) : (
                      slotState.fileName
                    )}
                  </Button>
                  <Typography variant="caption" style={{ color: "#808080" }}>
                    File should be of type PDF,DOCX,DOC
                  </Typography>
                </label>
              </Grid>
              {DocErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {DocErr}
                </FormHelperText>
              ) : null}
              {ServerErrors ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {ServerErrors}
                </FormHelperText>
              ) : null}
              {OTPErr ? (
                <FormHelperText
                  style={{ padding: "5px 0px", margin: "0" }}
                  error
                >
                  * {OTPErr}
                </FormHelperText>
              ) : null}
            </CardContent>
            <CardActions>
              <Button
                fullWidth={true}
                variant="contained"
                size="large"
                color="primary"
                onClick={getOTP}
                style={{
                  textTransform: "capitalize",
                  boxShadow: "none  ",
                  padding: "5px"
                }}
              >
                Schedule
              </Button>
            </CardActions>
            <CardActions style={{ justifyContent: "center" }}>
              <Typography variant="caption">
                Already Booked a session?
                <div
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                  onClick={toggleCheck}
                >
                  Check Details
                </div>
              </Typography>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs item />
      </Grid>
      <TimeSlot
        setInfo={setInfo}
        date={slotState.dateSelected}
        modalStatus={slotState.modalOpen}
        toggleModal={toggleModal}
        isFetching={slotState.isFetching}
        slotData={slotState.slotArray}
        getSlot={getSlots}
        getAvailDates={getAvailDates}
        dateArr={slotState.availableDates}
      />
      <Dialog open={slotState.slotSaved}>
        <DialogContent style={{ color: "#48AD2D" }}>
          Your free session with Hexa has been scheduled for{" "}
          {slotState.checkTime
            ? new Date(slotState.checkTime).toLocaleString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })
            : new Date(slotState.slotTime).toLocaleString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })}
          . You will get call on registered mobile number{" "}
          {slotState.checkContact ? slotState.checkContact : slotState.contact}.
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={resetState}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={slotState.isFetching && slotState.otpCreated > 0}>
        <CircularProgress style={{ padding: 50 }} />
      </Dialog>
      <Dialog open={slotState.checkInfo} onBackdropClick={toggleCheck}>
        {slotState.checkError.indexOf("booked") > -1 ? (
          <DialogContent>{slotState.checkError}</DialogContent>
        ) : (
          <Fragment>
            <DialogTitle>Get Session Details</DialogTitle>
            <DialogContent>
              <TextField
                label="Enter Contact"
                value={slotState.checkContact}
                id="checkContact"
                onChange={setInfo}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                error={slotState.checkError ? true : false}
              />

              {slotState.checkError === "" ? null : (
                <FormHelperText error>
                  *
                  {slotState.checkError.indexOf("contact") > -1
                    ? " Please Enter Valid Contact"
                    : slotState.checkError}
                </FormHelperText>
              )}
            </DialogContent>
            <DialogActions>
              {
                <Button variant="text" onClick={checkSlot}>
                  Submit
                </Button>
              }
            </DialogActions>
          </Fragment>
        )}
      </Dialog>
      <OTP
        countDown={slotState.timeLeft}
        checkContact={slotState.checkContact}
        checkSlot={checkSlot}
        setInfo={setInfo}
        bookSlot={bookSlot}
        error={OTPErr}
        checkError={slotState.checkError}
        status={slotState.otpCreated}
        otpEndTime={slotState.otpTimeout}
        timeLeft={slotState.timeNow}
        resend={getOTP}
        OTPErr={OTPErr}
      />
    </Fragment>
  );
};
