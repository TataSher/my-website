import React from "react";
import logo from './logo.svg';
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Nanana
        </a>
        <div>
          <FontAwesomeIcon icon={faLinkedin}/>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithubSquare} />
        </div>
          <div>
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
      </header>
    </div>
  );
}

export default App;







