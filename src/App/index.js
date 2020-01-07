import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import Home from "../Pages/Home";
import QuizPage from "../Pages/QuizPage";

const customHistory = createBrowserHistory();

function App() {
  return (
    <Router history={customHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quiz" render={props => <QuizPage {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
