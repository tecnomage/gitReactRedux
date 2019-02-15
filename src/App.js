import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Provider} from './context' 
import Contacts from './Components/contacts/Contacts';
import AddContact from './Components/contacts/AddContact'
import Header from "./layout/Header";

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
          <AddContact></AddContact>
        </div>
      </div>
      </Provider>

    );
  }
}

export default App;
