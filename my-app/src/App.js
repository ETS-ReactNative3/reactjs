import React, { Component } from "react";

class App extends Component {
  state = { displayBio: false };
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }
  /* constructor(){
      super();
      this.state = { displayBio: false };
      /* this.readMore = () => {
        this.setState({displayBio: true});
      }
      this.readLess = () => {
        this.setState({displayBio: false});
      }
      this.toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
      }
    } */
    render(){
    /* let bio = (
      <div>
        <p>mas texto</p>
        <p>#opentowork</p>
      </div>
    ); */
    return(
      <div>
        <h1>Mi nombre</h1>
        <p>descipcion de la persona</p>
        <p>objetivos</p>
        {
          this.state.displayBio ? (
            <div>
              <p>mas texto</p>
              <p>#opentowork</p>
              <button onClick={this.toggleDisplayBio}>Read less</button>
            </div>
          ):(
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          ) 
          
        }
        
      </div>
    )
  }
}

export default App;

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
