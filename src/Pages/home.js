import React from 'react'
import Footer from '../Footer';
import Header from '../Header';
import HowItWork from '../HowItWork';
import NavbarReact from '../Navbar';

const home = () => {
    return (
        <div>
            
          <NavbarReact/>
          <Header/>
          <HowItWork/>
          <Footer/> 
          
        </div>
    )
}

export default home;
