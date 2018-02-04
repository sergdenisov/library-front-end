import React, { Component, Fragment } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
