import React, { useState } from "react";
import { Button, Card, CardBody, Collapse } from "reactstrap";
import "./index.css";
import ContactForm from "./ContactForm";

const starUrl =
  "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=star&count=true&size=large";
const forkUrl =
  "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=fork&count=true&size=large";
const followUrl =
  "https://ghbtns.com/github-btn.html?user=liliyastefanova&type=follow&count=true&size=large";

const Contact = () => {
  const [collapseFeedback, setCollapseFeedback] = useState(false);
  const [collapseContribute, setCollapseContribute] = useState(false);

  const toggleFeedback = () => {
    setCollapseFeedback(!collapseFeedback);
  };

  const toggleContribute = () => {
    setCollapseContribute(!collapseContribute);
  };

  return (
    <div>
      <Button
        color="primary"
        size="lg"
        block
        onClick={toggleFeedback}
        style={{ "margin-bottom": "5px" }}
      >
        Feedback & Questions
      </Button>
      <Collapse isOpen={collapseFeedback}>
        <Card className="card">
          <CardBody>
            <ContactForm />
          </CardBody>
        </Card>
      </Collapse>
      <Button
        color="primary"
        size="lg"
        block
        onClick={toggleContribute}
        style={{ "margin-bottom": "5px" }}
      >
        Contribute
      </Button>
      <Collapse isOpen={collapseContribute}>
        <Card className="card">
          <CardBody>
            <div style={{ margin: "auto" }}>
              <iframe
                title="ghStar"
                src={starUrl}
                frameBorder="0"
                scrolling="0"
                width="160px"
                height="30px"
              />
              <iframe
                title="ghFork"
                src={forkUrl}
                frameBorder="0"
                scrolling="0"
                width="160px"
                height="30px"
              />
              <iframe
                title="ghFollow"
                src={followUrl}
                frameBorder="0"
                scrolling="0"
                width="250px"
                height="30px"
              />
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Contact;
