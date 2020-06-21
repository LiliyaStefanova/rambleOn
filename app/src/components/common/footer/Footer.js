import React from "react";
import './index.css';
import {library} from  '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faFlickr} from '@fortawesome/free-brands-svg-icons';
import {faCompass, faMapMarked, faSubway, faCloudSunRain, faHiking} from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faFlickr, faHiking);

const starUrl = "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=star&count=true&size=large";
const forkUrl = "https://ghbtns.com/github-btn.html?user=liliyastefanova&repo=prep-your-walk&type=fork&count=true&size=large";
const followUrl ="https://ghbtns.com/github-btn.html?user=liliyastefanova&type=follow&count=true&size=large";

const Footer = () => {
  return (
    <div>
      <FontAwesomeIcon icon="hiking" className="footer-icon"/>
      <FontAwesomeIcon icon="github" className="footer-icon"/>
    </div>
  );
};

export default Footer;
