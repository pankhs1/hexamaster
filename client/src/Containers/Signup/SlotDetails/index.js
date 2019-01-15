import React, { Component } from "react";
import Detail from "../../Components/UserMain/Admin/SlotDetail";
import { connect } from "react-redux";
class SlotDetails extends Component {
  render() {
    return <Detail />;
  }
}
const MapStateToProps = state => {
  return { AdminSlot: state.AdminSlot };
};
export default connect(MapStateToProps)(SlotDetails);
