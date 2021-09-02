import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import User from "./Componants/User";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={User} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
    



export default App;
