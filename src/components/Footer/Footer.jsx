import React from 'react';
import './Footer.css';
import {
  FaRegArrowAltCircleRight,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  const companyLinks = [
    { label: 'About Us', icon: FaRegArrowAltCircleRight, Link: 'about' },
    { label: 'Contact Us', icon: FaRegArrowAltCircleRight, Link: 'contact' },
    { label: 'Courses', icon: FaRegArrowAltCircleRight, Link: 'courses' },
    { label: 'Privacy Policy', icon: FaRegArrowAltCircleRight, Link: 'privacy' },
    { label: 'FAQs', icon: FaRegArrowAltCircleRight, Link: 'faq' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker-alt', text: 'Institute Park Berhampur Odisha' },
    { icon: 'fa-phone-alt', text: '+91-0680-2492421/422' },
    { icon: 'fa-envelope', text: 'hello@nist.edu' },
  ];

  const socialLinks = [
    {
      icon: FaTwitter,
      link: 'https://twitter.com/TheNISTian',
      scale: 1.3 
    },
    {
       icon: FaFacebookF,
       link: 'https://www.facebook.com/NISTUniversity', 
       scale: 1.3 
      },
    {
       icon: FaWhatsapp,
       link: 'https://api.whatsapp.com/send?phone=919777146478&text=Hi!%20I%20wish%20to%20ask%20you%20some%20questions%20regarding%20NIST,%20Berhampur.', 
       scale: 1.3 
      },
    {
       icon: FaYoutube,
       link: 'https://youtube.com/@NISTUniversity', 
       size: 40, scale: 1.3 
      },
      {
        icon: FaLinkedin,
        link: 'https://www.linkedin.com/school/nistuniversity/',
        scale: 1.3,
      },
      {
        icon: FaInstagram,
        link: 'https://www.instagram.com/nistuniversity',
        scale: 1.3,
      }
  ];

  const openingHours = [
    { day: 'BTECH-', time: 'CSE, IT, ECE' },
    { day: 'BSC-', time: 'CS,IT,PHY,CHEM' },
    { day: 'BUSINESS-', time: 'MBA' },
  ];

  return (
    <React.Fragment>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Quick Links
              </h4>
              {companyLinks.map((link, index) => (
                <a
                  key={index}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: 'me-2' })}
                  {link.label}
                </a>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Contact
              </h4>
              {contactInfo.map((info, index) => (
                <p key={index} className="mb-2">
                  <i className={`fa ${info.icon} me-3`} />
                  {info.text}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="btn btn-outline-light btn-social"
                    href={social.link}
                    target='_blank'
                  >
                    {React.createElement(social.icon, {
                      className: 'display-1',
                      style: { scale: social.scale, size: social.size },
                    })}
                  </a>
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Courses
              </h4>
              {openingHours.map((hours, index) => (
                <React.Fragment key={index}>
                  <h5 className="text-light fw-normal">{hours.day}</h5>
                  <p>{hours.time}</p>
                </React.Fragment>
              ))}
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">
                Newsletter
              </h4>
              <p>Subscribe to our newsletters.!</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control border-primary w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                ©{' '}
                <a className="border-bottom" href="#">
                  nist.edu
                </a>
                , All Right Reserved,2024.
                <br />
                <br />
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/contact">Help</a>
                  <a href="faq">FAQs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;