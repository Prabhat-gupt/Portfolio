import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Photogram",
      description: "Photogram is a social media app on which user can share their photos and share to others.",
      imgUrl: projImg1,
    },
    {
      title: "Foody",
      description: "Foody is a food delivery app through which user can order food with any restaurant. ",
      imgUrl: projImg2,
    },
    {
      title: "Price Predictor",
      description: "Price predictor is AI based model which help us to predict the approximate value of any stock on the basis of previous price.",
      imgUrl: projImg3,
    },
    {
      title: "Techno Knowledge Center",
      description: "Techno Knowledge Center is coaching institute app through which any student can register for any courses.",
      imgUrl: projImg1,
    }, 
  ];

  const internship = [
    {
      title: "Frontend developer",
      description: "I have worked as a frontend developer in Code8 and during my internship, I have worked on React Js and Node Js with my team.",
      imgUrl: projImg1,
    }
  ];

  const working = [
    {
      title: "Shareable NotesApp",
      description: "The Shareable NotesApp is notes taking app which is building in Flutter and Firebase, using is this app any user can share their notes, blogs, schedule, with any other friend live.",
      imgUrl: projImg2,
    }
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Internship</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Working</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="rowResponsive">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row className="rowResponsive">
                          {
                            internship.map((internship,index) =>{
                              return(
                                <ProjectCard key={index}
                                {...internship}
                                />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row className="rowResponsive">
                        {
                          working.map((working,index)=>{
                            return (
                              <ProjectCard key={index}
                              {...working}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
