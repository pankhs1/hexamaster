import React from "react";
import {
  Dialog,
  DialogContent,
  Grid,
  FormHelperText,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
  DialogActions
} from "@material-ui/core";
export default props => {
  const { checkContact, countDown, status, checkError, resend } = props;

  return (
    <Dialog open={status ? true : false} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
        Enter OTP
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center" }}>
          OTP has been sent to you on your mobile phone
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="otp"
          label=" OTP"
          type="email"
          fullWidth
          onChange={props.setInfo}
          error={props.error.length || checkError.length ? true : false}
        />
        {props.error ? (
          <FormHelperText error>* {props.error}</FormHelperText>
        ) : null}
        {checkError ? (
          <FormHelperText error>* Invalid OTP</FormHelperText>
        ) : null}
      </DialogContent>
      <DialogActions
      // style={{ justifyContent: "center", paddingLeft: 15, paddingRight: 15 }}
      >
        <Grid container>
          <Grid xs item>
            {checkContact !== "" ? (
              <Button
                fullWidth={true}
                onClick={props.checkSlot}
                color="primary"
              >
                Verify
              </Button>
            ) : (
              <Button fullWidth={true} onClick={props.bookSlot} color="primary">
                Verify
              </Button>
            )}
          </Grid>
          <Grid xs item>
            <Button
              fullWidth={true}
              color="primary"
              disabled={countDown === "00:00" ? false : true}
              onClick={e => resend.apply(null, [e, true])}
            >
              {countDown === "00:00" ? "Resend" : "Resend in " + countDown}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};
