import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import Gridcontainer from "./components/GridContainer/Gridcontainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrincipalLog from "./components/Login/PrincipalLog";
import BlogCategory from "./components/BlogCategory/BlogCategory";
import AdminGridContainer from "./components/AdminGridContainer/AdminGridContainer";
import Details from "./components/Details/Details";

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <BrowserRouter>
        <Toolbar />
          <Switch>
              <Route path="/category/:id" component={ BlogCategory } />
              <Route path="/admin" component={ PrincipalLog } />
              <Route path="/fillcategory" component={ AdminGridContainer } />
              <Route path="/adminadd/:id" component={ Details } /> 
              <Route exact path="/Chameleon" component={ Gridcontainer } />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;