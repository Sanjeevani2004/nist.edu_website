import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import AnimatedPage from '../animation.jsx';
import AboutUsSectionImg from '../../Assets/tifac.jpg';
import ChooseSection from '../ChooseSection/ChooseSection.jsx';
import Person1 from '../../utils/images/LHC.png';
import Person2 from '../../utils/images/atr.png';
import Person3 from '../../utils/images/Gallleria.png';
import Person4 from '../../utils/images/core.png';
import Person5 from '../../utils/images/octagon.png';
import Person6 from '../../utils/images/tifac.png';
import Person7 from '../../utils/images/b1.png';
import Person8 from '../../utils/images/Ghostel.png';
import Person9 from '../../utils/images/Bhostel.png';

const persons = [
    {
        id: "LHC",
        img: Person1
    },
    {
        id: "ATRIUM",
        img: Person2
    },
    {
        id: "GALLERIA",
        img: Person3
    },
    {
        id: "CORE",
        img: Person4
    },
    {
        id: "OCTAGON",
        img: Person5
    },
    {
        id: "TIFAC",
        img: Person6
    },
    {
        id: "BOYS HOSTEL 2",
        img: Person7
    },
    {
        id: "GIRLS HOSTEL",
        img: Person8
    },
    {
        id: "BOYS HOSTEL 1",
        img: Person9
    },
];


function About() {
    return (
        <AnimatedPage>
      <div className='about-page'>
          <header className='height-75'>
              <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                  <h1 className='text-center fw-semibold'>About Us</h1>
                  <p className='text-center w-75 mb-5'>The life at NIST is a time when you can decide your career. Life at college is a wild mish-mash of experiences, it’s a time of dreams and innumerable paths. Every nook and corner of the college you’d find a peaceful spot full of natural surroundings.</p>
              </div>
          </header>
  
          <div className='container my-5'>
              <div className="row">
                  <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                      <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                      <p>NIST has always been a much-favoured talent hunting ground for the corporate world as it delivers industry-ready students. NIST has produced thousands of professionals in various disciplines, including engineering, science, and management. Over 16000 NIST alumni today contribute in technology, leadership, management, and public and social services around the globe.
  
  Placement is one of the advantages that NIST has offered since its inception. It has an impeccable record for campus placement. A well-organised placement team under the leadership and guidance of the Hon’ble Chairman, Dr. Sukant K. Mohapatra, streamlines the recruitment process and helps students get the jobs of their choice.
  
  For the 2019-2023 batch, the highest CTC of INR 19.15 LPA with an average of 5.65 LPA is offered during the current placement session, where more than 67 companies, like Western Digital, McAfee software, Texas Instruments, Wipro, TCS, ICICI Bank, India Mart, PWC, Berger Paints, Tata Power, Adani Group, and Hindustan Construction Company, among various others, have recruited.
  
  In the past few years, we have seen the best placement record in the history of NIST, irrespective of COVID-19 pandemics and challenges. However, we have opportunities to improve and do better, and a long way to go.</p>
                      <Link to="/contact">
                          <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                      </Link>
                  </div>
                  <div className='col-lg-6 d-flex justify-content-center'>
                      <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                  </div>
              </div>
          </div>
  
          <div className='bg-dark text-light py-5'>
              <ChooseSection />
          </div>
        <div className='bg-body-tertiary py-5'>
            <div className="container bg-black">
                <h2 className='text-center text-white mb-5'>Our Campus</h2>
                <div className='row g-4'>
                    {
                    persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                            <p className="text-center text-white mt-4">{person.id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </AnimatedPage>
  )
}

export default About;
