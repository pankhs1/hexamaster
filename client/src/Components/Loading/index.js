import React from "react";
import {
  CircularProgress,
  Dialog,
  Typography,
  DialogContent,
  Grid,
  Hidden
} from "@material-ui/core";
import loader from "../../images/loader.gif";
export default props => {
  return (
    <Dialog open={props.status}>
      {/* <CircularProgress size={50} style={{ padding: 20 }} /> */}

      <Grid>
        <Hidden only={["md", "lg", "xl"]}>
          <DialogContent
            style={{
              top: 200,
              position: "fixed",
              borderRadius: "10px",
              background: "#fff",
              textAlign: "center",
              left: "25%"
            }}
          >
            <img src={loader} width="100" />
            <Typography variant="title">Uploading File...</Typography>
          </DialogContent>
        </Hidden>
        <Hidden only={["xs", "sm"]}>
          <DialogContent
            style={{
              top: 200,
              position: "fixed",
              borderRadius: "10px",
              background: "#fff",
              textAlign: "center",
              left: "45%"
            }}
          >
            <img src={loader} width="100" />
            <Typography variant="title">{props.msgTxt}</Typography>
          </DialogContent>
        </Hidden>
      </Grid>
    </Dialog>
  );
};
