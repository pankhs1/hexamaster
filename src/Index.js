import "babel-polyfill";
import Hapi from "hapi";
import RegisterPlugin from "./Services/RegisterPlugin";
import Routes from "./Routes";
import FormatJoi from "joi-error-formatter";
import Boom from "boom";
import { load as loadEnv } from "dotenv";

const Server = new Hapi.Server({
  port: process.env.PORT || 9000,
  // host: "localhost",
  routes: {
    validate: {
      options: { abortEarly: false },
      failAction: async (request, h, err) => {
        if (process.env.NODE_ENV === "production") {
          // In prod, log a limited error message and throw the default Bad Request error.
          console.error("ValidationError:", err.message); // Better to use an actual logger here.
          throw Boom.badRequest(`Invalid request payload input`);
        } else {
          // During development, log and respond with the full error.

          const error = FormatJoi(err);
          console.log(error);
          // return new Error("Error");
          throw Boom.badRequest(error);
        }
      }
    }
  }
});
Server.state = {
  strictHeader: true,
  ignoreErrors: false,
  isSecure: true,
  isHttpOnly: true,
  isSameSite: "Strict",
  encoding: "none"
};
const init = async () => {
  await RegisterPlugin(Server);
  await Server.start();
  Server.route(Routes);
  console.log(`Server running at ${Server.info.uri} !`);
};

init();
