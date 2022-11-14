import React from "react";
import OurPartner from "./../Footer/OurPartner";

const ServiceGlass = () => {
  return (
    <div className="services">
      <div class="container-fluid sec3">
        <div class="container">
          <h6>
            All in all, cutting edge robots are now the solution to most of our
            daily problems, which begs the question: where can you get your
            hands on a robot for you or your business?
          </h6>

          <div class="row">
            <OurPartner></OurPartner>
          </div>
          <div class="row py-5">
            <h4>ROCHE ROBOTS</h4>
            <p>
              Here at Roche Robots, we believe in providing our customers with
              the proper guidance and care as they venture into their own
              versions of a robotics future.
              <br />
              <br />
              In the market for robots that will help you or your business grow?
              Feel free to reach out to us here.
            </p>
            <a href="contact.html#cform">Get Started Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGlass;
