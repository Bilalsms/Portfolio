import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificationCard from "./CertificationCards";
import Particle from "../Particle";
import tenP from "../../Assets/Certifications/tenP.jpg";
import dlp from "../../Assets/Certifications/Neural Networks and Deep Learning.png";

function Projects() {
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent  <strong className="purple">Certifications </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are my recent certifications.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={9} className="project-card">
              <CertificationCard
                imgPath={tenP}
                title="DevOps Effeciency Workshop by 10 Pearls"
                description="This workshop was conducted by 10 Pearls and it was a 2 day workshop. In this workshop we were taught about the DevOps and how it is used in the industry. We were also taught about the tools used in DevOps like Jenkins, Docker, Kubernetes, etc. We were also given a task to create a pipeline using Jenkins and Docker. And we were also given a task to create a Kubernetes cluster and deploy a sample application on it."
              />
            </Col>
  
            <Col md={9} className="project-card">
              <CertificationCard
                imgPath={dlp}
                title="Neural Networks and Deep Learning"
                description="This course is an introduction to the principles and practice of neural networks and deep learning. Topics include: neural network architectures, backpropagation, gradient descent, regularization, convolutional neural networks, recurrent neural networks, and deep learning frameworks. The course will include a mix of lectures and programming assignments."
              />
            </Col>
  
          </Row>
        </Container>
      </Container>
    );
  }
  
  export default Projects;