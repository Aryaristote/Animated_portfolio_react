import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorsharp2 from '../assets/img/colorsharp2.png';
import projectimg1 from '../assets/img/projectimg1.png';
import projectimg2 from '../assets/img/projectimg2.png';
import projectimg3 from '../assets/img/projectimg3.png';


const Projects = () => {
    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projectimg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projectimg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectimg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectimg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectimg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projectimg1,
        },
    ];
    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem impedit soluta quisquam eveniet iste, consequuntur aliquid vel non perferendis accusantium reiciendis eos sunt consectetur voluptate culpa hic sed officia quos!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content align-item-center" id="pills-tab">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="third">Tab Tree</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
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
                                <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                            </ Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2} alt="logo" />
        </section>
    )
}
 
export default Projects;