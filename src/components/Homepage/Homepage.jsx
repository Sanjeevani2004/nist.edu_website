import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import Img from './nist.png';
import Nba from './nba1.png';
import ContactPage from '../../components/ContactPage/ContactPage';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import BgVideo from '../../utils/IMG_7472.MOV';
import NVideo from './University.png';
//import Login from '../LoginPage/Login.page'
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <Container fluid className="d-flex flex-column align-items-center">
          <video
            src={BgVideo}
            autoPlay
            muted
            loop
            className="video-bg"
            style={{
              position: 'absolute',
              width: '100%',
              height: '102%',
              objectFit: 'cover',
              zIndex: -1,
              marginTop:'-100px',
            }}
          />
          <div className="bg-overlay"></div>
          <img src={NVideo} alt="nist logo" />
          
          <h1 className="text-center fw-semibold">We prepare diverse, talented and ambitious students to learn, <br /> lead and embody excellence in truth and service.</h1>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/course">
              <button
                type="button"
                className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Our Courses
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </Container>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>
            
      <div className="py-5 bg-black">
        <Container>
          <Row className="d-flex align-items-center justify-content-around">
            <Col lg={5}>
              <h2 className="text-capitalize text-white">2024 start courses</h2>
              <p className='text-white'>
              Our courses cover a wide range of topics, from business and technology to Bsc and personal development. Each course is crafted by industry experts and educators who are passionate about sharing their knowledge and expertise with you.
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0 text-white"
                >
                  Learn More
                </button>
              </Link>
            </Col>
            <Col lg={3} className="mt-5 mt-lg-0">
              <img src={Img} className="img-fluid" alt="" />
              <img src={Nba} className="img-fluid" alt="" />
            </Col>
            
          </Row>
        </Container>
      </div>

      <div className="py-5">
        <FaqAccordion />
        <br />
        <ContactPage />
      </div>
    </div>
  );
}

export default Home;