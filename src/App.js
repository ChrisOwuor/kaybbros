import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./index.css";


import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import AuditAndAssurance from "./Components/AuditAndAssurance";
import HumanResourceManagement from "./Components/HumanResourceMgt";

import Navbarmenu from "./Components/menu/Navbarmenu";
import Footer from "./Components/Footer/Footer";
import BusinessValidation from "./Components/BusinessValidation";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <Navbarmenu />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Business Validation" component={BusinessValidation} />
            <Route
              path="/Human Resource Management"
              component={HumanResourceManagement}
            />
            <Route path="/Contact" component={Contact} />
            <Route path="/Services" component={Services} />
            <Route path="/Audit And Assurance" component={AuditAndAssurance} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
