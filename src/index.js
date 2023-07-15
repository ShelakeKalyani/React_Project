import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import Gallary from './Gallary.jsx';
import Blog from './Blog.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Appointment from './Appointment.jsx';
// import AppointForm from './AppointForm.php';
import Head_title from './Head_title.jsx';
import Register from './Register.jsx';
import Logout from './Logout.jsx';
import Userapointments from './Userapointments.jsx';
import Prescription from './Prescription.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Nav/>
            <Home/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path="/about" element={<>
          <Nav/>
          <Head_title title="About"></Head_title>
          <About/>
          <Footer></Footer>
        </>}></Route>
        <Route path="/services" element={
        <>
          <Nav/>
          <Head_title title="Services"></Head_title>
          <Services/>
          <Footer></Footer>
        </>
        }></Route>
        <Route path="/gallary" element={<>
          <Nav/>
          <Head_title title="Gallery"></Head_title>
          <Gallary/>
          <Footer></Footer>
        </>}></Route>
        <Route path="/blog" element={<>
          <Nav/>
          <Head_title title="Blog"></Head_title>
          <Blog/>
          <Footer></Footer>
        </>}></Route> 
        <Route path="/contact" element={
          <>  
            <Nav/>
            <Head_title title="Contact"></Head_title>
            <Contact/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path='/register' element={
          <>
            <Nav/>
            <Register/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path='/appointment' element={
          <>
            <Nav/>
            <Appointment/>
            <Footer></Footer>
          </>
        }></Route>
        <Route path='/logout' element={
          <>
            <Nav/>
            <Logout/>
            <Footer></Footer>
          </>
        }></Route>

        <Route path="/your_appointments" element={
          <>
            <Nav/>
            <Userapointments/>
            <Footer></Footer>
          </>
        }></Route>

        <Route path='/see_prescription' element={
          <>
            <Prescription/>
          </>
        }>
      </Route>
      </Routes>
      
    </Router>
  </>
);
