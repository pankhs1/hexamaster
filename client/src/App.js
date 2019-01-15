import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store";
import AppContainer from "./Containers/AppContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
