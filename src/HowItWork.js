
import React, {useState } from 'react'
import Workapi from './WorkApi'
const HowItWork = ()=> {

        const [workdata, setworkdata] = useState(Workapi);
        console.log(workdata);
        return (
            <>
               <section>
                  <div className="work-container container">
                      <h1 className="main-heading text-center">How does it work</h1>
                  
                  <div className="row">
                     { workdata.map((id)=>{
                       /* destructing: const {logo,title,info}=id */
                         return(
                             <>
                     
                      <div className="col-12 col-lg-4 text-center 
                      work-container-subdiv">  
                      <i class={`fontawesome-style ${id.logo}`}></i>
                      <h2 className="sub-heading">{id.title}</h2>
                      <p className="main-hero-para w-100">{id.info}
                      </p>
                      </div>
                       </>
                           )
                        })}
                  </div>
                  </div>
               </section> 
            </>
        )
    }
  
    export default HowItWork;