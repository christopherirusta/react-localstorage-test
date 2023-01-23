import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <nav>
         Titulo de navegacion
      </nav>
      <br/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
}

export default App;
