import React, { useState } from 'react'
const Contact = () => {

    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name" required />
                            </div>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="tel" class="form-control" id="exampleFormControlInput1"

                                    placeholder="Phone no."
                                    pattern ="[1-9]{1}[0-9]{9}"required
                                
                                     />
                            </div>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                  placeholder="name@example.com" />
                            </div>
                            <div class="mb-4">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1"
                                    placeholder="password" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div>
                               {/* <button type="button" name="" id="" class="btn btn-primary">Submit</button> */}
                               <input type="submit" placeholder="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;