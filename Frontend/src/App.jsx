import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import EventsPage from './components/EventsPage/EventsPage';
import ContactPage from './components/ContactPage/ContactPage';
import Footer from './components/Footer/Footer.tsx';
import Faq from './components/FaqAccordion/FaqAccordion.jsx';
import privacy from './components/Footer/Privacy.jsx';
import { UserProvider } from "./Context/context.js";
import Login from "./components/LoginPage/Login";
//import PrivateRoute from "./components/LoginPage/PrivateRoute.page";
import Signup from "./components/LoginPage/Signup";

function App() {
  return (
    
    <BrowserRouter>
    <Header/>
    <UserProvider>
      <Routes>
      
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/course" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<privacy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </UserProvider>
      <Footer />

    </BrowserRouter>
     
  );
}

export default App;