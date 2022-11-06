import React, { useState } from 'react';
import './PageContact.css';
import  ReCAPTCHA from "react-google-recaptcha";


import data from '../../allData/Data';

const PageContact = () => {
  const[ btn ,setBtn]=useState(true);
  const captchHandler=()=>{
    setBtn(false);
  }

//   const select = document.getElementById("category");

// data.forEach((element) => {
//   const option = document.createElement("option");
//   option.innerHTML = element.category;
//   option.value = element.category;
//   select.appendChild(option);
// });

    return (
        <div class="contact">
        <div class="container-fluid py-5 sec1">
          <img
            src={ require("../../../assets/Vector Smart Object copy 9.png")}
            class="float"
            alt=""
          />
          <img
            src={ require("../../../assets/Vector Smart Object1 copy 9.png")}
            class="float"
            alt=""
          />
          <img
            src={ require("../../../assets/Vector Smart Object copy 9.png")}
            class="float"
            alt=""
          />
          <div class="container" id="cform">
            <h3>CONTACT US</h3>
            <p>
              Do you have any questions about our services? We would be happy to
              answer them for you. Just send us a message, and we'll get back to
              you as soon as possible. Our company is dedicated to providing the
              best robots for your needs. If you have any questions or concerns,
              please do not hesitate to contact us.
            </p>
            <div class="row">
              <div class="col-md-6 map">
                              <iframe className='map'
                src=
{            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67607.94575820204!2d153.31088955162207!3d-27.851535671778983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9116a914311fe5%3A0x502a35af3ded750!2sCoomera%20QLD%204209%2C%20Australia!5e0!3m2!1sen!2slk!4v1661052215626!5m2!1sen!2slk"
}             
title="test"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              </div>
              <form method="post" class="col-md-6" action="contactmail.php">
                <div class="mb-3 txt_field ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    aria-describedby="helpname"
                    required
                  />
                  <span></span>
                                    <label htmlFor="name" class="form-label">Name</label>

                  <small id="helpname" class="form-text text-muted"></small>
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

                                    <label for="email" class="form-label">Email Address</label>

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

                                    <label for="phone" class="form-label">Phone Number</label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div className="mb-3">

                <label for="category" >Robot Category</label>
                <select className="form-control form-ct" name="category" id="category"  >

                  <option value="" className='option'>Select a Category</option>
                  {
                    data.map( op => <option  className='option' >{op.category}</option>)
                  }
                </select>
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

                                    <label for="phone" class="form-label">Name Of the Robot</label>

                  <small id="helpId" class="form-text text-muted"></small>
                </div>
                <div class="mb-3 ">
                <span></span>

                <label for="msg" class="form-label">Message</label>

                  <textarea
                    class="form-control"
                    name="msg"
                    id="msg"
                    rows="5"
                  ></textarea>

                </div>
                <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
               onChange={captchHandler}></ReCAPTCHA>

                <button type="submit" disabled={btn}>SEND US</button>
              </form>
            </div>
          </div>
        </div>
        <div class="container-fluid sec2">
          <div class="container">
            <div class="row row-cols-lg-4 row-cols-md-2 row-cols-1">
              <div class="col">
                <span></span>
                <div class="card animate hook1">
                <img src={require("../../../assets/Total Sales.png")} alt="" />

                  <h4>Sales</h4>
                  <p>
                    We are always available to answer questions about our products
                    and services. You can reach us by phone or email after hours
                    and after sales support. Email us, and a team member will get
                    back to you ASAP.
                  </p>
                </div>
              </div>
              <div class="col">
                <span></span>
  
                <div class="card animate hook3">
                <img src={require("../../../assets/Online Support.png")} alt="" />

                  <h4>Help And Support</h4>
                  <p>
                    If you need help or support, please reach us by phone, email,
                    or live chat. We generally respond to inquiries within one or
                    two hours.
                  </p>
                </div>
              </div>
              <div class="col">
                <span></span>
  
                <div class="card animate hook3">
                <img src={require("../../../assets/Microphone.png")} alt="" />

                  <h4>Media And Press</h4>
                  <p>
                    Our Media and Press team is available to help with any
                    inquiries you may have related to media and press. We are
                    happy to provide high-resolution images, logos, and product
                    information upon request.
                  </p>
                </div>
              </div>
              <div class="col">
                <span></span>
  
                <div class="card animate hook2">
                  <img src={require("../../../assets/Communication.png")} alt="" />
                  <h4> Communication</h4>
                  <p>
                    Here at Roche Robots, we welcome inquiries and feedback. For
                    general questions, email us through the contact form, and a
                    team member will respond ASAP. If you are interested in
                    business partnerships we are always happy to hear from you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
};

export default PageContact;