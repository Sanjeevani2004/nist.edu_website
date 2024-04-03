import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Homepage.css';

const Homepage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} className="text-center">
          <h1 className="display-4">Hi, I'm <span>Gourav</span></h1>
          <div className="text-animate">
            <h3>Frontend Developer</h3>
            <span className="animate" style={{ '--i': 3 }}></span>
          </div>
          <p>
            Passionate about crafting pixel-perfect user
            interfaces that captivate and engage users. With
            expertise in HTML5, CSS3, and JavaScript, I
            transform design concepts into responsive,
            interactive, and user-friendly web applications.
            <span className="animate" style={{ '--i': 4 }}></span>
          </p>
          <div className="btn-box">
            <a href="/Gourav resume.pdf" target="_blank" className="btn">
              Hire Me
            </a>
            <a href="#contact" className="btn">
              Let's Talk
            </a>
            <span className="animate" style={{ '--i': 5 }}></span>
          </div>
        </Col>
        <Col md={6} className="home-imgHover">
          <img
            src="pics/IMG_20230611_095030_537.jpg"
            alt=""
            className="img-fluid"
          />
          <span className="circle-spin"></span>
          <span className="animate" style={{ '--i': 6 }}></span>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;