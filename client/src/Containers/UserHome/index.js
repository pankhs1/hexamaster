import React, { Component, Fragment } from "react";
import { fetchUser } from "../../Store/Actions/UserActions";
import UserMain from "../../Components/UserMain";
import { Grid } from "@material-ui/core";
import Exam from "../Exam";
import { connect } from "react-redux";
class UserHome extends Component {
  componentDidMount = () => {
    this.props.Auth.isAdmin ? null : this.props.fetchUser();
  };

  render() {
    const { User } = this.props;
    return (
      <Fragment>
        <UserMain user={User} auth={this.props.Auth} />
        {this.props.Auth.isAdmin ? null : (
          <Grid container spacing={24}>
            <Exam />
            <Exam />
            <Exam />
            <Exam />
          </Grid>
        )}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return { User: state.User, Auth: state.Auth };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHome);
