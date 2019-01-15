import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {MuiPickersUtilsProvider} from "material-ui-pickers";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import moment from "moment";
import "moment/locale/en-gb";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  breakpoints: { values: { xs: 0, sm: 450, md: 600, lg: 900, xl: 1200 } },
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#3B3B98",
      contrastText: "#fff"
    },
    secondary: {
      main: "#25CCF7",
      contrastText: "#fff"
    }
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider
      locale={moment.locale("en-gb")}
      moment={moment}
      utils={MomentUtils}
    >
      <App />
    </MuiPickersUtilsProvider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
