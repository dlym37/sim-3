import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';

class App extends Component {
  constructor(){
    super();
    this.state = {
      sentence : 'Showing James what is up'
    }
    this.handleChange = this.handleChange.bind(this); /*SIM-3 37C*/    
  }
handleChange(input){
  this.setState({ 
    sentence: input
  })

}

  render() {
    return (
      <div className="Main-Page-Background">
        <div className='box'>
          <div className='box-image' /> 
          <h1>Helo</h1>
          <a href={process.env.REACT_APP_LOGIN} className='box-button'>
            <div >Login/Register</div >
          </a>
        </div>
        <Component1 /*SIM-3 36H*/
        sentence={this.state.sentence} 
        handleChange={this.handleChange}/>
      </div>
    );
  }
}

export default App;
