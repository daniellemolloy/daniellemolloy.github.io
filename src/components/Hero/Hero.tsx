import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Headshot from "../../assets/headshot.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'


export function Hero() {

  return (
    <Container id="home" > 
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000} animateOnce={true}>
          <h1>UI/UX Designer</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000} animateOnce={true}>
          <h3>Transforming business needs into stunning visuals</h3>
        </ScrollAnimation>
        <div className="hero-image">
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000} animateOnce={true}>
            <img src={Headshot} alt="Headshot"/>
          </ScrollAnimation>
        </div>
      </div>
      

    </Container>
  )
}