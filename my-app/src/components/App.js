import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";
import Projects from './Projects';
/* import Title from './Title.js';
import Jokes from './Jokes.js';
import SocialProfiles from './SocialProfiles.js'; */


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
        <Link to="/"/>
        <Header />
        
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
        <hr />
        <Projects />
      </div>
    )
  }
}

export default App;
