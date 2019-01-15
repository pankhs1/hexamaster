import React, { PureComponent } from "react";
import Paper from "@material-ui/core/Paper";
import BasePicker from "material-ui-pickers/_shared/BasePicker";
import Calendar from "material-ui-pickers/DatePicker/components/Calendar";
import { Calendar as Cal } from "material-ui-next-pickers";
import DatePicker from "react-datepicker/";
import moment from "moment-timezone";
import "react-datepicker/dist/react-datepicker.min.css";
class StaticPickers extends PureComponent {
  componentDidMount() {
    this.props.getSlot();
  }

  render() {
    const datesIncluded = this.props.dateArr.map(i => moment(i));

    return (
      <DatePicker
        inline
        peekNextMonth={false}
        selected={moment(this.props.date)}
        includeDates={datesIncluded}
        onChange={e => this.props.setInfo.apply(null, [e, "date"])}
      />
    );
  }
}

export default StaticPickers;
