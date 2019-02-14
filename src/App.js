import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {Provider} from './context' 
import Contacts from "./Components/Contacts";
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <Provider>
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contacts />
        </div>
      </div>
      </Provider>

    );
  }
}

export default App;
