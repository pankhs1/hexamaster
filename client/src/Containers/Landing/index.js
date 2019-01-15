import React, { Component } from "react";
import Landing from "../../Components/Landing";
// import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { compose } from "redux";
class LandingContainer extends Component {
  render() {
    return <Landing />;
  }
}

export default withRouter(LandingContainer);
