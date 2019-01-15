import moment from "moment-timezone";
export const GetISTStr = async (date, ops = "") => {
  switch (ops.toLowerCase()) {
    case "daystart":
      return moment(date)
        .tz("Asia/Kolkata")
        .startOf("day")
        .toString();
    default:
      return moment(date)
        .tz("Asia/Kolkata")
        .startOf("minute")
        .toString();
  }
};

export const GetIST = async (date, ops = "") => {
  switch (ops.toLowerCase()) {
    case "daystart":
      return moment(date)
        .tz("Asia/Kolkata")
        .startOf("day");
    default:
      return moment(date)
        .tz("Asia/Kolkata")
        .startOf("minute");
  }
};
