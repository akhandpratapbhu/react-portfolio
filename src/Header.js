import React from 'react'
import {Image} from 'react-bootstrap';
  const Header = ()=>{

        return (
            <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex
                        justify-content-center flex-column align-item start">
                            <h1 className="d">Online Payment Made<br/>
                             Easy For You</h1>
                             <p className="main-hero-para">
                             Because React-Bootstrap doesn't depend on a very precise version of Bootstrap, we don't ship with any included CSS. However, 
                             some stylesheet is required to use these components.
                             How and which Bootstrap styles you include is up to you, but the simplest way is to include the latest styles from the CDN. A little more
                              information about the benefits of using a CDN can be found
                             </p>
    
                         <h3> Get early access for you</h3>
              <div className="input-group mt-3">
                  <input type ="text"
                  className="rounded-pill w-75 me-3 p-2 
                  form-control-text"placeholder="Enter Your Email"/>
                 <div className="input-group-button" type="submit">
                     Get it now
                     </div>
                     </div>


                        </div>
                        <div className="col-12 col-lg-6 header-right-side
                         d-flex justify-content-center align-items-center
                         main-herosection-images">
                        
                              <img src="img/flag.jpg" alt="hero"
                              className="img-fluid" />
                              <Image src="img/tiger.jpg"
                              className="img-fluid main-hero-img2"  />
                        </div>
                    </div>

                </section>
            </header>
            </>
        )
    }

export default Header;