import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCards";
import Particle from "../Particle";

// 6th sem
import ai from "../../Assets/Education/ai.jpg";
import cn from "../../Assets/Education/cn.jpg";
import dlp from "../../Assets/Education/dlp.jpg";
import se from "../../Assets/Education/se.jpg";
import tbw from "../../Assets/Education/tbw.jpg";

// // 5th sem
// import db from "../../Assets/Education/db.png";
// import algo from "../../Assets/Education/algo.png";
// import gt from "../../Assets/Education/gt.png";
// import pdc from "../../Assets/Education/pdc.png";
// import sda from "../../Assets/Education/sda.png";

// // 4th sem
// import os from "../../Assets/Education/os.png";
// import toc from "../../Assets/Education/toc.png";
// import nc from "../../Assets/Education/nc.png";
// import prob from "../../Assets/Education/prob.png";
// import gm from "../../Assets/Education/gm.png";

// // 3rd sem
// import ds from "../../Assets/Education/ds.png";
// import discrete from "../../Assets/Education/discrete.png";
// import coal from "../../Assets/Education/coal.png";
// import la from "../../Assets/Education/la.png";
// import sociology from "../../Assets/Education/sociology.png";

// // 2nd sem
// import oop from "../../Assets/Education/oop.png";
// import dld from "../../Assets/Education/dld.png";
// import de from "../../Assets/Education/de.png";
// import pst from "../../Assets/Education/pst.png";
// import cps from "../../Assets/Education/cps.png";

// // 1st sem
// import ict from "../../Assets/Education/ict.png";
// import pf from "../../Assets/Education/pf.png";
// import ecc from "../../Assets/Education/ecc.png";
// import ap from "../../Assets/Education/ap.png";
// import isl from "../../Assets/Education/isl.png";
// import cal from "../../Assets/Education/cal.png";

// // Intermediate
// import maths from "../../Assets/Education/maths.png";
// import chem from "../../Assets/Education/chem.png";
// import phy from "../../Assets/Education/phy.png";
// import Interisl from "../../Assets/Education/Iisl.png";
// import Intereng from "../../Assets/Education/Ieng.png";
// import urdu from "../../Assets/Education/urdu.png";
// import Interpst from "../../Assets/Education/Ipst.png";

// // Secondary School
// import SchoolMath from "../../Assets/Education/SchoolMath.png";
// import SchoolPhy from "../../Assets/Education/SchoolPhy.png";
// import SchoolIsl from "../../Assets/Education/SchoolIsl.png";
// import SchoolEng from "../../Assets/Education/SchoolEng.png";
// import SchoolChem from "../../Assets/Education/SchoolChem.png";
// import SchoolUrdu from "../../Assets/Education/SchoolUrdu.png";
// import Schoolpst from "../../Assets/Education/Schoolpst.png";
// import SchoolComputer from "../../Assets/Education/SchoolComputer.png";
// import Sindhi from "../../Assets/Education/Sindhi.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Courses Studied Since  <strong className="purple">Grade 9 </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few courses I've studied recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <EducationCard
              imgPath={ai}
              isBlog={false}
              title="Artificial Intelligence"
              description="Artificial Intelligence is the study of how to build or program computers to enable them to do what minds can do. This course is concerned with the concepts and ideas which are behind the theory and practice of artificial intelligence. It will introduce the foundational concepts and methods of artificial intelligence, beginning with the discipline's foundations in philosophy and mathematics and culminating in Turing's test as a measure of intelligence. Major topics to be covered include: search, game playing, knowledge representation, logical inference, planning, reasoning under uncertainty, machine learning, and natural language processing."
            />
          </Col>

           <Col md={4} className="project-card">
            <EducationCard
              imgPath={dlp}
              isBlog={false}
              title="Deep Learning for Perception"
              description="This course is an introduction to deep learning methods and applications. It will emphasize the basics of deep learning and provide practical experience in building neural networks in TensorFlow. The course will cover deep learning applications in computer vision and natural language processing. The course will also cover the mathematical foundations of deep learning, including backpropagation and stochastic gradient descent, as well as several important deep learning architectures, including convolutional neural networks and recurrent neural networks."
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              imgPath={cn}
              isBlog={false}
              title="Computer Networks"
              description="This course is an introduction to the principles and practice of computer networks. Topics include: layered network architectures, applications, network programming interfaces, transport protocols, routing, congestion control, packet switching, local area networks, wireless networks, network security, and network management. The course will include a mix of lectures and programming assignments."             
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              imgPath={se}
              isBlog={false}
              title="Software Engineering"
              description="This course is an introduction to the principles and practice of software engineering. Topics include: software development methodologies, software requirements analysis, software design, software testing, and software project management. The course will include a mix of lectures and programming assignments."
            />
          </Col>

          <Col md={4} className="project-card">
            <EducationCard
              imgPath={tbw}
              isBlog={false}
              title="Technical and Business Writing"
              description="This course is an introduction to the principles and practice of technical and business writing. Topics include: writing for different audiences, writing for different purposes, writing for the web, writing for social media, writing for the workplace, and writing for the public. The course will include a mix of lectures and writing assignments."
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <EducationCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
