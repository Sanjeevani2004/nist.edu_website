import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../Assets/tifac.jpg';
import ChooseSection from '../ChooseSection/ChooseSection.jsx';
import Person1 from '../../utils/images/person1.jpg';
import Person2 from '../../utils/images/person2.jpg';
import Person3 from '../../utils/images/person3.jpg';
import Person4 from '../../utils/images/person4.jpg';
import Person5 from '../../utils/images/person5.jpg';
import Person6 from '../../utils/images/person6.jpg';
import Person7 from '../../utils/images/person7.jpg';
import Person8 from '../../utils/images/person8.jpg';
import Person9 from '../../utils/images/person9.jpg';

const persons = [
    {
        id: 1,
        img: [Person1]
    },
    {
        id: 2,
        img: [Person2]
    },
    {
        id: 3,
        img: [Person3]
    },
    {
        id: 4,
        img: [Person4]
    },
    {
        id: 5,
        img: [Person5]
    },
    {
        id: 6,
        img: [Person6]
    },
    {
        id: 7,
        img: [Person7]
    },
    {
        id: 8,
        img: [Person8]
    },
    {
        id: 9,
        img: [Person9]
    },
];

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                <p className='text-center w-75 mb-5'>NIST University is promoted by SM Charitable Educational Trust. The Trust was established in 1995 by Dr Sukant K Mohapatra and Ms Sanjeeta Mohapatra (both are NRIs based in US) as Founder/Donor Trustees. Dr Sukant Mohapatra is the founder chairman of the Trust and NIST supporting and providing visionary guidance for NIST to become a world class institute. NIST was established in the year 1996 by a group of academicians and technocrats educated in the top institutes of India and abroad. It is the first NRI educational venture in the state of Odisha and first engineering college under Berhampur University and southern Odisha. The primary objective of the founders was to promote NIST as a center of academic excellence and research at par with international universities in their home state of Odisha.

Keeping true to its core value, mission and vision, NIST has become a top notch institute in the state and country since its establishment in 1996.</p>
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
            <div className="container">
                <h2 className='text-center mb-5'>Our Winners</h2>
                <div className='row g-4'>
                    {persons.map((person) => (
                        <div key={person.id} className='col-md-4'>
                            <img src={person.img} className='img-fluid' alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;