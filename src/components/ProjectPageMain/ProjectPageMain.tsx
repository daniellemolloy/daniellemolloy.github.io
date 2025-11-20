import { Container } from "./styles"
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import SueAppLogo from "../../assets/sueapp-200x200.png"
import BUSAALogo from "../../assets/BUSAA-logo.png"
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'

export function ProjectPageMain() {

  return (
    <Container id="project-page">
      <div className="all-projects">

        <div className="project">
          <img src={SueAppLogo} alt="Sue App Logo" />
          <div className="figure-text">
            <h3 className="title">
              Web page layouts and designs for a legal-tech start-up 
            </h3>
            <button> button</button>
          </div>
        </div>

        <div className="project" id="BUSAA">
          <img src={BUSAALogo} alt="Brandeis Students and Alumni Association Logo" />
          <div className="figure-text">
            <h3 className="title">
              The Front and Back-end to a mock-up website for a Web dev course 
            </h3>
            <button> button</button>
          </div>
        </div>

        <div className="project">
          
          <div className="body">
            <h3>Credit Risk Analysis Project</h3>
            <p>
              Developed a highly accurate credit risk classification model using XGBoost, achieving 100% precision, recall, and F1-scores for predicting loan defaults.Implemented rigorous data preprocessing, feature engineering, and hyperparameter tuning on imbalanced credit risk data, employing ensemble methods, cross-validation, and model interpretation techniques.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>XGBoost</li>
              <li>Pandas</li>
              <li>Matplotlib</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <div className="body">
            <h3>MediBook: Medical Appointment Scheduler with Health History</h3>
            <p>Developed a secure medical appointment management platform with CRUD functionality, utilizing role-based access control, encryption techniques, and a robust MySQL database with normalized schema design and stored procedures for efficient scheduling, data privacy, and reliable retrieval of patient records.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MySQL</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <div className="body">
            <h3>Real-Time Hand Gesture-Driven 3D Object Manipulation</h3>
            <p>Developed a real-time hand gesture recognition system for intuitive 3D object manipulation. Leveraged a multimodal approach integrating OpenCV for video processing, MediaPipe for hand detection/landmark extraction, and scikit-learn for machine learning model training. Achieved 95.2% accuracy in hand gesture classification with efficient real-time performance.</p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>OpenCV</li>
              <li>MediaPipe</li>
              <li>scikit-learn</li>
            </ul>
          </footer>
        </div>

        <div className="project">
          <div className="body">
            <h3>VeloCityAI</h3>
            <p>
              VelocityAI is a website that allows users to get instant answers to any question and generate stunning AI pictures using OpenAI's GPT-3 and DALL-E model.With VelocityAI, users can type in text-based prompts and receive a corresponding response.
            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>React</li>
              <li>Typescript</li>
              <li>Html</li>
              <li>css</li>
            </ul>
          </footer>
        </div>


      </div>
    
    </Container>
  );
}