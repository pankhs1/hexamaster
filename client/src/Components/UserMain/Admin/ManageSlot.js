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
import moment from "moment-timezone";
import { Icon } from "react-icons-kit";
import { ic_delete } from "react-icons-kit/md/ic_delete";
export default props => {
  const { slotArr, deleteSlot } = props;

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Grid container>
            <Grid xl={12} item>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Start Date </TableCell>
                    <TableCell>End Date </TableCell>
                    <TableCell>Start Time </TableCell>
                    <TableCell>End Time </TableCell>
                    <TableCell numeric>Slotsize</TableCell>
                    <TableCell>Busy Slots </TableCell>
                    <TableCell> </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {slotArr.map((i, j) => {
                    return (
                      <TableRow key={j}>
                        <TableCell scope="row">
                          {moment(i.startDate)
                            .tz("Asia/Kolkata")
                            .startOf("day")
                            .format("D,MMMM,YYYY")
                            .toString()}
                        </TableCell>
                        <TableCell>
                          {moment(i.endDate)
                            .tz("Asia/Kolkata")
                            .startOf("day")
                            .format("D,MMMM,YYYY")
                            .toString()}
                        </TableCell>
                        <TableCell>
                          {moment(i.startTime)
                            .tz("Asia/Kolkata")
                            .startOf("minute")
                            .format("h:mm A")
                            .toString()}
                        </TableCell>
                        <TableCell>
                          {moment(i.endTime)
                            .tz("Asia/Kolkata")
                            .startOf("minute")
                            .format("h:mm A")
                            .toString()}
                        </TableCell>

                        <TableCell numeric>{i.slotSize}</TableCell>
                        <TableCell numeric>
                          {i.busySlot.map((i, j) => {
                            return (
                              moment(i)
                                .tz("Asia/Kolkata")
                                .startOf("minute")
                                .format("h:mm A")
                                .toString() + " , "
                            );
                          })}
                        </TableCell>
                        <TableCell numeric>
                          <IconButton onClick={e => deleteSlot(i._id)}>
                            <Icon icon={ic_delete} size={30} />
                          </IconButton>
                        </TableCell>
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
