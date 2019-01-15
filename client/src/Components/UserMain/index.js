import React, { Fragment } from "react";
import UserHome from "./UserHome";
import AdminHome from "./Admin/AdminHome";
export default props => {
  return (
    <Fragment>
      {props.auth.isAdmin ? <AdminHome {...props} /> : <UserHome {...props} />}
    </Fragment>
  );
};
