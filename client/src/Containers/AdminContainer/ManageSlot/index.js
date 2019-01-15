import React, { Component } from "react";
import Manage from "../../../Components/UserMain/Admin/ManageSlot";
import { deleteSlot, getSlot } from "../../../Store/Actions/AdminManageSlot";
import { connect } from "react-redux";

class ManageSlot extends Component {
  componentDidMount() {
    this.props.getSlot();
  }
  deleteSlot = slotId => {
    this.props.deleteSlot({ slotId });
  };

  render() {
    return (
      <Manage
        deleteSlot={this.deleteSlot.bind(this)}
        slotArr={this.props.ManageSlot.slotArray}
      />
    );
  }
}
const MapStateToProps = state => {
  return { ManageSlot: state.ManageSlot };
};
export default connect(
  MapStateToProps,
  { deleteSlot, getSlot }
)(ManageSlot);
