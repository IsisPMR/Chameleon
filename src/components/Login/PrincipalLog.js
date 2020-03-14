import React, { Fragment, Component } from "react";
import "./Login.css";
import { GlobalContextProvider } from "./GlobalContextProvider";
import Login from "./Login";

class PrincipalLog extends Component {
render() {
  return (
    <Fragment>
      <GlobalContextProvider settings={{ username: "chameleon", password: "chameleon123" }}>
        <Login />
      </GlobalContextProvider>
    </Fragment>
  );
}
}

export default PrincipalLog; 