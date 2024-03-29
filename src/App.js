import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import EventsPage from './components/EventsPage/EventsPage';
import ContactPage from './components/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;