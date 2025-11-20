import { Container } from "./styles";

export function About() {
  return (
    <Container id="about">
      <div className="background-wrapper">
        <div className="about-text">
          <h2>Hi, I'm Danielle. Nice to meet you.</h2>

          <p>
            I'm an Information Science student at Cornell University concentrating in User Experience (UX) 
            and minoring in Business. I’m passionate about designing intuitive, inclusive, 
            and visually engaging digital experiences that bridge the gap between people and technology.
          </p>

          <p>
            If you're looking to elevate your digital presence with a focus on clean, modern, and interactive designs, let's connect and 
            create something amazing together!
          </p>
        </div>
      </div>
      
      <div className="skills-wrapper">
        <div className="about-skills">
          <div className="column">
            <h3>UX / UI Design</h3>
            <p>
              I value clarity, accessibility, and intentional design that elevates user experiences.
              My work blends creativity with thoughtful interaction and research.
            </p>
            <h4>Focus Areas:</h4>
            <p>UX Research, Wireframing, Prototyping, UI Design, Web & Mobile Interfaces</p>
            <h4>Design Tools:</h4>
            <ul>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Procreate</li>
              <li>Canva</li>
              <li>Pen & Paper</li>
            </ul>
          </div>

          <div className="column">
            <h3>Frontend Development</h3>
            <p>
              I bring designs to life through clean, responsive, and interactive interfaces focused on usability.
            </p>
            <h4>Languages & Frameworks:</h4>
            <p>HTML, CSS, JavaScript, React</p>
            <h4>Tools:</h4>
            <ul>
              <li>Tailwind CSS</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="column">
            <h3>Other Areas</h3>
            <p>
              Beyond design and development, I have experience in digital marketing, data analysis, and creative storytelling.
            </p>
            <h4>Additional Skills:</h4>
            <ul>
              <li>Data Visualization and Analysis (Python, SQL, Pandas, Seaborn)</li>
              <li>Content Strategy & Brand Design</li>
              <li>Adobe Creative Cloud</li>
              <li>Marketing Research</li>
            </ul>
          </div>
        </div>
      </div>
      
    </Container>
  )
}
