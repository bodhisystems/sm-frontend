import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const appContext = {
      userId: 'hudeomah@gmail.com',
      accessToken: 'accessToken',
      clientId: 'clientId',
    };


    return (
      <div className="App">
      <v1-smhello
        id="component"
        config="development"
        ref={ (element) => { element.appContext = appContext; } }
        />
      </div>
    );
  }
}

export default App;
