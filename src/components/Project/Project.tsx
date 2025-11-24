import { Container } from "./styles";
import React from 'react'
import ScrollAnimation from "react-animate-on-scroll";

import AppleFestLogo from "../../assets/applefestlogo.png"
import AppleFest1 from "../../assets/apple-fest1.png"
import AppleFest2 from "../../assets/apple-fest2.png"
import AppleFest3 from "../../assets/apple-fest3.jpg"
import AmazonLogo from "../../assets/amazonLogo.png"
import AmazonBefore1 from "../../assets/amazon-before.png";
import AmazonAfter1 from "../../assets/amazon-after.png";
import AiroboticsLogo from "../../assets/airobotics-logo.jpg"
import Airobotics1 from "../../assets/airobotics1.png";
import Airobotics2 from "../../assets/airobotics2.png";
import Airobotics3 from "../../assets/airobotics3.png";
import Airobotics4 from "../../assets/airobotics4.png";
import ByramLogo from "../../assets/bblogo.png";
import Byram1 from "../../assets/bbslide.png";
import Byram2 from "../../assets/bbslide2.png";
import EventsLogo from "../../assets/events-logo.png";
import Events1 from "../../assets/CommunityEventsSC.png";
import Events2 from "../../assets/CommunityEventsModal.png";
import NotionLogo from "../../assets/notion-logo.png"
import Notion1 from "../../assets/notion-dashboard.png"
import Notion2 from "../../assets/notion-calendar-view.png"
import Notion3 from "../../assets/notion-course-page.png"

import { NavHashLink, HashLink } from 'react-router-hash-link'
import Modal from "../Modal/Modal";
import Carousel from "../Carousel/Carousel";

export function Project() {

  const [modals, setModals] = React.useState({
    appleFestModal: false,
    amazonModal: false,
    notionModal: false,
    airoboticsModal: false,
    byramModal: false,
    eventsModal: false,
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
      <Modal isOpen={modals.notionModal} handleClose={() => handleClose('notionModal')} >
        <div id="notion-modal">
          <h4 className="modal-header">Student Productivity Dashboard</h4>
          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={Notion1} alt="dashboard design layout" />
              <p>
                This dashboard is the central hub I use to organize my entire semester. 
                I designed it to bring together weekly recurring tasks, daily to-dos, my class schedule, and quick access 
                to all of my course pages in a single, intuitive layout. 
                By structuring the page so that the most time-sensitive information appears first, 
                the dashboard helps me focus immediately on what needs attention each day. 
                The clean spacing, consistent formatting, and simple visual hierarchy reduce cognitive load and 
                make the experience feel calm rather than overwhelming. Integrations like a Pomodoro timer and focus 
                playlist add an element of productivity support that keeps everything I need in one place
              </p>
            </div>
            <div className="carousel-item">
              <img src={Notion2} alt="assignment schedule calendar view" />
              <p>
                The assignment calendar gives me a complete, visual overview of all upcoming deadlines 
                and exams across my semester. Each item appears both in the calendar view and in the linked table, 
                which I can filter by course or by status. This means I can choose to view only the assignments I 
                haven’t started yet, or narrow things down to a single class when I want to focus. These filtering 
                tools transform the calendar from a simple date grid into a personalized planning system that helps 
                me avoid surprises, manage my workload strategically, and stay ahead throughout the semester.
              </p>
            </div>
            <div className="carousel-item">
              <img src={Notion3} alt="course page design layout" />
              <p>
                Each course page follows a standardized template that keeps everything organized and easy to navigate. 
                The top section highlights key information like the course description, meeting times, and important 
                external links. Below that, I created a structured space for assignments, readings, lecture notes, and 
                study materials. This consistent layout means I don’t need to re-orient myself every time I switch between 
                courses, which makes studying more efficient and reduces friction during busy weeks. The design balances 
                clarity and spaciousness so that even dense academic content feels approachable.
              </p>
            </div>

          </Carousel>

        </div>
      </Modal>

      <Modal isOpen={modals.airoboticsModal} handleClose={() => handleClose('airoboticsModal')} >
        <div id="airobotics-modal">
          <h4 className="modal-header">Internship Photoshop Projects</h4>
          <Carousel shadow={false}>
          <div className="carousel-item">
            <img src={Airobotics1} alt="construction site with photoshopped drone" />
            <p>
              Photoshopped image created for the Optimus Drone System to translate complex concepts into clear, client-ready images.
              The goal was to visually communicate how autonomous drones can be deployed in construction site surveillance and monitoring.
            </p>
          </div>
          <div className="carousel-item">
            <img src={Airobotics2} alt="army car in field" />
            <p>
              Visual asset designed in Photoshop to illustrate drone applications in defensive military contexts.
            </p>
          </div>
          <div className="carousel-item">
            <img src={Airobotics4} alt="hostile and defensive drones on ship" />
            <p>
              Image designed to depict drone defense mechanisms in naval operations.
            </p>
          </div>
          <div className="carousel-item">
            <img src={Airobotics3} alt="army car in at fence" />
            <p>
              Photoshopped image created to showcase drone surveillance capabilities for military use cases.
            </p>
          </div>
          </Carousel>
        </div>
      </Modal>


      <Modal isOpen={modals.appleFestModal} handleClose={() => handleClose('appleFestModal')} >
        <div id="applefest-modal">
          <h4 className="modal-header">Website Design and Development</h4>
          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={AppleFest1} alt="Apple Harvest Festival – Homepage Creation" />
              <p>
                I designed and coded a fully functional homepage for the Ithaca Apple Harvest Festival
                using HTML, CSS, and JavaScript for an web design and development class at Cornell. Before 
                writing any code, I conducted user interviews to understand what information visitors look 
                for first, what confuses them about event websites, and how they prefer to navigate festival content.
                I also researched best practices for event website design and analyzed competitor sites to identify common patterns.

                Based on these insights, I structured the homepage around the most frequently needed 
                information: event dates, location, featured attractions, and a clear introduction to what 
                the festival offers. The layout is intentionally simple and welcoming, incorporating large 
                imagery, clean typography, and clear calls to action. My goal was to create a homepage that 
                feels festive and engaging while making it effortless for users to get oriented and start 
                planning their visit.
              </p>
            </div>
            <div className="carousel-item">
              <img src={AppleFest2} alt="Attractions Page" />
              <p>
                The attractions page was built to give users a quick, enjoyable way to browse what the festival 
                has to offer, including vendors, live music, family activities, and more. Through user interviews, 
                I learned that visitors want to skim options quickly and dig deeper only when something catches their 
                interest.

                To support this behavior, I organized attractions into visually distinct sections with short 
                descriptions and images, allowing users to quickly scan categories. Each section expands into 
                more information using simple JavaScript interactions, keeping the page clean while still informative. 
                The design supports both planners, who want to read everything, and casual visitors, who only want a 
                high-level overview.
              </p>
            </div>
            <div className="carousel-item">
              <img src={AppleFest3} alt="Site Map & Post-It Note Planning" />
              <p>
                Before coding the site, I created multiple rounds of site maps using Post-Its to experiment 
                with information hierarchy. I tested different structures for organizing content—grouping by type of 
                activity, by audience needs, and by navigation depth—to see what would feel most intuitive based on the 
                interview insights.

                These physical Post-It iterations allowed me to quickly rearrange, remove, and add pages to explore 
                different user flows. The final sitemap emphasizes clarity and simplicity: users can easily access 
                essential pages such as the homepage, attractions, and directions without getting lost in unnecessary 
                layers. This planning process grounded the final website in thoughtful information architecture rather 
                than aesthetics alone.
              </p>
            </div>
          </Carousel>

        </div>
      </Modal>


      <Modal
        isOpen={modals.amazonModal}
        handleClose={() => handleClose('amazonModal')}
      >
        <div id="amazon-modal">
          <h4 className="modal-header">Amazon Home Screen Redesign</h4>

          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={AmazonBefore1} alt="Amazon original home screen" />
              <p>
                The Amazon home screen suffers from information overload, low contrast
                text, and competing calls to action that make navigation difficult and
                overwhelming for users.
              </p>
            </div>
            <div className="carousel-item">
              <img src={AmazonAfter1} alt="Redesigned Amazon home screen" />
              <p>
                Redesigned home screen featuring a cleaner information hierarchy,
                improved spacing, and simplified navigation for faster scanning and
                easier decision making. Accessibility-focused improvements including WCAG-compliant contrast
                ratios, enlarged touch targets, a streamlined color palette, and a
                clear typographic scale. The new design reduces cognitive load, simplifies
                visuals, and enhances overall readability for users.
              </p>
            </div>
          </Carousel>
        </div>
      </Modal>

      <Modal
        isOpen={modals.byramModal}
        handleClose={() => handleClose('byramModal')}
      >
        <div id="byram-modal">
          <h4 className="modal-header">Social Media Graphic Design</h4>

          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={Byram1} alt="Social Media Ad" />
              <p>
                I designed this social media advertisement for Byram Babysitters, a small, local babysitting business,
                to promote their babysitting services. My goal was to create visually engaging graphics for Instagram 
                and Facebook that clearly communicate the service offerings while appealing to parents looking for 
                reliable childcare. I used bright colors, friendly imagery, and clear typography to make the ads stand 
                out in social media feeds. 
              </p>
            </div>
            <div className="carousel-item">
              <img src={Byram2} alt="Social Media Ad" />
              <p>
                This graphic was designed to recruit new babysitters to join the Byram Babysitters team.
                The design focuses on conveying a sense of community, trust, and fun to attract responsible 
                and enthusiastic individuals. I made the graphic very straitforward with relaxing colors and inviting text 
                to create an appealing visual that encourages potential babysitters to apply.
              </p>
            </div>
          </Carousel>
        </div>
      </Modal>

      <Modal
        isOpen={modals.eventsModal}
        handleClose={() => handleClose('eventsModal')}
      >
        <div id="events-modal">
          <h4 className="modal-header">Website With Filtering Functionality</h4>

          <Carousel shadow={false}>
            <div className="carousel-item">
              <img src={Events1} alt="Community Events Home Screen" />
              <p>
                I designed this community events website to help users easily discover local events based on their interests,
                location, and date. The site features intuitive filtering functionality that allows users to quickly narrow down
                event listings according to categories such as music, arts, sports, family-friendly activities, and more. 
                Each event listing includes essential details, imagery, and clear calls to action for registration or more information.
                By implementing clear filter options and a clean layout, the website enhances user experience and makes event 
                exploration simple and enjoyable.
              </p>
            </div>
            <div className="carousel-item">
              <img src={Events2} alt="Community Events Modal" />
              <p>
                The event detail modal provides users with an in-depth view of each event without navigating away from the main listings page.
                When a user clicks on an event, a modal window appears displaying a detailed event description, imagery, and date.
                This design choice keeps users engaged by allowing them to quickly return to browsing other events after viewing details. 
              </p>
            </div>
          </Carousel>
        </div>
      </Modal>






      <div className="all-projects">

        <div className="project" id="Amazon">
          <img src={AmazonLogo} alt="Amazon Logo" />
          <div className="figure-text">
            <h3 className="title">
              Personal Project: Redesigning Amazon's Home Page for Better User Experience
            </h3>
              <button
                onClick={() => handleOpen('amazonModal')}
                className="button">
                More Details
              </button>
          </div>
        </div>


        <div className="project" id="applefest">
          <img src={AppleFestLogo} alt="Apple Fest Logo" />
          <div className="figure-text">
            <h3 className="title">
              Designed and developed a user-informed festival website for a web design class.
            </h3>
            <button onClick={() => { handleOpen('appleFestModal') }} className="button">More Details</button>
          </div>
        </div>


        <div className="project" id="notion">
          <img src={NotionLogo} alt="Notion Logo" />
          <div className="figure-text">
            <h3 className="title">
              Personal Project: Notion Student Dashboard
            </h3>
            <button onClick={() => { handleOpen('notionModal') }} className="button">More Details</button>
          </div>
        </div>


        <div className="project" id="airobotics">
          <img src={AiroboticsLogo} alt="Airobotics Logo" />
          <div className="figure-text">
            <h3 className="title">
              Photoshopped concept visualizations for autonomous drone deployment for a graphic design internship
            </h3>
            <button onClick={() => { handleOpen('airoboticsModal') }} className="button">More Details</button>
          </div>
        </div>

        

        <div className="project" id="byram">
          <img src={ByramLogo} alt="Byram Babysitters Logo" />
          <div className="figure-text">
            <h3 className="title">
              Social Media Ad Designs for Byram Babysitters
            </h3>
          <button onClick={() => { handleOpen('byramModal') }} className="button">More Details</button>
          </div>
        </div>


        <div className="project" id="events">
          <img src={EventsLogo} alt="Community Events Website" />
          <div className="figure-text">
            <h3 className="title">
              Community Events Website Design Project with Filtering Functionality
            </h3>
            <button onClick={() => { handleOpen('eventsModal') }} className="button">More Details</button>          </div>
        </div>






      </div>
    </Container>
  );
}