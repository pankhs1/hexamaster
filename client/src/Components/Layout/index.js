import React from "react";

import UserNav from "../NavBars/UserNav";
import UserDrawer from "../NavBars/UserDrawer";
export default props => {
  const {
    classProp,
    mobileOpen,
    drawerToggle,
    childEl,
    logout,
    isAdmin
  } = props;
  const { appBar, navIconHide } = classProp;
  return (
    <div className={classProp.root}>
      <UserNav
        classProp={{ appBar, navIconHide }}
        drawerToggle={drawerToggle}
        logout={logout}
      />
      <UserDrawer
        mobileOpen={mobileOpen}
        drawerToggle={drawerToggle}
        classProp={classProp}
        isAdmin={isAdmin}
      />
      <main style={{ overflowY: "auto" }} className={classProp.content}>
        <div className={classProp.toolbar} />
        {childEl}
      </main>
    </div>
  );
};
