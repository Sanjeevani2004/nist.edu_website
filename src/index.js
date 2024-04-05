import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import ProgramsPage from './components/ProgramsPage/ProgramsPage';
import EventsPage from './components/EventsPage/EventsPage';
import ContactPage from './components/ContactPage/ContactPage';
import Navbar from './components/Navigation/Navigation.jsx';
import Footer from "./components/Footer/Footer.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";
import Courses from './components/ProgramsPage/ProgramsPage';

const AppLayout = () => (
    <>
      <Navbar />
      <Outlet />
    </>
  );


  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/course",
          element: <ProgramsPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ]);

ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );