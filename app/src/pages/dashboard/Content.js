import React, { useState} from "react";
import "./index.css";
import { Container, Jumbotron } from "reactstrap";
import HikeList from "../../components/hikes/HikeList";
import { PropTypes } from "prop-types";

const Content = () => {

    const [error] = useState(null);

    if (error) {
      return <p>Something went wrong</p>;
    }
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <img src="../../images/moss.png" />
          </Container>
        </Jumbotron>
        <HikeList />
      </div>
    );
  }

Container.propTypes = {
  fluid: PropTypes.bool,
};

export default Content;
