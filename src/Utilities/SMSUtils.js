import Axios from "axios";
import { load as loadEnv } from "dotenv";
loadEnv();
export const SendOTP = async (otp, num) => {
  let params = {
    sender_id: "GOHEXA",
    message: 2508,
    language: "english",
    route: "qt",
    numbers: num,
    variables: "{#BB#}|{#AA#}",
    variables_values: otp + "| 15"
  };

  try {
    const data = await Axios.post("https://www.fast2sms.com/dev/bulk", params, {
      headers: {
        Accept: "application/json",
        Authorization:
          "iByX9F0V3aqzONRDMkrTcWdPJAevSfbZYQC4jU85utEG1hl2L7UFmaYrWA1uG79NpnvQT4PtOwMKc6LH"
      }
    });
    console.log(data);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const SendSuccessSMS = async (date, num) => {
  let params = {
    sender_id: "GOHEXA",
    message: 2507,
    language: "english",
    route: "qt",
    numbers: num,
    variables: "{#EE#}|{#BB#}",
    variables_values: date + "|" + num
  };

  try {
    const data = await Axios.post("https://www.fast2sms.com/dev/bulk", params, {
      headers: {
        Accept: "application/json",
        Authorization:
          "iByX9F0V3aqzONRDMkrTcWdPJAevSfbZYQC4jU85utEG1hl2L7UFmaYrWA1uG79NpnvQT4PtOwMKc6LH"
      }
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const SendAckSMS = async (date, num) => {
  let params = {
    sender_id: "GOHEXA",
    message: 2507,
    language: "english",
    route: "qt",
    numbers: process.env.ADMIN_MOBILE,
    variables: "{#EE#}|{#BB#}",
    variables_values: date + "|" + num
  };

  try {
    const data = await Axios.post("https://www.fast2sms.com/dev/bulk", params, {
      headers: {
        Accept: "application/json",
        Authorization:
          "iByX9F0V3aqzONRDMkrTcWdPJAevSfbZYQC4jU85utEG1hl2L7UFmaYrWA1uG79NpnvQT4PtOwMKc6LH"
      }
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
