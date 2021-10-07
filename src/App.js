import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// you might be app to delete this once all items in file are discovered and deleted
import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import ContactForm from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
