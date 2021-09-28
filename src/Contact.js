import React from 'react'

const Contact = () => {
    return (
        <>
          <section className="contactus-section">
              <div className="container">
                  <div className="row">
                      <div className="col-12 col-lg-10 mx-auto">
                          <div className="row">
                              <div className="contactus-leftside
                               col-12 col-lg-5">
                                   <h3 className="main-heading fw-bold"> Connect
                                    with our <br/> sales team.</h3>
                                    <p className="main-hero-para">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                     industry's standard dummy text ever since the 1500s  
                                    </p>
                                    <img src="img/tiger.jpg" alt="img" className="img-fluid"/>
                               </div>
                               <div className="contact-rightside col-12
                               col-lg-7">
                                   <form method="POST">
                                       <div className="row">
                                           <div className="col-12 col-lg-6 contact-input-field">
                                               <input
                                               type="text" name=""id="" className="form-control"
                                               placeholder="First Name" />
                                           </div>
                                           <div className="col-12 col-lg-6 contact-input-field">
                                               <input
                                               type="text" name=""id=""  className="form-control"
                                               placeholder="Last Name" />
                                           </div>
                                       </div>
                                       <div className="row">
                                           <div className="col-12 col-lg-6 contact-input-field">
                                               <input
                                               type="text" name=""id="" className="form-control"
                                               placeholder="Phone Number" />
                                           </div>
                                           <div className="col-12 col-lg-6 contact-input-field">
                                               <input
                                               type="text" name=""id=""  className="form-control"
                                               placeholder="Email ID" />
                                           </div>
                                       </div>
                                       <div className="row contact-input-field">
                                           <div className="col-12">
                                               <input type="text" name=""
                                               className="form-control"
                                               id="" placeholder="Add Address"/>
                                           </div>
                                       </div>
                                       <div className="row">
                                           <div className="col-12">
                                               <input type="text" name=""
                                               className="form-control"
                                               id="" placeholder="Enter your message"/>
                                           </div>
                                       </div>
                                       <div class="form-check form-checkbox-style">
                                           <input class="form-check-input"
                                           type="checkbox"
                                           value=""
                                           id="flexCheckChecked" />
                                           <label class="form-check-label"
                                           className="main-hero-para">
                                               I agree that AKHAND may contact me at the email address or 
                                               Phone Number above
                                           </label>
                                       </div>
                                       <button class="btn-btn-style w-100" type="submit">Submit</button>

                                   </form>
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </section>  
        </>
    )
}

export default Contact
