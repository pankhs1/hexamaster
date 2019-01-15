import AuthCookie from "hapi-auth-cookie";
import { authCookieOptions, adminAuthCookieOptions } from "./CookieAuthOpts";
import Bell from "bell";
import inert from "inert";
import { load as loadEnv } from "dotenv";
import { LoggerOptions } from "./Logger";
loadEnv();

export default async server => {
  try {
    await server.register({
      plugin: require("good"),
      LoggerOptions
    });
    await server.register(AuthCookie);
    await server.register(Bell);
    await server.register(inert);
  } catch (e) {
    console.log("Error: ", e);
  }
  server.auth.strategy("facebook", "bell", {
    provider: "facebook",
    password: process.env.COOKIE_PASS,
    isSecure: false,
    clientId: "323758438359169",
    clientSecret: "a4152e040f66a1c49c5871877305a584",
    location: `${server.info.uri}`
  });

  server.auth.strategy("fm-cookie", "cookie", authCookieOptions);
  server.auth.strategy("fm-admin", "cookie", adminAuthCookieOptions);
  server.auth.default("fm-cookie");
};
