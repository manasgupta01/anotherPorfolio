import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
				<Col md={8} className="home-about-description">
  <h1 style={{ fontSize: "2.6em" }}>
    LET ME <span className="purple"> INTRODUCE </span> MYSELF
  </h1>
  <p className="home-about-body">
    Hello there, I'm <b className="purple">Pavit Singh Narang</b>, a full-time <b className="purple">Roboticist</b> with a background in <b className="purple">Electronics and Communication</b>. Whether for work or for leisure, I enjoy exploring <b className="purple">ideas</b> that enhance people's lives and broaden the realm of possibilities. I'm a <b className="purple">sports aficionado</b> and love to explore nature. Currently, I'm pursuing <b className="purple">B.Tech in Electronics and Communication</b> from <b className="purple">Acropolis Institute of Technology and Research</b>. I've acquired <b className="purple">project and time management skills</b>, as well as the ability to <b className="purple">communicate</b> with teams and clients while effectively meeting <b className="purple">milestones and deadlines</b> during my graduation period. After my first year of graduation, I decided to explore the field of <b className="purple">robotics</b> and started making small approaches to fulfill my goal by working on various <b className="purple">projects</b>. I've been learning about <b className="purple">Robotics and Machine Learning</b>. Most recently, I've had the pleasure of developing <b className="purple">humanoid robots</b>, and now, I am once again set loose upon the world in search of the <b className="purple">next challenge</b>.
  </p>
</Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/PAVIT0512"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/pavit-singh-narang-08b64620a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
