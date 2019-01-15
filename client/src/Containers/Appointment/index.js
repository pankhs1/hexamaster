import React, { Component } from "react";
import { connect } from "react-redux";
import BookSlot from "../../Components/Appointment";
import {
  setSlotInfo,
  bookSlot,
  getOTP,
  getSlots,
  checkSlot,
  resetState,
  resendOTP,
  getAvailableSlot
} from "../../Store/Actions/SlotActions";
import { toggleLoader } from "../../Store/Actions/GenericActions";
import { withRouter } from "react-router";
import { compose } from "redux";
class Appointment extends Component {
  componentDidMount() {
    this.getAvailDates();
  }
  componentDidUpdate() {
    if (
      this.props.SlotState.otpCreated > 2 &&
      this.props.SlotState.intervalId === null
    ) {
      const id = setInterval(this.countDown(30), 1000);
      this.props.setSlotInfo({ intervalId: id });
    }
  }
  setInfo = async (event, type) => {
    switch (type) {
      case "date":
        await this.dateChangeAsync(event);
        this.fetchSlot();

        break;
      case "timeslot":
        this.props.setSlotInfo({
          slotTime: event.target.parentElement.dataset.dom,
          modalOpen: false
        });
        break;

      case "file":
        {
          const file = event.target.files ? event.target.files[0] : null;
          const name = file ? event.target.files[0].name : "";
          const extArr = ["pdf", "docx", "doc", "txt", "odt"];
          const ext =
            name.length > 0
              ? name.split(".").splice(name.split(".").length - 1, 1)
              : null;
          if (extArr.indexOf(ext + "") < 0) {
            this.props.setSlotInfo({
              slotError: ["Invalid File Type"],
              fileName: ""
            });
          } else {
            this.props.setSlotInfo({
              doc: file,
              fileName: name
            });
          }
        }
        break;
      default:
        if (
          event.target.id === "contact" ||
          event.target.id === "checkContact"
        ) {
          if (event.target.value.length > 10) {
            return false;
          }
        }
        this.props.setSlotInfo({ [event.target.id]: event.target.value });
        break;
    }
  };
  toggleCheck = () => {
    this.props.setSlotInfo({
      checkInfo: !this.props.SlotState.checkInfo,
      checkContact: "",
      checkError: ""
    });
  };
  dateChangeAsync = async event => {
    const date = event._d.getTime();
    this.props.setSlotInfo({
      dateSelected: date,
      isFetching: true,
      slotArray: []
    });
  };
  toggleModal = (e, type) => {
    if (type === "close") {
      this.props.setSlotInfo({ modalOpen: false });
    } else {
      this.props.setSlotInfo({ modalOpen: true, isFetching: true });
    }
  };
  stateReset = () => {
    this.props.resetState();
  };
  fetchSlot = () => {
    this.props.getSlots({
      date: this.props.SlotState.dateSelected
    });
  };

  checkSlot = () => {
    this.props.SlotState.otpCreated
      ? this.props.checkSlot({
          contact: this.props.SlotState.checkContact,
          hasOTP: true,
          otp: this.props.SlotState.otp
        })
      : this.props.checkSlot({
          contact: this.props.SlotState.checkContact,
          hasOTP: false
        });
  };

  getExistingSlot = () => {
    this.props.checkSlot({
      contact: this.props.SlotState.checkContact,
      hasOTP: true,
      otp: this.props.SlotState.otp
    });
  };
  closeSnack = () => {
    this.props.setSlotInfo({ slotSaved: false });
  };
  createOTP = (e, resend) => {
    let {
      name,
      email,
      doc,
      contact,
      dateSelected,
      slotTime,
      fileName
    } = this.props.SlotState;
    const formData = new FormData();
    formData.append("doc", doc);
    formData.append("name", name);
    formData.append("fileName", fileName);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("date", dateSelected);
    formData.append("slotTime", slotTime);
    if (contact) {
      resend ? this.props.resendOTP({ contact }) : this.props.getOTP(formData);
    } else {
      if (resend) {
        this.props.setSlotInfo({ isFetching: true });
        this.props.resendOTP({ contact: this.props.SlotState.checkContact });
      } else {
        this.props.setSlotInfo({ isFetching: true });
        this.props.getOTP(formData);
      }
    }
  };
  slotBook = () => {
    let {
      name,
      email,
      contact,
      dateSelected,
      slotTime,
      otp
    } = this.props.SlotState;

    this.props.bookSlot({
      name,
      email,
      contact,
      date: dateSelected,
      slotTime,
      otp
    });
  };
  countDown = s => {
    var seconds = s;

    return () => {
      if (seconds < 0) {
        const otpCreated = this.props.SlotState.otpCreated > 0 ? 1 : 0;
        clearInterval(this.props.SlotState.intervalId);
        this.props.setSlotInfo({
          intervalId: null,
          otpCreated
        });
      }
      if (seconds >= 0) {
        this.props.setSlotInfo({ timeLeft: this.formatSeconds(seconds) });
        seconds--;
      }
    };
  };

  formatSeconds = secs => {
    const pad = n => {
      return n < 10 ? "0" + n : n;
    };

    var h = Math.floor(secs / 3600);
    var m = Math.floor(secs / 60) - h * 60;
    var s = Math.floor(secs - h * 3600 - m * 60);

    return pad(m) + ":" + pad(s);
  };
  getAvailDates = () => {
    this.props.getAvailableSlot();
  };
  render() {
    return (
      <BookSlot
        getAvailDates={this.getAvailDates.bind(this)}
        setInfo={this.setInfo.bind(this)}
        bookSlot={this.slotBook.bind(this)}
        resetState={this.stateReset.bind(this)}
        getOTP={this.createOTP.bind(this)}
        toggleModal={this.toggleModal.bind(this)}
        errors={this.props.SlotState.slotError}
        slotState={this.props.SlotState}
        closeSnack={this.closeSnack.bind(this)}
        getSlots={this.fetchSlot.bind(this)}
        toggleCheck={this.toggleCheck.bind(this)}
        checkSlot={this.checkSlot.bind(this)}
      />
    );
  }
}

const MapStateToProps = state => {
  return { SlotState: state.SlotState };
};

export default compose(
  withRouter,
  connect(
    MapStateToProps,
    {
      setSlotInfo,
      bookSlot,
      getSlots,
      toggleLoader,
      getOTP,
      resetState,
      checkSlot,
      resendOTP,
      getAvailableSlot
    }
  )
)(Appointment);
