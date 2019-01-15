import React, { Component, Fragment } from "react";
import UserLayout from "../UserLayout";
import Login from "../Login";
import Signup from "../../Containers/Signup";
import {
  Switch,
  // BrowserRouter as Router,
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import UserHome from "../UserHome";
import MainNav from "../MainNav";

import { connect } from "react-redux";
import { checkAuthState } from "../../Store/Actions/AuthActions";
import Profile from "../../Containers/Profile";
import Banner from "../../Components/Banner";
import Verify from "../../Containers/Verify";
import TestHome from "../TestHome";
import Appointment from "../../Containers/Appointment";
import Landing from "../Landing";
import TimeSlot from "../../Containers/AdminContainer/TimeSlot";
import ManageTime from "../../Containers/AdminContainer/ManageSlot";
import SlotDetail from "../../Containers/SlotDetails";
import UploadQuestion from "../AdminContainer/UploadQuestion";
import CreateTest from "../AdminContainer/CreateTest";
class App extends Component {
  componentWillMount() {
    this.props.checkAuthState();
  }
  render() {
    const UserView = () => (
      <UserLayout>
        <Switch>
          <Route exact path="/home" component={UserHome} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/timeslot" component={TimeSlot} />
          <Route exact path="/slotDetails" component={SlotDetail} />
          <Route exact path="/managetime" component={ManageTime} />
          <Route exact path="/uploadques" component={UploadQuestion} />
          <Route exact path="/createtest" component={CreateTest} />
          <Redirect to="/home" />
        </Switch>
      </UserLayout>
    );
    const MainView = (
      <Fragment>
        <Route exact path="/" component={MainNav} />
        <Route exact path="/" component={Banner} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Signup} />
        <Route path="/verify" component={Verify} />
        <Route
          path="*"
          render={e => {
            return e.pathname === "/" ? null : <Redirect to="/" />;
          }}
        />
      </Fragment>
    );
    const LandingComp = () => (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route exact path="/schedule" component={Appointment} />

          <Route
            exact
            path="/3e3e6b0e5c1c68644fc5ce3cf060211d"
            component={Login}
          />
          <Route component={Landing} />
        </Switch>
      </Fragment>
    );

    return (
      <Router>
        <Fragment>
          {this.props.isAuthenticated ? UserView() : LandingComp()}
        </Fragment>
      </Router>
    );
  }
}
const MapStateToProps = state => {
  return { ...state.Auth, ...state.Generic };
};
export default connect(
  MapStateToProps,
  { checkAuthState }
)(App);
