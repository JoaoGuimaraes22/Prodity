import React from "react";
import { withRedux } from "../../lib/with-redux-store";

function WithReduxLayout({ children }) {
  return <div>{children}</div>;
}

export default withRedux(WithReduxLayout);
