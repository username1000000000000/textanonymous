import logo from './logo.svg';
import './App.css';
import React, {useState, Component} from 'react';
import { DeviceMobileIcon, ArrowRightIcon } from '@primer/octicons-react'
import Message from './text.svg';
import Reach from './reach.png';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numberTo: '',
      message: ''
    };
  }
  onSubmit = (e) => {

    e.preventDefault();
    const {numberTo, message} = this.state;
    console.log(numberTo);
    console.log(message);
    Axios.post('http://localhost:5000/sendmessage', { numberTo, message })
          .then((result) => {
          });
  }
  onChange = (e) => {
  
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (

      <div className="body">
      <div>
         <img src={Message} style={{height: '100px', width: '100px'}} />
         <h3>Send a message to your <span>friend</span>. Try it now.</h3>
         <p>Fully anonymous messanger that allows you to send text messages to whomever you wish</p>
      </div>
      <div>
          <img src={Reach} style={{height: '100px', width: '100px'}} />
            <h3>Send an anonymous message</h3>
            <form onSubmit={this.onSubmit}>
              <input type="text" placeholder="Number you want to text(Ex: +12008883333)" name="numberTo" onChange={this.onChange} required/>
              <textarea placeholder="Message you want to send" name="message" onChange={this.onChange} required/>
              <button type="submit">Send message <ArrowRightIcon size={16} /></button>
            </form>
          </div>
        </div>
      );
  }
  
}
export default App;