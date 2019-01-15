import React, { Fragment } from "react";
import {
  Card,
  CardContent,
  Grid,
  Table,
  Button,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  IconButton
} from "@material-ui/core";
import DatePicker from "material-ui-pickers/DatePicker";
import { Icon } from "react-icons-kit";
import { ic_file_download } from "react-icons-kit/md/ic_file_download";
export default props => {
  const {
    fetchSlots,
    changeDate,
    startDate,
    endDate,
    slotArr,
    downloadFile
  } = props;

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container>
            <Grid md={4} lg={4} xl={4} item />
            <Grid
              style={{ textAlign: "center" }}
              md={4}
              lg={4}
              xl={4}
              xs={12}
              sm={12}
              item
            >
              <DatePicker
                clearable={true}
                fullWidth={true}
                className="slotPadding"
                autoOk={false}
                id="startDate"
                label="Start Date"
                name="date-input"
                value={startDate}
                // error={endDateErr ? true : false}
                onChange={e => changeDate.apply(null, [e, "startDate"])}
              />
              <DatePicker
                clearable={true}
                fullWidth={true}
                className="slotPadding"
                autoOk={false}
                id="endDate"
                label="End Date"
                name="date-input"
                value={endDate}
                // error={endDateErr ? true : false}
                onChange={e => changeDate.apply(null, [e, "endDate"])}
              />
              <Button onClick={fetchSlots} variant="contained" color="primary">
                Get Slots
              </Button>
            </Grid>
            <Grid md={4} item />
            <Grid xs={12} item>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                    <TableCell numeric>Name</TableCell>
                    <TableCell numeric>Email</TableCell>
                    <TableCell numeric>Contact </TableCell>
                    <TableCell numeric>Profile </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slotArr.map((i, j) => {
                    return (
                      <TableRow key={j}>
                        <TableCell component="th" scope="row">
                          {new Date(i.startTime).toLocaleString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric"
                          })}
                        </TableCell>
                        <TableCell numeric>{i.name}</TableCell>
                        <TableCell numeric>{i.email}</TableCell>
                        <TableCell numeric>{i.contact}</TableCell>
                        <TableCell numeric>
                          <IconButton onClick={e => downloadFile(`${i.doc}`)}>
                            <Icon icon={ic_file_download} size={30} />
                          </IconButton>
                        </TableCell>
                        {/* <TableCell numeric>{"row.protein"}</TableCell> */}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fragment>
  );
};
