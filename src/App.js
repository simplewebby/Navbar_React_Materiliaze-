import React, { Component } from 'react';
import Navbar from './comps/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './comps/About';
import Contact from './comps/Contact';
import Home from './comps/Home';



class App extends Component {
  render() {
    return (
     <BrowserRouter >
      <div className="App">
        <Navbar/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
       
      </div>
      </BrowserRouter >
    );
  }
}

export default App;
