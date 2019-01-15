import moment from "moment-timezone";
export default (start, end) => {
  const result = [];
  for (let i = start; i <= end; i += 86400000) {
    result.push(
      moment(i)
        .tz("Asia/Kolkata")
        .startOf("day")
    );
  }

  return result;
};
