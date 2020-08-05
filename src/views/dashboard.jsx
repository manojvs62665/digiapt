import React, { Component } from "react";
import "./style.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/shared/header/header";
import Home from "../components/home/home";
import About from "../components/about/about";
import Categories from "../components/categories/categories";
import Contact from "../components/contact/contact";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="dashboard">
          <Header />
          <main>
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </BrowserRouter>
          </main>
        </div>
      </>
    );
  }
}
