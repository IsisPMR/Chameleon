import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Gridcontainer from "./components/GridContainer/Gridcontainer";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
        <Toolbar />
          <Switch>
              <Route path="/detail/:id" component={Details} />
              <Route exact path="/Chameleon" component={Gridcontainer} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
