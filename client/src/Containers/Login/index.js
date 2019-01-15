import React, { Component } from "react";
import LoginForm from "../../Components/Login";
import { connect } from "react-redux";
import { login, setCredentials } from "../../Store/Actions/AuthActions";
import { toggleLoader } from "../../Store/Actions/GenericActions";
class Login extends Component {
  updateCredentials = e => {
    let target = e.currentTarget;
    this.props.setCredentials({ [target.id]: target.value });
  };
  checkAuth = () => {
    this.props.toggleLoader({ isFetching: true });
    this.props.login({
      email: this.props.Auth.email,
      password: this.props.Auth.password
    });
  };
  render() {
    return (
      <LoginForm
        setCredentials={this.updateCredentials.bind(this)}
        login={this.checkAuth.bind(this)}
        errors={this.props.Auth.AuthErrors}
      />
    );
  }
}

const MapStateToProps = state => {
  return { Auth: state.Auth, Generic: state.Generic };
};
export default connect(
  MapStateToProps,
  { login, setCredentials, toggleLoader }
)(Login);
