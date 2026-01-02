import './App.css';
import linkedin from './assets/imgs/linkedin.svg';
import github from './assets/imgs/github.svg';
import uitlogo from './assets/imgs/uit_logo_black.png';
import elkjoplogo from './assets/imgs/elkjop_logo.svg';
import emoji from "react-easy-emoji";

function App() {
  return (
    <div className="welcome">
      <h1 className="greeting">Markus Leander Wilhelmsen</h1>
      <hr className="separator" />
      <a className="no-style" href="https://www.linkedin.com/in/markuswilhelmsen/">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a className="no-style" href="https://github.com/markuslw">
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      </a>
      <a className="no-style" href="/cv_markuswilhelmsen.pdf" download>
        <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"/>
        </svg>
      </a>
      <br /> <br />
      
      <div className="column">
        <a href="tel:+11234567890">
          <svg className="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
        </a>
        <a href="sms:+4741559061" className="no-style">
          <svg className="message" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15"/>
          </svg>
        </a>
        <p className="info text">+47 415 59 061</p>
      </div>

      <div className="column">
        <a href="mailto:yourname@email.com" className="no-style">
          <svg className="phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
          </svg>
        </a>
        <p className="info text">markuslw10@icloud.com</p>
      </div>

      <br />
      <h2>Education</h2>
      <hr className="separator" />
      <div className="column">
        <img className="icon" src={uitlogo} alt="Logo" />
        <h3>UiT Norges Arktiske Universitet</h3>
      </div>
      <div className="indent">
        <div className="table">
          <p>Master's degree in Computer Science</p>
          <p className="right">2026</p>
        </div>
        <div className="table">
          <p>Bachelor's degree in Computer Science</p>
          <p className="right">2024</p>
        </div>
      </div>
      <br />

      <h2>Professional Experience</h2>
      <hr className="separator" />
      <div className="column">
        <img className="icon" src={uitlogo} alt="Logo" />
        <h3>UiT Norges Arktiske Universitet</h3>
      </div>
      <div className="indent">
        <div className="table">
          <p>Scientific Assistant</p>
          <p className="right">Fall 2026</p>
        </div>
      </div>
      <div className="indent">
        <div className="table">
          <p>Scientific Assistant</p>
          <p className="right">Autumn 2025</p>
        </div>
      </div>
      <p className="indent-large text">
        Previously assisted lecturers on Computer Science course Parallel
        Programming and assisting on upcoming course Computer Security
        for the ’26 Fall semester. My work focused on guiding students,
        hosting colloquiums, and grading assignments.
      </p>
      <br />

      <div className="column">
        <img className="icon" src={elkjoplogo} alt="Logo" />
        <h3>Elkjøp Nordic</h3>
      </div>
      <div className="indent">
        <div className="table">
          <p>Salesperson</p>
          <p className="right">2024</p>
        </div>
      </div>
      <p className="indent-large text">
        Currently working as a salesperson at the Phonehouse branch of Elkjøp
        Nordic. My responsibilities involved analyzing customer needs and
        providing recommendations for various products such as mobile phones,
        cellular plans, insurance, and payment plans.
      </p>
      <br />

      <h2>Projects and extracurricular</h2>
      <hr className="separator" />
      <h3>Process Monitor Autumn 2025</h3>
      <p className="indent-large text">
        To benchmark various solutions developed during my master’s degree,
        I created a C program that displays and logs a user-specified process
        with user-specified variables.
      </p>
      <br />

      <h3>Freelance Developer Summer 2024</h3>
      <p className="indent-large text">
        As a full-stack developer, I designed and developed the front-end
        and back-end of a web application using the Model-View-Controller
        architecture in C# with the .NET framework.
      </p>
      <br />

      <h3>Bachelor's Thesis Fall 2024</h3>
      <p className="indent-large text">
        For a project exam, my team adopted the agile method SCRUM.
        Through sprints, we developed a web application that serves
        as a social platform, enabling token-based user authentication
        and authorization, database encryption, account creation,
        and media sharing.
      </p>

    </div>
  );
}

export default App;
