import React, { Component } from 'react';
// import logo from './images/logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>

        <div className='main'>
            <Main/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
