import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(){
    super();

        this.state = {
          string: 'hallo jangoman'
        }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState ({string:'Hoi Rohitaaz '}) }> zie mijn echte naam</button>
        </header>d
    </div>
    )
  }
}

export default App;
