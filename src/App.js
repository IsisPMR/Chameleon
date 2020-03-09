import React, { Component }from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Gridcontainer from './components/GridContainer/Gridcontainer';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Toolbar />
      <main>

      <Gridcontainer />
      </main>
      <Footer />
    </div>
     )}
}

export default App;
