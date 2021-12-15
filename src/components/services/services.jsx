import React, {useState} from 'react'
import './services.css'

export default function Services () {
    const [selected, setSelected] = useState(0)
    return(
        <>
         <section className="section" id="services">
                <div className="container">
                    <div className="center-heading">
                        <h2>How Can We <em>Help?</em></h2>
                        <p>Largest globally spread network of talented people</p>
                    </div>
                        <div class="center-heading" id="toggle">
                            
                            <a class="main-button-slider" onClick={() => setSelected(0)}>     
                            Hire a Tasker
                            </a>
                            <a class="main-button-slider" onClick={() => setSelected(1)}>     
                            Become a Tasker
                            </a>     
                        </div>
                    <div className="row ">

                        {(selected === 0) && <div id="left"> 
                            <div className="row hemlo">
                                    <div className="services-left-art">
                                        <img src="https://image.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg" height="400" alt="mobile-app" />
                                    </div>
                                    <div className="services-left-text">
                                        <h2><em>Hire a Tasker</em></h2>
                                        <ul>
                                        <li>
                                        Find the task that you are happy to work
 
                                        </li>
                                        <li>
                                        Get paid for the task you love doing
                                            </li> <li>
                                            Have full control of your own schedule​
                                            
                                            </li>
                                    </ul>

                                    </div>
                            </div>
                        </div>}
                        {(selected === 1) && <div id="right">
                        <div className="row hemlo">
                               
                                <div className="services-right-text">
                                    <h2><em>Become a Tasker</em></h2>
                                    <ul>
                                        <li>
                                            
                                        Find the task that you are happy to work
 
                                        </li>
                                        <li>
                                        Get paid for the task you love doing
                                            </li> <li>
                                            Have full control of your own schedule​
                                            
                                            </li>
                                    </ul>

                                </div> <div className="services-left-art">
                                    <img src="https://image.freepik.com/free-vector/recruiting-professionals-studying-candidate-profiles_1262-21404.jpg" height="400"/>
                                </div>

                                </div>
                            </div>}
                            </div>
                    </div>
            </section>

        </>
    )
    
}