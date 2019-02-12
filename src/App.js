import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contact'
import Header from './Components/Header'

class App extends Component {
  render() {
   
    return (
      <div className="App">
     <Header   />
      <Contacts name='Francie' email='franfran@auaua.com' phone='12321312'/>
      <Contacts name='Johsn Doe' email='dasda@adada.com'phone='555555'/>
      <Contacts name='maria antonia' email='teste@adada.com'phone='99999'/>
      
      </div>
    );
  }
}

export default App;
