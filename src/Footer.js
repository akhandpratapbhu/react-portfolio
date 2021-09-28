import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
const Footer = () => {
    return (
        <>
         <footer>
             <div className="container">
                 <div className="row">
                     <div className="col-12 col-lg-10 mx-auto">
                         <div className="row">
                             <div className="col-6 col-lg-3">
                                 <h3>Company</h3>
                                 <ul>
                                    <li>
                                     <ListGroup action href="#link1">
                                        <h4>About</h4>  
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                         
                                 </ul>
                             </div>
                             <div className="col-6 col-lg-3">
                                 <h3>Support</h3>
                                 <ul>
                                 <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                 </ul>
                             </div>
                             <div className="col-6 col-lg-3">
                                 <h3>Services</h3>
                                 <ul>
                                     
                                     <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                      <li>
                                     <ListGroup action href="#link1">
                                     <h4>About</h4>
                                    </ListGroup>
                                      </li>
                                     
                                 </ul>
                             </div>
                             <div className="col-6 col-lg-3">
                                 <h3>Fallow us</h3>
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.facebook.com/profile.php?id=100059365640549">
                                            <i className="fab fa-facebook fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <a href="https://www.instagram.com">
                                            <i className="fab fa-instagram fontawesome-style"></i>
                                        </a>
                                    </div>
                                    <div className="col-3 mx-auto ">
                                        < a href="https://www.linkedin.com/in/akhand-pratap-339904202">
                                            <i className="fab fa-linkedin-in fontawesome-style"></i>
                                        </a>
                                    </div>
                                </div>
                             </div>

                         </div>
                         <hr/>
                         <div className="mt-5">
                             <p className="main-hero-para text-center mt-3">Copyright @ 2021 Akhand. All rights reserved</p>
                         </div>
                     </div>
                 </div>
             </div>
         </footer>   
        </>
    )
}

export default Footer
