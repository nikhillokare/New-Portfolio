import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Creating A Image Prompts",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Teaching A Prompt Engineering",
      description: "Teaching & Learning",
      imgUrl: projImg2,
    },
    {
      title: "Creating A Text Prompts",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  const project = [
    {
      title: "Creating An AI Avator Videos",
      description: "Video & Editing",
      imgUrl: projImg5,
    },
    {
      title: "Creating Single Page Web Apps",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Teaching A Image Prompt Mastery And Online Sell",
      description: "Crafting & Sell Images",
      imgUrl: projImg6,
    },
  ];
  const project1 = [
    {
      title: "GPT Audio Web APP",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Youtube Clone Using ReactJS",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "Goldes GYM",
      description: "Design & Development",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Services And Projects</h2>
                  <p>
                    Welcome to my Fiverr profile! I offer a variety of AI
                    services, from generating image and text prompts to teaching
                    prompt engineering, creating AI-powered web applications,
                    crafting AI avatar videos, and providing AI voice
                    generation. Let's collaborate to bring your ideas to life.
                    Contact me today to get started!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Service 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Service 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {project1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
