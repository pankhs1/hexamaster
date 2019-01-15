import React, { Fragment } from "react";
import {
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  Dialog,
  FormHelperText
} from "@material-ui/core";
import SnackBar from "../../../Containers/SnackBars";
import { Icon } from "react-icons-kit";
import { ic_cloud } from "react-icons-kit/md/ic_cloud";
import { uploadCloud } from "react-icons-kit/feather/uploadCloud";
import Loading from "../../Loading";
export default props => {
  let { setInfo, upload, state, close } = props;

  const Error = [];
  state.uploadError.map(err => {
    if (err.toLowerCase().indexOf("filename") > -1) {
      Error.push("Please select file to upload");
    } else if (err.toLowerCase().indexOf("invalid") > -1) {
      Error.push("Invalid File Type ");
    }
  });
  //   let { setInfo, togglePicker, saveSlot, state, changeStatus } = props;
  //   let errors = state.slotError.map(i => i.replace(/"/g, ""));
  //   let slotErr = "";
  //   let startDateErr = "";
  //   let startTimeErr = "";
  //   let endDateErr = "";
  //   let endTimeErr = "";
  //   let busyArr = "";
  //   const ServerErrors = [];
  //   errors.map(item => {
  //     if (item.indexOf("slotSize") > -1) {
  //       slotErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
  //     } else if (item.indexOf("startDate") > -1) {
  //       startDateErr =
  //         item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
  //     } else if (item.indexOf("startTime") > -1) {
  //       startTimeErr =
  //         item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
  //     } else if (item.indexOf("endDate") > -1) {
  //       endDateErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
  //     } else if (item.indexOf("endTime") > -1) {
  //       endTimeErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
  //     } else {
  //       ServerErrors.push(
  //         item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
  //       );
  //     }
  //     return false;
  //   });
  //   state.busySlot.map(i => {
  //     busyArr +=
  //       new Date(i).toLocaleString("en-IN", {
  //         hour: "numeric",
  //         minute: "numeric",
  //         hour12: true
  //       }) + ",";
  //     return false;
  //   });
  return (
    <Fragment>
      <Grid container style={{ marginTop: "10%", textAlign: "center" }}>
        <Grid md={3} xs={false} item />
        <Grid xs={12} md={6} item>
          <Grid
            xs={12}
            style={{
              border: "dashed 3px #CDD5E0",
              borderRadius: "10px",
              textAlign: "center",
              padding: 20
            }}
            item
          >
            <Typography variant="headline">
              <Icon icon={uploadCloud} size={25} /> Upload Document
            </Typography>
            <Grid
              xs
              item
              style={{ textAlign: "center", padding: "18px 0px", margin: 20 }}
            >
              <input
                // className={classes.input}
                style={{ display: "none" }}
                id="raised-button-file"
                multiple
                type="file"
                onChange={e => setInfo.apply(null, [e, "file"])}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="outlined"
                  component="span"
                  color="primary"
                  size="small"
                  style={{
                    textTransform: "capitalize"
                  }}
                >
                  {state.fileName === ""
                    ? "Browse File"
                    : state.fileName.length > 20
                      ? state.fileName.substr(0, 17) + "..."
                      : state.fileName}
                </Button>
                <Typography variant="caption" style={{ color: "#808080" }}>
                  File should be of type CSV
                </Typography>
              </label>
              {Error.map((i, j) => {
                return (
                  <FormHelperText style={{ textAlign: "center" }} key={j} error>
                    * {i}
                  </FormHelperText>
                );
              })}
            </Grid>
            <Button onClick={upload} color="primary" variant="contained">
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid xs={false} md={3} item />
        <SnackBar
          variant={"success"}
          messageText={state.uploadError}
          status={state.uploaded}
          closeButton={close}
        />
        <Loading status={state.isUploading} msgTxt="Uploading File..." />
      </Grid>
    </Fragment>
  );
};
