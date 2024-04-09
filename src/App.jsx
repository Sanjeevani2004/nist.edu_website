import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header1 from './components/Header';
import Header from './components/Navigation/Navigation.jsx';
//import navbar from './components/Navigation/Navigation.jsx'
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import EventsPage from './components/EventsPage/EventsPage';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer.tsx';
import Faq from './components/FaqAccordion/FaqAccordion.jsx';
//import privacy from './components/Footer/Privacy.jsx';
import { AuthProvider } from "./Context/authContext/context.jsx";
import Login from "./components/LoginPage/Login.jsx";
import Signup from "./components/LoginPage/Signup.jsx";
import Faculty from './components/LoginPage/faculty.jsx';

function App() {
  return (
    
    <BrowserRouter>
    <AuthProvider>
    {/* <Parallax speed={-10}> */}
      <Header/>

      <Header1/>
        <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
     
  );
      <Footer />
      {/* </Parallax> */}
      </AuthProvider>
    </BrowserRouter>

  );
}

export default App;