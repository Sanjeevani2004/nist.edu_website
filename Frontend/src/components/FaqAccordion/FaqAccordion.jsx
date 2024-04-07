import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>We're here to help! You can reach our dedicated customer support team by sending an email to hell or by filling out the contact form on our website. We strive to respond to all inquiries within 24 hours during weekdays. Additionally, you can reach out to us via our social media channels present in the end of the page. We're committed to ensuring your experience with us is smooth and enjoyable, so don't hesitate to get in touch with any questions or concerns you may have..</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>Where is NIST UNIVERSITY located?</Accordion.Header>
                    <Accordion.Body>
                        NIST UNIVERSITY is located at Institute Park, Berhampur,Odisha-761008, India.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What are the courses available?</Accordion.Header>
                    <Accordion.Body>
                       We Offer BTech, BsC, MBA & Skill Development Courses.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What is the Admission Process?</Accordion.Header>
                    <Accordion.Body>
                        For the Admission Process Please reach out at Contact Page.
                    </Accordion.Body>
                </Accordion.Item>
                
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;