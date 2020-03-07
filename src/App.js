import React, { Component }from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Gridcontainer from './components/GridContainer/Gridcontainer';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Toolbar />
      <main style={{marginTop: '65px'}}>

      <Gridcontainer />
      </main>
    </div>
     )}
}

export default App;
