import { Header } from "./components/Header";
import { HeroArea } from "./components/HeroArea";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Activities } from "./components/Activities";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <HeroArea />
      <h1 id="about" className="title">
        About me
      </h1>
      {/* <p className="description">My experience and education</p> */}
      <div class="container">
        <h1>My Experience and Education</h1>
        <br></br>
        <p>
          I am an aspiring software engineer with a previous achievement record
          in the health care industry. I hold a BS in Computer Science from
          Lehman College CUNY and I am currently pursuing my MS in Software
          Development and Engineering with Pace University Seidenberg School of
          CSIS. During my undergraduate studies, I immersed myself in the best
          practices of software engineering and gained a wealth of skills. My
          studies, coupled with the multiple projects I have completed, have
          afforded me valuable exposure to the entire development life cycle. .
        </p>

        <p>
          In addition to software engineering, I have over seven years of
          experience in nursing. Through these experiences, I developed
          exceptional communication, organizational, and time management
          management skills. I am actively seeking an exciting opportunity where
          I can grow professionally
        </p>
      </div>
      <br></br>
      <br></br>
      <About />
      <h1 id="services" className="title">
        My services
      </h1>
      <p className="description">How can I help you</p>
      <Services />
      <h1 id="projects" className="title">
        Projects
      </h1>
      <p className="description">Highlights of my best work</p>
      <Projects />
      <h1 id="activities" className="title">
        Activities
      </h1>
      <p className="description">My interests and volunteering activities</p>
      <Activities />
      <h1 id="contact" className="title">
        Let's connect
      </h1>
      <p className="description">I'm available to work!</p>
      <Contacts />
      <Footer />
    </div>
  );
}
