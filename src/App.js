import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "./context";
import Contacts from "./Components/contacts/Contacts";
import AddContact from "./Components/contacts/AddContact";
import Header from "./layout/Header";
import About from "./pages/about";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/about/:id" component={About} />

                <Route exact path="/contact/add" component={AddContact} />

                <Route exact path="/" component={Contacts} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
