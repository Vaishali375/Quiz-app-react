import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import Quiz from "./Components/Quiz";
import Score from "./Components/Score";

function App() {
  return (
    <Router>
         <Route path="/" exact component={FirstPage} />
         <Route path="/start" exact component={Quiz} />
         <Route path="/score" exact component={Score} />
    </Router>
  );
}

export default App;
