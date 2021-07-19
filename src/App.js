import React from "react";
import logo from "./logo.svg";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faHotdog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           FloJaNa's Awesome Website
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/flora-davies-2409/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="App-link"
          href="https://github.com/TataSher"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </header>
    </div>
  );
}

export default App;
