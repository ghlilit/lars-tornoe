import { HashRouter as Router, Route, Link } from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import News from "./pages/News"
import Work from "./pages/Work"
import React from 'react';

function App() {
  return (
    <Router basename="lars-tornoe">
        <div className="app-wrapper">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/work/:id" component={Work} />
        </div>
    </Router>
  );
}

export default App;
