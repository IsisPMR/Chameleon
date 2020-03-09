import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Gridcontainer from "./components/GridContainer/Gridcontainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <BrowserRouter>
          <main>
            <Gridcontainer />
          </main>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
