import React from "react";
import "../styles/App.css";
import Header from './header'
import { Switch, Route } from 'react-router-dom'
import LinkList from "./link-list";
import CreateLink from "./create-link";
import Login from './login'

function App() {
  return (
    <div style={{ marginTop: "20px"}} className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route exact path="/create" component={CreateLink} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
