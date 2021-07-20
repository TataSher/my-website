import React from "react";
import logo from "./logo.svg";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
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
          <a
            className="App-link"
            href="mailto:j.leighton.hooper@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </Section>
      <Section id="about">
        {" "}
        <div className="about-me">
          <img src={logo} className="App-logo" alt="logo" />
          <p>FloJaNa's Awesome Website</p>
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
          <a
            className="App-link"
            href="mailto:j.leighton.hooper@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </Section>
      <Section id="Projects">My Projects</Section>
    </ScrollingProvider>
  );
}

export default App;
