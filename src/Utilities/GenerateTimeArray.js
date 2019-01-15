import { GetISTStr } from "./DateToIST";
export default async (start, end, step, userSlot, busySlot) => {
  const arr = [];
  let i = 0;

  for (i = start; i < end; i += 60000 * step) {
    if (userSlot.indexOf(i) > -1) {
      arr.push({
        date: await GetISTStr(i),
        available: false
      });
    } else if (busySlot.indexOf(i) > -1) {
    } else {
      arr.push({
        date: await GetISTStr(i),
        available: true
      });
    }
  }
  return arr;
};
