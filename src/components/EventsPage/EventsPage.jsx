// import React, { useState } from 'react';
// import './Slider.css';

// const Slider = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   if (!Array.isArray(slides) || slides.length === 0) {
//     return <div>No slides to display</div>;
//   }

//   const nextSlide = () => {
//     setCurrentSlide((currentSlide + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
//   };

//   return (
//     <div className="slider-container">
//       <div className="slider">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`slide ${index === currentSlide ? 'active' : ''}`}
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="content">
//               <div className="name">{slide.name}</div>
//               <div className="des">{slide.description}</div>
//               <button>See more</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="buttons">
//         <button className="prev" onClick={prevSlide}>
//           <i className="fa-solid fa-angle-left"></i>
//         </button>
//         <button className="next" onClick={nextSlide}>
//           <i className="fa-solid fa-angle-right"></i>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;