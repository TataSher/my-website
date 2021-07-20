import React from "react";
import logo from "./logo.svg";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DynamicMenu } from "./components/dynamicMenu/dynamicMenu";
import "./App.css";
import { ScrollingProvider, Section } from "react-scroll-section";

function App() {
  return (
    <ScrollingProvider>
      <DynamicMenu />
      <Section id="home">
        <div className="home-page">
          <img src={logo} className="App-logo" alt="logo" />
          <p>FloJaNa's Awesome Website</p>
          <div className="icons">
            <a
              className="App-link"
              href="https://www.linkedin.com/in/flora-davies-2409/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg'/>
            </a>
            <a
              className="App-link"
              href="https://github.com/TataSher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size='lg' />
            </a>
            <a
              className="App-link"
              href="mailto:j.leighton.hooper@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size='lg' />
            </a>
          </div>
          <div class="arrow">
            <a className="arrow-link" href="#about">
              <FontAwesomeIcon icon={faAngleDown} size='lg' className="bounce"/>
            </a>
          </div>

        </div>
      </Section>

      <Section id="about">
        {" "}
        <div className="about-me">
          <img src={logo} className="App-logo" alt="logo" />
          <p>FloJaNa's Awesome Website</p>
          <div className="icons">
            <a
              className="App-link"
              href="https://www.linkedin.com/in/flora-davies-2409/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size='lg'/>
            </a>
            <a
              className="App-link"
              href="https://github.com/TataSher"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} size='lg'/>
            </a>
            <a
              className="App-link"
              href="mailto:j.leighton.hooper@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} size='lg'/>
            </a>
            </div>
        </div>
      </Section>
      <Section id="Projects">My Projects</Section>
    </ScrollingProvider>
  );
}

export default App;
