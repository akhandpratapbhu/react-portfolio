import './App.css';
import NavbarReact from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import React from 'react'
import HowItWork from './HowItWork'
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
export default function Home() {
  return (
    <div>
      <NavbarReact/>
      <Header/>
      <HowItWork/>
      <Aboutus/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  )
}
 