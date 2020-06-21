import React from "react";
import './index.css'

const starUrl = "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=star&count=true&size=large";
const forkUrl = "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=fork&count=true&size=large";
const followUrl ="https://ghbtns.com/github-btn.html?user=liliyastefanova&type=follow&count=true&size=large";

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-content">
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
    </div>
  );
};

export default Footer;
