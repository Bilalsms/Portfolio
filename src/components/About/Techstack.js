import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiMysql,
  SiOracle,
  SiC,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiAmazonaws,
  SiMicrosoftazure,
  SiNginx,
  SiApache
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import { LiaDocker } from "react-icons/lia";
import { DiDocker } from "react-icons/di";



function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* DEVOPS TOOLS */}

      <Col xs={4} md={2} className="tech-icons">
      <DiDocker />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
      <SiKubernetes />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiTerraform />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiJenkins />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiGrafana />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiPrometheus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiAmazonaws />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftazure />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiNginx />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiApache />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      
      
      

      {/* PROGRAMMING/SCRIPTING LANGUAGES  */}

      <Col xs={4} md={2} className="tech-icons">
        <SiC/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col> */}



      {/* FRAMEWORKS */}

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col> */}


      {/* DATABASES */}


      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col> */}
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>



      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
