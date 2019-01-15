import React, { Component } from "react";
import Detail from "../../Components/UserMain/Admin/SlotDetail";
import { connect } from "react-redux";
import { setInfo, getSlot } from "../../Store/Actions/AdminSlotInfoActions";
import Axios from "axios";
import FileSaver from "file-saver";
class SlotDetails extends Component {
  changeDate = async (e, type) => {
    await this.changeDateAsync(e, type);
  };
  changeDateAsync = async (e, type) => {
    this.props.setInfo({ [type]: e });
  };
  fetchSlots = () => {
    this.props.getSlot({
      startdate: this.props.SlotInfo.startDate,
      enddate: this.props.SlotInfo.endDate
    });
  };
  downloadFile = async file => {
    Axios.get("api/v1/uploads?file=" + file, {
      responseType: "blob"
      // timeout: 30000,
    })
      .then(({ data }) => {
        console.log(FileSaver.saveAs(data, file, true));
      })
      .catch(e => {});
  };
  render() {
    return (
      <Detail
        startDate={this.props.SlotInfo.startDate}
        endDate={this.props.SlotInfo.endDate}
        changeDate={this.changeDate.bind(this)}
        fetchSlots={this.fetchSlots.bind(this)}
        slotArr={this.props.SlotInfo.userSlots}
        downloadFile={this.downloadFile.bind(this)}
      />
    );
  }
}
const MapStateToProps = state => {
  return { SlotInfo: state.SlotInfo };
};
export default connect(
  MapStateToProps,
  { setInfo, getSlot }
)(SlotDetails);
