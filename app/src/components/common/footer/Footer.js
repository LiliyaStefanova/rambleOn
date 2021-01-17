import React from "react";
import './index.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {library} from  '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const url = "https://github.com/LiliyaStefanova/rambleOn";
// TODO flickr account

const Footer = () => {
  return (
    <div className="footer-content">
    <a href={url} target="_blank">
    <FontAwesomeIcon icon={["fab", "github"]} size="2x" className="footer-icon"></FontAwesomeIcon>
    </a>
      <FontAwesomeIcon icon={["fab", "flickr"]} size="2x" className="footer-icon"/>
      <div className="footer-text">
      <p>&#169; elsteremonstere &#57643;</p>
       </div>
    </div>
  );
};

export default Footer;