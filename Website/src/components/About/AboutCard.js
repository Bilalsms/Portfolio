import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Muhammad Bilal </span>
            from <span className="purple"> Karachi, Pakistan.</span>
            <br />
            I am currently a final year student enrolled in Bachelor's of Computer Science.

            {/* <br />
            DevOps Siuuu
            <br /> */}
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games, CS2 in particular
            </li>
            <li className="about-activity">
              <ImPointRight /> PC and Cars stuff
            </li>
            <li className="about-activity">
              <ImPointRight /> Cricket and Football fan
            </li>
            <li className="about-activity">
              <ImPointRight /> Virtual Travelling because no money 😔
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "What is science? Science is the man.  A Man can do everything."{" "}
          </p>
          <footer className="blockquote-footer">Saeed Ajmal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
