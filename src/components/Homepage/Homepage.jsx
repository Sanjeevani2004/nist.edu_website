import React from 'react';
import './Homepage.css';
import ContactPage from '../ContactPage/ContactPage.jsx'
import { Link } from 'react-router-dom';
import ChooseSection from '../../components/Header/Header';
import StartCoursesImg from './nist.png';
import FaqAccordion from '../../components/ChooseSection/ChooseSection';

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>NIST University</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the<br />knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/courses">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
                    </Link>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className="py-5">
            <ChooseSection />
        </div>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>2024 start courses</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        <Link to="/courses">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={StartCoursesImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-5">
            <FaqAccordion />
            <br />
            <ContactPage />
        </div>
        
    </div>
  )
}

export default Home;