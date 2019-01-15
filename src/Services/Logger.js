import winston from "winston";
import goodWinston from "hapi-good-winston";
const goodWinstonOptions = {
  levels: {
    response: "debug",
    error: "info"
  }
};

export const LoggerOptions = {
  reporters: {
    // Simple and straight forward usage
    winston: [goodWinston(winston)],

    // Adding some customization configuration
    winstonWithLogLevels: [goodWinston(winston, goodWinstonOptions)],

    // This example simply illustrates auto loading and instantiation made by good
    winston2: [
      {
        module: "hapi-good-winston",
        name: "goodWinston",
        args: [winston, goodWinstonOptions]
      }
    ]
  }
};
