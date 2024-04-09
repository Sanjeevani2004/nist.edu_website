import React, { useState } from 'react';
import './ContactPage.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com'; 

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
    emailjs.sendForm('service_52a5i4o','template_yca2cnc', e.target, 'VFUDI7HBspB1bzmya')
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
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Get In Touch</h1>
                <p className='text-center w-75 mb-5'>We love hearing from our visitors! Whether you have a question about our products, want to collaborate, or just want to say hello, we're here for you. You can reach us by filling this form.</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form' onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name='firstName' placeholder='First name' value={formData.firstName} onChange={handleChange} />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='lastName' placeholder='Last name' value={formData.lastName} onChange={handleChange} />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter email' value={formData.email} onChange={handleChange} />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control name='address' placeholder='Your address' value={formData.address} onChange={handleChange} />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>State</Form.Label>
                    <Form.Control name='state' placeholder='State' value={formData.state} onChange={handleChange} />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6}>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control name='postcode' placeholder='Postcode' value={formData.postcode} onChange={handleChange} />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control name='message' as="textarea" rows={3} value={formData.message} onChange={handleChange} />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>Submit</Button>

                {submitted && <p className="text-success mt-3">Form submitted successfully!</p>} {/* Display submitted message */}
            </Form>
        </div>
    </div>
  );
}

export default Contact;
