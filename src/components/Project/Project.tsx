import { Container } from "./styles";
import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";
import SueAppLogo from "../../assets/sueapp-200x200.png"
import dsiLogo from "../../assets/dsi-logo.png"
import ProsperOnLogo from "../../assets/ProsperOn logo.png"
import BUSAALogo from "../../assets/BUSAA-logo.png"
import d3jsLogo from "../../assets/d3js.png"
import docketLogo from "../../assets/docket-logo.png"
import WebkinzLogo from "../../assets/webkinz.png"
import SueApp1 from "../../assets/sueapp-redesign-1.png"
import SueApp2 from "../../assets/sueapp-redesign-2.png"
import SueApp3 from "../../assets/sueapp-redesign-3.png"
import dsiScreenshot from "../../assets/dsiScreenshot.png"
import docket1 from "../../assets/docket-designs1.png"
import docket2 from "../../assets/docket-designs2.png"

import { NavHashLink, HashLink } from 'react-router-hash-link'
import Modal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";

export function Project() {

  const [modals, setModals] = React.useState({
    sueappModal: false,
    dsiModal: false,
    docketModal: false,
  });

  const handleOpen = (modalName: string) => {
    setModals((prevState) => ({ ...prevState, [modalName]: true }));
  };

  const handleClose = (modalName: string) => {
    setModals((prevState) => ({ ...prevState, [modalName]: false }));
  };

  return (
    <Container id="projects">

      <h2>My Recent Work</h2>
      <h3>Here are a few past projects I've worked on. Want to see more?
        <NavHashLink smooth to="#contact">
          &nbsp;Email me.
        </NavHashLink>
      </h3>

      {/* Modals */}
      <Modal isOpen={modals.sueappModal} handleClose={() => handleClose('sueappModal')} >
        <div id="sueapp-modal">
          <h4 className="modal-header">SueApp webpage redesign</h4>
          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={SueApp1} alt="design layout first page" />
              <p>
                Layout designed to include all relevant information for the user. By default, most user's would want their papers to be served for them
                for a small fee, so this screen is shown first. However, if they are sure that they would like to serve the papers themselves, they can
                click the white button. It is white and less attractive to not be clicked unintentionally.
              </p>
            </div>
            <div className="carousel-item">
              <img src={SueApp2} alt="modal design" />
              <p>
                Created a modal for a clean and easy form that doesn't feel too disconnected from the page while separate enough that it feels like
                a separate element from the previous workflow.
              </p>
            </div>
            <div className="carousel-item">
              <img src={SueApp3} alt="design layout second page" />
              <p>
                This page is shown when the user selects the white button from the first page, and includes the necessary information to warn the user
                of the choice they are making so they can accept the consequences of serving the papers on their own. The "I changed my mind" button
                is blue to be more attractive and take users back to the first page where most would likely want to be.
              </p>
            </div>

          </Carousel>

        </div>
      </Modal>

      <Modal isOpen={modals.dsiModal} handleClose={() => handleClose('dsiModal')} >
        <div id="sueapp-modal">
          <h4 className="modal-header">Data Science Internship Machine Learning Project</h4>
          <div className="carousel-item">
            <img src={dsiScreenshot} alt="screenshot of interactive web app" />
            <p>
              For the Brandeis Office of Research Administration, I created a tool to help predict the likelihood of a research
              proposal receiving funding using machine learning. I also created a web app to allow interaction with the model.
            </p>
          </div>

        </div>
      </Modal>

      <Modal isOpen={modals.docketModal} handleClose={() => handleClose('docketModal')} >
        <div id="sueapp-modal">
          <h4 className="modal-header">Docket App Designs</h4>
          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={docket1} alt="docket app designs" />
              <p>
                The design layout for this app features a familiar layout to users, pleasing colors, and bubbly icons signifying a friendly and social
                platform. Users have access to all the information they would need to attend an event such as reading reviews and ratings from those already
                attending. It also features an event creation functionality to allow users to create their own events or mark other events taking place.
              </p>
            </div>
            <div className="carousel-item">
              <img src={docket2} alt="avatar customization" />
              <p>
                The profile page features a customizable avatar, and other gamified elements to drive user interactions.
              </p>
            </div>
          </Carousel>

        </div>
      </Modal>

      <div className="all-projects">

        <div className="project" id="ProsperOn">
          <img src={ProsperOnLogo} alt="ProsperOn Logo" />
          <div className="figure-text">
            <h3 className="title">
              Lead Frontend Developer for a small fintech startup for financial literacy
            </h3>
            <a href="https://www.prosperon.io/" target="_blank" rel="noreferrer" className="button">Go to Website</a>
          </div>
        </div>

        <div className="project" id="docket">
          <img src={docketLogo} alt="Docket Logo" />
          <div className="figure-text">
            <h3 className="title">
              Designed a gamified event finding socialization app for an HCI course
            </h3>
            <button onClick={() => { handleOpen('docketModal') }} className="button">More Details</button>
          </div>
        </div>

        <div className="project" id="sueapp">
          <img src={SueAppLogo} alt="Sue App Logo" />
          <div className="figure-text">
            <h3 className="title">
              Web page layout redesigns and functionality for a legal-tech start-up
            </h3>
            <button onClick={() => { handleOpen('sueappModal') }} className="button">More Details</button>
          </div>
        </div>

        <div className="project" id="dsi">
          <img src={dsiLogo} alt="DSI Logo" />
          <div className="figure-text">
            <h3 className="title">
              Machine Learning and data analytics internship project with an interactive Frontend
            </h3>
            <button onClick={() => { handleOpen('dsiModal') }} className="button">More Details</button>
          </div>
        </div>

        

        <div className="project" id="DataVis">
          <img src={d3jsLogo} alt="Data visualizations with d3.js" />
          <div className="figure-text">
            <h3 className="title">
              Led a school project team creating interactive data visualizations with d3.js
            </h3>
            <a href="https://github.com/COSI116A-Brandeis-InfoVis-Fall23/cosi-116a-final-project-code-undergraduate-1" target="_blank" rel="noreferrer" className="button">Go to Repository</a>
          </div>
        </div>

        <div className="project" id="Webkinz">
          <img src={WebkinzLogo} alt="Webkinz Word Finder" />
          <div className="figure-text">
            <h3 className="title">
              Personal Project: A fully automated solution to a word game in Webkinz using image processing
            </h3>
            <a href="https://github.com/noammolloy/webkinz-auto-eager-beaver" target="_blank" rel="noreferrer" className="button">Go to Repository</a>
          </div>
        </div>






      </div>
    </Container>
  );
}