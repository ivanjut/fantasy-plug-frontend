import React, { Component } from 'react';
// import logo from './images/logo.svg';
import './App.css';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Cover from "./components/Cover/Cover";
import Dashboard from "./components/Dashboard/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Nav/>

        <div className='main'>
            <Cover/>
            <Dashboard/>
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
