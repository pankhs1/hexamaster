import React, { Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography
} from "@material-ui/core";
import DialogCal from "../../Containers/DialogCalendar";
import SlotCard from "./SlotCard";
export default props => {
  const {
    setInfo,
    isFetching,
    modalStatus,
    date,
    slotData,
    toggleModal,
    getSlot,
    getAvailDates,
    dateArr
  } = props;
  return (
    <Fragment>
      <Dialog
        // fullWidth={true}

        className="dialo"
        open={modalStatus}
        onBackdropClick={e => toggleModal.apply(null, [e, "close"])}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          Select Time Slot
        </DialogTitle>
        <DialogContent>
          <DialogCal
            dateArr={dateArr}
            getAvailDates={getAvailDates}
            getSlot={getSlot}
            setInfo={setInfo}
            date={date}
          />
          <SlotCard
            slotData={slotData}
            isFetching={isFetching}
            setInfo={setInfo}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};
