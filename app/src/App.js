/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Container } from "reactstrap";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Content from "./pages/dashboard/Content";
import HikeItemDetails from "./components/hikes/HikeItemDetails";
// TODO If this is going to be a separate page
import NewHike from "./components/hikes/NewHike";
import Resources from "./pages/resources/Resources";
import Contact from "./pages/about/About";
import HikeList from "./components/hikes/HikeList";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/walk/create" component={NewHike} />
            <Route path="/walks/all" component={HikeList} />
            <Route path="/walk/details" component={HikeItemDetails} />
            <Route path="/resources" component={Resources} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
