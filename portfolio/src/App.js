import './App.css';
import { useState, useEffect } from 'react';
import linkedin from './assets/imgs/linkedin.svg';
import github from './assets/imgs/github.svg';
import uitlogo_black from './assets/imgs/uit_logo_black.png';
import uitlogo_white from './assets/imgs/uit_logo_white.png';
import elkjoplogo from './assets/imgs/elkjop_logo.svg';
import tmlogo from './assets/imgs/tm_logo.jpg';
import pb from './assets/imgs/pb.jpg';
import emoji from "react-easy-emoji";
import en from './assets/locales/en.json';
import no from './assets/locales/no.json';
import common from './assets/locales/common.json';

function App() {

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('lang');
    return saved || 'en';
  });
  const [darkmode, setDarkmode] = useState(() => {
    const saved = localStorage.getItem('darkmode');
    return saved === 'true' || false;
  });

  const skills = common.skills;
  const languages = skills.languages;
  const frameworks = skills.frameworks;
  const tools = skills.tools;

  const content = language === 'en' ? en : no;

  const toggleLanguage = () => {
    const next = language === 'en' ? 'no' : 'en';
    setLanguage(next);
    localStorage.setItem('lang', next);
  };

  useEffect(() => {
    if (darkmode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkmode', 'true');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('darkmode', 'false');
    }
  }, [darkmode]);

  return (
    <div>
      <button className="button" onClick={toggleLanguage}>
          <svg className="control" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286zm1.634-.736L5.5 3.956h-.049l-.679 2.022z"/>
            <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm7.138 9.995q.289.451.63.846c-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6 6 0 0 1-.415-.492 2 2 0 0 1-.94.31"/>
          </svg>
      </button>

      <button className="button" onClick={() => setDarkmode(!darkmode)}>
        {darkmode ?
          <svg className="control" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"/>
          </svg>
          :
          <svg className="control" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
          </svg>
        }
      </button>
      <div className="welcome">
        <div className="intro">
          <div>
            <h1 className="greeting">Markus Leander Wilhelmsen</h1>
            <hr className="separator-small" />
            <div className="icon-container">
              {/* LINKEDIN SVG */}
              <a href="https://www.linkedin.com/in/markuswilhelmsen/">
                <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* GITHUB SVG */}
              <a href="https://github.com/markuslw">
                <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {/* CV PDF */}
              <a href="/cv_markuswilhelmsen.pdf" download>
                <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
                </svg>
              </a>
            </div>
            <div className="column">
              {/* PHONE SVG */}
              <a href="tel:+4741559061">
                <svg className="phone" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              </a>
              {/* MESSAGE SVG */}
              <a href="sms:+4741559061">
                <svg className="message" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
                </svg>
              </a>
              {/* PHONE NUMBER */}
              <p className="info text">+47 415 59 061</p>
            </div>
            <div className="column">
              {/* EMAIL SVG */}
              <a href="mailto:markuslw10@icloud.com">
                <svg className="email" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </a>
              {/* EMAIL ADDRESS */}
              <p className="info text">markuslw10@icloud.com</p>
            </div>
            <div className="column">
              {/* LOCATION SVG */}
              <a href="geo:69.6489, 18.95508">
                <svg className="location" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </a>
              {/* LOCATION */}
              <p className="info text">Tromsø, Norway</p>
            </div>
          </div>
          <img className="profile" src={pb} alt="Profile" />
        </div>

        {/* EDUCATION */}
        <h2 className="title">{content.education.title}</h2>
        <hr className="separator" />
        <div className="column">
          <img className="icon invertimg" src={uitlogo_black} alt="Logo" />
          <h3>{content.education.university}</h3>
        </div>
        <div className="indent">
          <div className="table">
            <p className="description">{content.education.masters}</p>
            <p className="right">2026</p>
          </div>
          <div className="table">
            <p className="description">{content.education.bachelors}</p>
            <p className="right">2024</p>
          </div>
        </div>

        <br />

        <h2 className="title">{content.experience.title}</h2>
        <hr className="separator" />

        {/* UIT */}
        <div className="column">
          <img className="icon invertimg" src={uitlogo_black} alt="Logo" />
          <h3>{content.experience.university.title}</h3>
        </div>
        <div className="indent">
          <div className="table">
            <p>{content.experience.university.position}</p>
            <p className="right">{content.experience.university.date_cs}</p>
          </div>
        </div>
        <div className="indent">
          <div className="table">
            <p>{content.experience.university.position}</p>
            <p className="right">{content.experience.university.date_pp}</p>
          </div>
        </div>
        <p className="indent-large text">
          {content.experience.university.description}
        </p>

        <br />

        {/* ELKJOP */}
        <div className="column">
          <img className="icon" src={elkjoplogo} alt="Logo" />
          <h3>{content.experience.elkjop.title}</h3>
        </div>
        <div className="indent">
          <div className="table">
            <p>{content.experience.elkjop.position}</p>
            <p className="right">{content.experience.elkjop.date}</p>
          </div>
        </div>
        <p className="indent-large text">
          {content.experience.elkjop.description}
        </p>

        <br />

        {/* TEKNIKMAGASINET */}
        <div className="column">
          <img className="icon icon-extras" src={tmlogo} alt="Logo" />
          <h3>{content.experience.teknikmagasinet.title}</h3>
        </div>
        <div className="indent">
          <div className="table">
            <p>{content.experience.teknikmagasinet.position}</p>
            <p className="right">{content.experience.teknikmagasinet.date}</p>
          </div>
        </div>
        <p className="indent-large text">
          {content.experience.teknikmagasinet.description}
        </p>
        
        <br />

        <h2 className="title">{content.projects.title}</h2>
        <hr className="separator" />
        <div className="table">
          <h3>{content.projects.procmon.title}</h3>
          <h3 className="right">{content.projects.procmon.date}</h3>
        </div>
        <p className="indent-large text">
          {content.projects.procmon.description}
        </p>

        <br />

        <div className="table">
          <h3>{content.projects.freelance.title}</h3>
          <h3 className="right">{content.projects.freelance.date}</h3>
        </div>
        <p className="indent-large text">
          {content.projects.freelance.description}
        </p>
        
        <br />

        <div className="table">
          <h3>{content.projects.bsc_thesis.title}</h3>
          <h3 className="right">{content.projects.bsc_thesis.date}</h3>
        </div>
        <p className="indent-large text">
          {content.projects.bsc_thesis.description}
        </p>

        <br />

        <h2 className="title">{skills.title}</h2>
        <hr className="separator" />
        
        <div className="column">
          <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
          </svg>
          <h3>{languages.title}</h3>
        </div>
        <div className="indent-large container">
          {Object.entries(languages).map(([key, list]) => {
            if (key === 'title') return null;

            return list.map(item => (
              <p key={item} className="text skillpoint">{item}</p>
            ));
          })}
        </div>
        <br />

        <div className="column">
          <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"/>
          </svg>
          <h3>{frameworks.title}</h3>
        </div>
        <div className="indent-large container">
          {Object.entries(frameworks).map(([key, list]) => {
            if (key === 'title') return null;
            
            return list.map(item => (
              <p key={item} className="text skillpoint">{item}</p>
            ));
          })}
        </div>
        <br />

        <div className="column">
          <svg className="icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
          </svg>
          <h3>{tools.title}</h3>
        </div>
        <div className="indent-large container">
          {Object.entries(tools).map(([key, list]) => {
            if (key === 'title') return null;
            
            return list.map(item => (
              <p key={item} className="text skillpoint">{item}</p>
            ));
          })}
        </div>
        <br />

      </div>
    </div>
  );
}

export default App;
