import React, { useState } from 'react';
import './ContactPage.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import AnimatedPage from '../animation';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    state: '',
    postcode: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false); // New state for submission status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_52a5i4o', 'template_yca2cnc', e.target, 'VFUDI7HBspB1bzmya')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          state: '',
          postcode: '',
          message: ''
        });
        setSubmitted(true); // Set submission status to true
      })
      .catch((error) => {
        console.error('Email failed to send:', error.text);
      });
  };

  return (
    <AnimatedPage>
      <div className='contact-page bg-sky-950'>
        <header className='height-80'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h1 className='text-center fw-semibold'>Get In Touch</h1>
            <p className='text-center w-75 mb-5'>We love hearing from our visitors! Whether you have a question about our products, want to collaborate, or just want to say hello, we're here for you. You can reach us by filling this form.</p>
          </div>
        </header>
        <div className='container my-5 d-flex justify-content-center bg-sky-950'>
          <Form id='contact-form' onSubmit={handleSubmit}>
            <Row className='mb-3 text-white'>
              <Col sm={12} md={6} className='mb-3 mb-md-0'>
                <Form.Label>First Name</Form.Label>
                <Form.Control name='firstName' placeholder='First name' value={formData.firstName} onChange={handleChange} />
              </Col>
              <Col sm={12} md={6}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name='lastName' placeholder='Last name' value={formData.lastName} onChange={handleChange} />
              </Col>
            </Row>

            <Form.Group className='mb-3 text-white'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className='mb-3 text-white'>
              <Form.Label>Address</Form.Label>
              <Form.Control name='address' placeholder='Your address' value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group className='mb-3 text-white'>
              <Form.Label>State</Form.Label>
              <Form.Control name='state' placeholder='State' value={formData.state} onChange={handleChange} />
            </Form.Group>

            <Row className='mb-3 text-white'>
              <Col sm={12} md={6}>
                <Form.Label>Postcode</Form.Label>
                <Form.Control name='postcode' placeholder='Postcode' value={formData.postcode} onChange={handleChange} />
              </Col>
            </Row>

            <Form.Group className='mb-3 text-white'>
              <Form.Label>Your Message</Form.Label>
              <Form.Control name='message' as="textarea" rows={3} value={formData.message} onChange={handleChange} />
            </Form.Group>

            <Button variant="danger btn-lg" type='submit'>Submit</Button>

            {submitted && <p className="text-success mt-3 text-white">Form submitted successfully!</p>} {/* Display submitted message */}
          </Form>
        </div>

        {/* Google Maps iframe */}

        <div className="map-container align-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20252.59033514835!2d84.745904!3d19.198531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d43650f924b4f%3A0x821828cd629bb075!2sNIST%20University!5e1!3m2!1sen!2sus!4v1712848665387!5m2!1sen!2sus"
           width="1300"
            height="300" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Contact;
