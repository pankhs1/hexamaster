import React, { Component } from "react";
import SignupComponent from "../../Components/Signup";
import { connect } from "react-redux";
import {
  signupAction,
  SetFields,
  ResetFields
} from "../../Store/Actions/RegisterActions";
class SignUp extends Component {
  updateFields = e => {
    let target = e.currentTarget;

    this.props.SetFields({ [target.id]: target.value });
  };

  validate = () => {
    const { name, email, password, confirmPassword } = this.props.Register;
    if (password === confirmPassword) {
      this.props.signupAction({
        name,
        email,
        password
      });
    } else {
      this.props.SetFields({ RegErrors: ["Passwords do not match!"] });
    }
  };

  resetSnack = () => {
    this.props.ResetFields({ signUpSuccess: false });
  };

  componentWillUnmount() {
    this.resetSnack();
  }
  render() {
    return (
      <SignupComponent
        name={this.props.name}
        email={this.props.email}
        password={this.props.password}
        cpass={this.props.confirmPassword}
        userSignup={this.validate.bind(this)}
        setFields={this.updateFields.bind(this)}
        errors={this.props.Register.RegErrors}
        status={this.props.Register.signUpSuccess}
        closeSnack={this.resetSnack.bind(this)}
      />
    );
  }
}
const MapStateToProps = state => {
  return {
    Register: state.Register,
    Auth: state.Auth
  };
};
export default connect(
  MapStateToProps,
  { signupAction, SetFields, ResetFields }
)(SignUp);
