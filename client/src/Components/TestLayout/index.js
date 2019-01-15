import React from "react";
// import TestNav from "../NavBars/TestNav";
import TestDrawer from "../NavBars/TestDrawer";

export default props => {
  const { classProp, mobileOpen, drawerToggle, children } = props;

  // const { appBar, navIconHide } = classProp;
  return (
    <div className={classProp.root}>
      <main className={classProp.content}>{children}</main>
      {/* <TestNav
        classProp={{ appBar, navIconHide }}
        drawerToggle={drawerToggle}
        logout={logout}
      /> */}
      <TestDrawer
        mobileOpen={mobileOpen}
        drawerToggle={drawerToggle}
        classProp={classProp}
      />
    </div>
  );
};
