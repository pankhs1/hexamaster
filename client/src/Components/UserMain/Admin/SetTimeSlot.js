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
  FormHelperText,
  Chip
} from "@material-ui/core";
import DatePicker from "material-ui-pickers/DatePicker";
import TimePicker from "material-ui-pickers/TimePicker";
import CustomSnackBar from "../../../Containers/SnackBars";
import moment from "moment-timezone";

import { Icon } from "react-icons-kit";
import { ic_cloud } from "react-icons-kit/md/ic_cloud";
import { ic_add } from "react-icons-kit/md/ic_add";
export default props => {
  let { setInfo, togglePicker, saveSlot, state, changeStatus } = props;
  let errors = state.slotError.map(i => i.replace(/"/g, ""));
  let slotErr = "";
  let startDateErr = "";
  let startTimeErr = "";
  let endDateErr = "";
  let endTimeErr = "";
  let busyArr = "";
  const ServerErrors = [];
  errors.map(item => {
    if (item.indexOf("slotSize") > -1) {
      slotErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    } else if (item.indexOf("startDate") > -1) {
      startDateErr =
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    } else if (item.indexOf("startTime") > -1) {
      startTimeErr =
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    } else if (item.indexOf("endDate") > -1) {
      endDateErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    } else if (item.indexOf("endTime") > -1) {
      endTimeErr = item.slice(0, 1).toUpperCase() + item.slice(1, item.length);
    } else {
      ServerErrors.push(
        item.slice(0, 1).toUpperCase() + item.slice(1, item.length)
      );
    }
    return false;
  });
  state.busySlot.map(i => {
    busyArr +=
      new Date(i).toLocaleString("en-IN", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }) + ",";
    return false;
  });
  return (
    <Fragment>
      <Grid container>
        <Grid xs={12} item>
          <Card style={{ textAlign: "center" }}>
            <CardHeader title="Create Time Slot" />
            <CardContent style={{ padding: "0 20%" }}>
              <DatePicker
                fullWidth={true}
                className="slotPadding"
                id="startDate"
                label="Start Date"
                name="date-input"
                value={state.startDate}
                error={startDateErr ? true : false}
                onChange={e => setInfo.apply(null, [e, "startDate"])}
                minDate={new Date()}
              />
              <FormHelperText error>{startDateErr}</FormHelperText>
              <DatePicker
                fullWidth={true}
                className="slotPadding"
                minDate={new Date()}
                autoOk={false}
                id="endDate"
                label="End Date"
                name="date-input"
                value={state.endDate}
                error={endDateErr ? true : false}
                onChange={e => setInfo.apply(null, [e, "endDate"])}
              />
              <FormHelperText error>{endDateErr}</FormHelperText>
              <TimePicker
                fullWidth={true}
                label="Start Time"
                className="slotPadding"
                autoOk={false}
                id="startTime"
                value={state.startTime}
                error={startTimeErr ? true : false}
                onChange={e => {
                  setInfo.apply(null, [e, "startTime"]);
                }}
              />
              <FormHelperText error>{startTimeErr}</FormHelperText>
              <TimePicker
                fullWidth={true}
                className="slotPadding"
                autoOk={false}
                id="endTime"
                label="End Time"
                name="date-input"
                value={state.endTime}
                error={endTimeErr ? true : false}
                onChange={e => {
                  setInfo.apply(null, [e, "endTime"]);
                }}
              />
              <FormHelperText error>{endTimeErr}</FormHelperText>
              <TextField
                label="Slot Size (in Minutes)"
                fullWidth={true}
                id="slotSize"
                value={state.slotSize}
                error={slotErr.length ? true : false}
                onChange={e => setInfo(e.target.value, "slotSize")}
              />

              <FormHelperText error>{slotErr}</FormHelperText>

              <Grid item xs={12} style={{ textAlign: "left" }}>
                {state.busySlot.map((i, j) => {
                  return (
                    <Chip
                      style={{
                        cursor: "pointer",
                        marginRight: 10,
                        marginBottom: 5
                      }}
                      label={moment(i)
                        .tz("Asia/Kolkata")
                        .startOf("minute")
                        .format("h:mm A")
                        .toString()}
                      key={j}
                      data-index={j}
                      onDelete={e => setInfo.apply(null, [e, "deleteBusySlot"])}
                      // className={classes.chip}
                      color="secondary"
                    />
                  );
                })}
                <Chip
                  style={{ cursor: "pointer" }}
                  icon={<Icon icon={ic_add} />}
                  label="Add Busy Slots"
                  onClick={togglePicker}
                  // className={classes.chip}
                  color="secondary"
                />
              </Grid>
              {ServerErrors.length > 0
                ? ServerErrors.map((i, j) => (
                    <FormHelperText error key={j}>
                      {i}
                    </FormHelperText>
                  ))
                : null}

              <Button
                color="primary"
                size="large"
                className="slotPadding"
                variant="contained"
                style={{ margin: "10px", color: "#fff" }}
                onClick={saveSlot}
              >
                <Typography
                  style={{ color: "#fff", padding: "0px 14px" }}
                  variant="caption"
                >
                  Save
                </Typography>
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <CustomSnackBar
          status={state.saveStatus}
          messageText="Slot Created Successfully !"
          variant="success"
          closeButton={changeStatus}
          snackKey={1}
        />
        <Dialog
          open={state.pickerNode}
          onBackdropClick={e => setInfo.apply(null, [false, "pickerNode"])}
        >
          <TimePicker
            style={{ margin: 50 }}
            label="Select Time "
            value={new Date()}
            autoOk={false}
            onChange={e => setInfo.apply(null, [e, "updateBusySlot"])}
          />
          <Button
            style={{ borderRadius: "0px" }}
            variant="contained"
            color="primary"
            onClick={e => setInfo.apply(null, [false, "pickerNode"])}
          >
            Close
          </Button>
        </Dialog>
      </Grid>
    </Fragment>
  );
};
