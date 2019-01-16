import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>

        <div className='main'>
          
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
