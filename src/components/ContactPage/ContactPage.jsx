import React from "react"
import Back from "./back"
import "./ContactPage.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d2358.446425979326!2d84.74170980152053!3d19.198300755394566!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d43650f924b4f%3A0x821828cd629bb075!2sNational+Institute+of+Science+and+Technology+%28NIST%29!5e1!3m2!1sen!2sin!4v1524563496904' 
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>NIST University
Institute Park, Pallur Hills, Golanthara, National Institute Of Science and Technology (NIST), Brahmapur, Odisha 761008</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> hello@nist.edu</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-0680-2492421/422 </p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>
            <a
              href="https://www.facebook.com/NISTUniversity"
              target="_blank"
              rel="noopener noreferrer"
            >
              FACEBOOK|
            </a>
            <a
              href="https://twitter.com/TheNISTian"
              target="_blank"
              rel="noopener noreferrer"
            >
              TWITTER
            </a>
            <a
              href="https://www.instagram.com/nistuniversity"
              target="_blank"
              rel="noopener noreferrer"
            >
               |INSTAGRAM
            </a>
          </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact