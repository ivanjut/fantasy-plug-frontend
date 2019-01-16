import React, { Component } from 'react';
// import logo from './images/logo.svg';
import football_player from './images/football_player_icon.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>

        <div className='main'>
          <img src={football_player} alt='football player'/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
