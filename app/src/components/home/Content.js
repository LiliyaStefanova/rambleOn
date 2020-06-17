import React, { Component } from "react";
import "./index.css";
import { Container, Jumbotron } from "reactstrap";
import MyWalks from "../list/MyWalks";
import { PropTypes } from "prop-types";

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div>
        <Jumbotron fluid>
           <img src="../../images/moss.png"/>
        </Jumbotron>
        <MyWalks />
      </div>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool,
};

export default Content;
