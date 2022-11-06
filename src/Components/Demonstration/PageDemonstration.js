import React, { useState } from 'react';
import './Demonstration.css';
import  { useRef } from 'react';
import  ReCAPTCHA from "react-google-recaptcha";
const PageDemonstration = () => {
    const[ btn ,setBtn]=useState(true);
    const captchHandler=()=>{
      setBtn(false);
    }
  const captchaRef = useRef(null)
  return (
    <div className='demo'>

      <div className="container-fluid sec1 py-5">
        <div className="container  ">
          <h3 className="demo-text"> Free Demonstrations on the Gold Coast and Brisbane</h3>


          <div className="row display  ">

            <div className="col-md-6  ">
            <div className="demo-video">
                <iframe className="round" width="100%" height="400" src="https://www.youtube.com/embed/Am1-Hg7dfuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
              <div className="col-md-12  box-shadow">
              <h5 >AndyGirl Covid-19 Ozone Disinfectant Machine</h5>
              <p>AndyGirl Features: Effective against COVID-19 by reducing viral load; kills 99.99% of viruses and bacteria; kills moulds,
                 fungi and algae; removes dust, odour, & formaldehyde; used in homes, offices, airplanes, trains, buses, bbers, classNamerooms, 
                 doctors, gyms and hospitals, etc; reaches areas up to 150 Square Meters; AndyGirl Alone Makes Ozone Water - 
                 100 ml of Ozone Water Every 20 Minutes; AndyGirl Operates on Distilled Water and Tap Water; AndyGirl Produces Ozone (O3),
                  Hydroxyl Radical (-OH), Negative Oxygen Ions (Oe), Oxygen (O2) and water (H2O), which Do Not Pollute the Environment;
                   Easy to Operate; 12 Months Warranty; 24 Hours Support;
                    Free Remote Assistance. AndyGirl can kill and decompose bacteria spores,
                     viruses and formaldehyde indiscriminately. Non toxic, harmless, environmentally friendly.
                      The main ingredient for disinfection formaldehyde removal and purification is “deionised water”. <br />
                      Suitable for: Homes • Retail Stores • Medical Centres • Hospitals • Warehouses • Government Houses • Prisons • Child Care • Aged Care • Disability Homes • Entertainment Venues • Hospitality • Tourism • Gyms etc...

</p>

            </div>


            </div>
            <div className="col-md-6">
              <form method="post" class="col-md-6" action="contactmail.php">
                <h2 className='text-center'>Book a free demonstration</h2>

                <div class="row txt_field ">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      aria-describedby="helpname"
                      required
                    />
                    <span className=''></span>
                    <label htmlFor="name" class="form-label">First Name<span>*</span></label>

                    <small id="helpname" class="form-text text-muted"></small>

                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      aria-describedby="helpname"
                      required
                    />
                    <span></span>
                    <label htmlFor="name" class="form-label">Last Name <span>*</span></label>

                    <small id="helpname" class="form-text text-muted"></small>

                  </div>
                </div>
                <div class="mb-3 txt_field ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    aria-describedby="emailHelpId"
                    required
                  />
                  <span></span>

                  <label for="email" class="form-label">Email Address<span>*</span></label>

                  <small id="emailHelpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    required
                  />
                  <span></span>

                  <label for="phone" class="form-label">Phone Number<span>*</span></label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    required
                  />
                  <span></span>

                  <label for="phone" class="form-label">Company Name</label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    required
                  />
                  <span></span>

                  <label for="phone" class="form-label">Street Address<span>*</span></label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    required
                  />
                  <span></span>

                  <label for="phone" class="form-label">State / City <span>*</span></label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>

                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    aria-describedby="helpId"
                    required
                  />
                  <span></span>

                  <label for="phone" class="form-label">Name Of the Robot <span>*</span></label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 ">
                  <span></span>

                  <label for="msg" class="form-label">Discription</label>

                  <textarea
                    class="form-control"
                    name="msg"
                    id="msg"
                    rows="3"
                  ></textarea>

                </div>
                <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                ref={captchaRef} onChange={captchHandler}></ReCAPTCHA>
                <button type="submit" disabled={btn}>SEND US</button>
              </form>

            </div>

          </div>
        </div>

        <div className="container">

        <div className="row section-header ">
            <h4 >Book a Free Demo Now </h4>
            <div className="col-md-6  box-shadow">
              <h5 >KettyBot -Greet guests and delivery foods robot</h5>
              <p>
                KettyBot continues the minimalist design concept of Pudu Technology. The compact size and forward-leaning C-shaped body allow the robot to go through a clearance of only 55cm, making it an ideal choice in complex and crowded environments. Centered ad display perfectly adapts to the customer's angle of view. The ad display can display promotional materials in the customized zone, providing a more eye-catching approach for marketing. With AI voice interaction, KettyBot intelligently greets and interacts with passing through customers by waking up its screen. Such a cute and smart KettyBot would obviously draw more attention than the traditional approach! Powered by PUDU Scheduler system, the KettyBot can directly communicate with any robot in the same network. KettyBot automatically provides a voice alert and UI notification when the battery is low, and returns to the docking station simultaneously.</p>

            </div>


            <div className="col-md-6">

              <div className="demo-video">
                <iframe className="round" width="100%" height="410" src="https://www.youtube.com/embed/yXp6nEI9Fjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
            </div>
          </div>


        <div className="row section-header ">
            <h4 >Book a Free Demo Now </h4>


            <div className="col-md-6">

              <div className="demo-video">
                <iframe className="round" width="100%" height="410" src="https://www.youtube.com/embed/A6vH-QyBTIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
            </div>
            
            <div className="col-md-6  box-shadow">
              <h5 >BellaBot Covid-19 Ozone Disinfectant Machine</h5>
              <p>
              Bellabot - The latest delivery robot designed by Pudu, BellaBot inherits the outstanding characteristics of the previous generation, while being endowed with superior human-Robot interaction capabilities. Featuring an innovative bionic design language, cute modeling,multi-modal interaction and many other new functions, BellaBot provides users with an unprecedented food delivery robot experience. BellaBot supports both Laser SLAM and Visual SLAM positioning and navigation solutions in order to adapt to more scenarios. Both of which are accurate and easy to use. Both positioning solutions which BellaBot offers provides the same excellent user experience. While the positioning solutions differ, BellaBot's customer-centered service never changes. BellaBot adopts an innovative bionic design. The bionic design is just perfect from the height of the machine body to the screen tilt, and to the shape curve. Obstacle detection frequency up to5400 times per minute.                </p>

            </div>

          </div>

          <div className="row section-header ">
            <h4 >Book a Free Demo Now </h4>


            <div className="col-md-6">

              <div className="demo-video">
                <iframe className="round" width="100%" height="410" src="https://www.youtube.com/embed/NR0ZO0CE7WQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

              </div>
            </div>
            <div className="col-md-6  box-shadow">
              <h5 >HolaBot Covid-19 Ozone Disinfectant Machine</h5>
              <p>Pudu HolaBot is a delivery robot which innovatively applies autonomous robot to the food, medical and other fields. Equipped with intelligent delivery, high carrying capacity，pagering function and voice control module, Pudu HolaBot is aiming to boost the turnaround efficiency in restaurants and to help the establishment of smart hospitals. Ultra-large Capacity
60Kg carrying capacity, volume of 120L, 4 large-capacity trays, giving the restaurant a much better turnover. And it transfers medical stuff from the place of origin to the designated storage space with contactless delivery, helping to improve efficiency and lower infection rates.</p>

            </div>

          </div>








        </div>
        <div className="container margin ">
          {/* <h3 className="demo-texts"> Purchase our Products and Receive a FREE gift - Eilik, <br></br> A little Companion Bot with Endless Fun</h3>


            <div className="col-md-6  ">
              <div className="demo-video ">
                <iframe className="round" width="100%" height="400" src="https://www.youtube.com/embed/7N60oFtjBIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div className="col-md-6 box-shadow elik">
              <h3 className='text-center '>Eilik A little Companion Bot</h3>
              <p >The key feature of Eilik is that it's not designed to be useful, per se — although it includes handy functions including countdown and Pomodoro timers — but instead to act as a sort of pet with its own emotions. "Eilik has a plethora of inner activities based on four emotional states: Normal, happy, angry, and sad. Each emotion has a wide range of reactions and expressions."
                Eilik's personality is evolving in response to your interactions with him. If you treat him with love, he will be happier; if you keep annoying him, he will be more naughty than usual.
              </p>

            </div> */}
                      <div className="row  ">

          </div>
          <div className="deck ">
            <div className="item ">
            <div className="card">
            <img src={require("../../assets/tickCircle.png")} alt="" />
            <h4> Header</h4>

              <p>
                Exactly how the robot should be used to achieve optimal
                results
              </p>

            </div>
            </div>
            <div className="item">
            <div className="card">
            <img src={require("../../assets/customerIssues.png")} alt="" />
            <h4> Header</h4>

              <p>Exactly how the robot addresses typical customer issues</p>

            </div>
            </div>
            <div className="item">
              <div className="card">

              <img src={require("../../assets/roboFacevector.png")} alt="" />
              <h4> Header</h4>

              <p>
                Exactly how the robot can be customised and personalised
                with their branding and logos
              </p>

              </div>

            </div>
            <div className="item">
            <div className="card">
            <img src={require("../../assets/tailored.png")} alt="" />
            <h4> Header</h4>

              <p>
                Exactly how the robot can be tailored to the needs of
                specific companies or individuals
              </p>

            </div>

            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default PageDemonstration;