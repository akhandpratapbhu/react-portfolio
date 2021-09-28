import React, { useState } from 'react'
import HowtoUse from './HowtoUse'
function Aboutus() {
    const [data,setdata]=useState(HowtoUse);
    console.log(data);
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center
                      our-service-leftside-img">

                            <img src="img/tiger.jpg" alt="hero"
                                className="img-fluid" />
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                            </h3>
                            <h3 className="main-heading">How
                             to use the App ?</h3>
                            
                                {data.map((curEle)=>{
                                    const{id,title,info}=curEle
                                    return(
                                        <>
                                        <div className="row our-services-info">
                                        <div className="col-1 our-services-number">
                                    {id}
                                </div>
                                <div className="col-10 our-services-data">
                                  <h3>{title}</h3>
                                  <p className="main-hero-para">{info}</p>
                                </div>
                            </div>
                                        </>
                                    )
                                })}
                                
                            <br/>
                            <button class="btn-btn-style" type="submit">Sign in</button>

                        </div>
                        </div>
                    </div>
            </section>
            { /*2nd section*/}
            
            <section className="common-section our-services
             our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                       
                        <div className="col-12 col-lg-7 our-services-rightside-content
                        d-flex justify-content-center align-items-start flex-column">
                            <h3 className="mini-title">
                                --SUPPORTS IN ANY LANGUAGE
                            </h3>
                            <h3 className="main-heading">World class support is<br/>
                            available 24/7
                             </h3>
                            
                                {data.map((curEle)=>{
                                    const{id,title,info}=curEle
                                    return(
                                        <>
                                        <div className="row our-services-info">
                                        <div className="col-1 our-services-number">
                                    {id}
                                </div>
                                <div className="col-10 our-services-data">
                                  <h3>{title}</h3>
                                  <p className="main-hero-para">{info}</p>
                                </div>
                            </div>
                                        </>
                                    )
                                })}
                                
                            <br/>
                            <button class="btn-style" type="submit">Sign in</button>

                        </div>
                        <div className="col-12 col-lg-5 
                      our-service-rightside-img">

                            <img src="img/indianflag.jpg" alt="hero"
                                className="img-fluid" />
                        </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Aboutus;