import React, { Component } from "react";
import SetSlot from "../../../Components/UserMain/Admin/SetTimeSlot";
import {
  setSlotInfo,
  createSlot,
  changeStatus
} from "../../../Store/Actions/AdminSlotActions";
import { connect } from "react-redux";

class TimeSlot extends Component {
  setInfo = (value, props) => {
    switch (props) {
      case "deleteBusySlot":
        const arr = this.props.AdminSlot.busySlot;
        const index = value.target.parentElement.dataset.index;
        arr.splice(index, 1);
        this.props.setSlotInfo({
          busySlot: arr
        });

        break;
      case "updateBusySlot":
        const slotArr = this.props.AdminSlot.busySlot;
        slotArr.push(value);
        this.props.setSlotInfo({
          busySlot: slotArr,
          pickerNode: false
        });

        break;
      default:
        this.props.setSlotInfo({ [props]: value });
        break;
    }
  };
  changeStatus = () => {
    this.props.changeStatus({ saveStatus: false });
  };
  saveSlot = () => {
    const {
      startDate,
      startTime,
      endDate,
      endTime,
      slotSize,
      busySlot
    } = this.props.AdminSlot;
    this.props.createSlot({
      startDate,
      startTime,
      endDate,
      endTime,
      slotSize,
      busySlot
    });
  };

  togglePicker = e => {
    this.props.setSlotInfo({ pickerNode: !this.props.AdminSlot.nodePicker });
  };
  render() {
    return (
      <SetSlot
        setInfo={this.setInfo.bind(this)}
        state={this.props.AdminSlot}
        saveSlot={this.saveSlot.bind(this)}
        changeStatus={this.changeStatus.bind(this)}
        togglePicker={this.togglePicker.bind(this)}
      />
    );
  }
}
const MapStateToProps = state => {
  return { AdminSlot: state.AdminSlot };
};
export default connect(
  MapStateToProps,
  { setSlotInfo, createSlot, changeStatus }
)(TimeSlot);
