import React, { useEffect } from "react";
import "./ourRobot.css";
import RevealButton from "../Body/RevealButton";

const OurRobot = (props) => {
  const IndexHnadler = (event) => {
    console.log(event);
    props.onCtSelect(event);
  };

  useEffect(() => {
    const readMore = document.querySelectorAll(".reveal-toggler");
    const readMoreLabel = document.querySelectorAll(".reveal-btn");
    const visibleText = document.querySelectorAll(".visible-text");
    const hiddenText = document.querySelectorAll(".hidden-text");

    readMore.forEach((el, index) => {
      el.onclick = () => {
        if (el.checked) {
          visibleText[index].style.display = "none";
          hiddenText[index].style.display = "block";
          readMoreLabel[index].innerHTML = "READ LESS";
        } else {
          hiddenText[index].style.display = "none";
          visibleText[index].style.display = "block";
          readMoreLabel[index].innerHTML = "READ MORE";
        }
      };
    });
  }, []);

  return (
    <div className="home">
      <div className="container-fluid sec3 py-5 px-3 ">
        <div className="container">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
            <div className="col animate hook1">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {
                      robotImages.disabilyRobots.map( pic => {
                        return (
                          <div className='img'>
                            <Link to={`/products/${data[0].category}`}><img src={pic.img} alt="" onClick={()=>IndexHnadler(0)} /></Link>
                          
                            </div>
    
                        )
                      })
                    } */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float1"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float2"
                  />
                </div>
                <div className="card-body">
                  <h4>Disability Robots</h4>
                  <p className="visible-text">
                    Disability robots are both assistive technologies and social
                    robots that contribute towards mental physical health. They
                    assist disabled person's achieve greater independence and
                    quality of life. Robots can assist disabilities such as...
                  </p>
                  <div className="hidden-text text-white">
                    Disability robots are both assistive technologies and social
                    robots that contribute towards mental physical health. They
                    assist disabled person's achieve greater independence and
                    quality of life.
                    <br />
                    <br />
                    Robots can assist disabilities such as:
                    <ul>
                      <li>Autism</li>
                      <li>Deafness</li>
                      <li>Blindness</li>
                      <li>Dyslexia</li>
                      <li>Learning Disabilities</li>
                      <li>ADHD</li>
                      <li>Downs Syndrome</li>
                      <li>Acquired Brain Injury</li>
                      <li>Dementia</li>
                      <li>Depression</li>
                      <li>Loneliness</li>
                      <li>Speech Therapy</li>
                      <li>Obesity</li>
                      <li>Mental Illnesses</li>
                    </ul>
                    And Mobility Disabilities such as:
                    <ul>
                      <li>Spinal Cord Injury</li>
                      <li>Cerebral Palsy</li>
                      <li>Rheumatoid Arthritis</li>
                      <li>Frail Elderly</li>
                      <li>Amyotrophic Lateral Sclerosis</li>
                      <li>Muscular Dystrophy</li>
                      <li>Multiple Sclerosis</li>
                      <li>Stroke</li>
                      <li>Amputees</li>
                    </ul>
                    And many more...
                    <br />
                    <br />
                    Disability robots can assist with daily activities such as
                    bathing, dressing, and eating. They can also help with
                    mobility tasks such as climbing stairs or getting in and out
                    of bed. In addition, disability robots can provide
                    companionship and social interaction for people who are
                    isolated due to their disability. While disability robots
                    vary in their capabilities, they all share the common goal
                    of helping people with disabilities live more independent
                    and fulfilling lives.
                    <br />
                    <br />
                  </div>
                  <input
                    type="checkbox"
                    id="read4"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <label htmlFor="read4" className="reveal-btn">
                    READ MORE
                  </label>
                </div>
              </div>
            </div>
            <div className="col animate hook3">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {robotImages.agedCareRobots.map((pic) => {
                      return (
                        <div className="img">
                          <Link to={`/products/${data[1].category}`}>
                            <img
                              src={pic.img}
                              alt=""
                              onClick={() => IndexHnadler(1)}
                            />
                          </Link>
                        </div>
                      );
                    })} */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float2"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float1"
                  />
                </div>
                <div className="card-body">
                  <h4>Aged care Robots</h4>
                  <p className="visible-text">
                    Our company manufactures robots for child care, and those
                    designed for aged care. The child care robots have several
                    features to keep children entertained and engaged. They come
                    programmed with a variety of games and activities, and they
                    also can learn new tasks. These robots are ...
                  </p>
                  <p className="hidden-text">
                    Our company manufactures robots for child care, and those
                    designed for aged care. The child care robots have several
                    features to keep children entertained and engaged. They come
                    programmed with a variety of games and activities, and they
                    also can learn new tasks. These robots are equipped with
                    sensors that detect when a child cries or needs assistance.
                    On the other hand, aged care robots provide assistance and
                    companionship to older adults. They can be programmed to
                    perform simple tasks such as fetching items or providing
                    reminders. Additionally, they are equipped with sensors that
                    allow them to monitor the health of their elderly users.
                    These robots provide an essential service for many people
                    who would otherwise be unable to live independently.
                  </p>
                  <input
                    type="checkbox"
                    id="read5"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <RevealButton></RevealButton>
                </div>
              </div>
            </div>
            <div className="col animate hook2">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {robotImages.childCareRobots.map((pic) => {
                      return (
                        <div className="img">
                          <Link to={`/products/${data[2].category}`}>
                            <img
                              src={pic.img}
                              alt=""
                              onClick={() => IndexHnadler(2)}
                            />
                          </Link>
                        </div>
                      );
                    })} */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float1"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float2"
                  />
                </div>
                <div className="card-body">
                  <h4>Child care Robots</h4>
                  <p className="visible-text">
                    We specialize in the production of high-quality childcare
                    robots. Our robots are designed to provide children with the
                    best care and are perfect for families to ensure their
                    children are always safe and sound. We offer various
                    childcare robots. Regardless of your needs...
                  </p>
                  <p className="hidden-text">
                    We specialize in the production of high-quality childcare
                    robots. Our robots are designed to provide children with the
                    best care and are perfect for families to ensure their
                    children are always safe and sound. We offer various
                    childcare robots. Regardless of your needs, we are confident
                    that we have a childcare robot that will meet your
                    expectations.
                  </p>
                  <input
                    type="checkbox"
                    id="read6"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <label htmlFor="read6" className="reveal-btn">
                    READ MORE
                  </label>
                </div>
              </div>
            </div>
            <div className="col animate hook1">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {robotImages.companionRobots.map((pic) => {
                      return (
                        <div className="img">
                          <Link to={`/products/${data[3].category}`}>
                            <img
                              src={pic.img}
                              alt=""
                              onClick={() => IndexHnadler(3)}
                            />
                          </Link>
                        </div>
                      );
                    })} */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float2"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float1"
                  />
                </div>
                <div className="card-body">
                  <h4>Companion robots</h4>
                  <p className="visible-text">
                    Companions are more like traditional pets, providing
                    companionship and interaction. Many companion robots come
                    equipped with sensors and artificial intelligence that allow
                    them to respond to their environment and the needs of their
                    owners. For example, some robots can ...
                  </p>
                  <p className="hidden-text">
                    Companions are more like traditional pets, providing
                    companionship and interaction. Many companion robots come
                    equipped with sensors and artificial intelligence that allow
                    them to respond to their environment and the needs of their
                    owners. For example, some robots can detect when their owner
                    is sad or stressed and provide comfort accordingly.
                    <br />
                    <br />
                    As companion robots become more advanced, they are
                    increasingly used in healthcare settings such as hospitals
                    and nursing homes. In these settings, companion robots can
                    help to reduce loneliness and anxiety and improve cognitive
                    function and mood. In the future, companion robots will
                    likely become even more commonplace, appearing in various
                    settings and fulfilling various roles.
                  </p>
                  <input
                    type="checkbox"
                    id="read7"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <label htmlFor="read7" className="reveal-btn">
                    READ MORE
                  </label>
                </div>
              </div>
            </div>
            <div className="col animate hook3">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {robotImages.domesticRobots.map((pic) => {
                      return (
                        <div className="img">
                          <Link to={`/products/${data[4].category}`}>
                            <img
                              src={pic.img}
                              alt=""
                              onClick={() => IndexHnadler(4)}
                            />
                          </Link>
                        </div>
                      );
                    })} */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float1"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float2"
                  />
                </div>
                <div className="card-body">
                  <h4>Domestic robots</h4>
                  <p className="visible-text">
                    Our company specializes in domestic robots. These robots are
                    designed to assist with tasks around the home, such as
                    vacuuming, mopping, and dusting. Our domestic robots are
                    some of the most advanced on the market, and they are
                    perfect for busy families who want to outsource ...
                  </p>
                  <p className="hidden-text">
                    Our company specializes in domestic robots. These robots are
                    designed to assist with tasks around the home, such as
                    vacuuming, mopping, and dusting. Our domestic robots are
                    some of the most advanced on the market, and they are
                    perfect for busy families who want to outsource some of
                    their cleaning duties. <br />
                    <br />
                    In addition to vacuum cleaners, we also offer robotic mops
                    and window cleaners. Our domestic robots are quiet,
                    efficient, and easy to use, and they come with various
                    features that make them perfect for any home. Whether you're
                    looking for a robot that can vacuum your floors or one that
                    can clean your windows, our company has the perfect solution
                    for you.
                  </p>
                  <input
                    type="checkbox"
                    id="read8"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <label htmlFor="read8" className="reveal-btn">
                    READ MORE
                  </label>
                </div>
              </div>
            </div>
            <div className="col animate hook2">
              <div className="card">
                <div className="card-header">
                  <div className="grid">
                    {/* {robotImages.petRobots.map((pic) => {
                      return (
                        <div className="img">
                          <Link to={`/products/${data[6].category}`}>
                            <img
                              src={pic.img}
                              alt=""
                              onClick={() => IndexHnadler(6)}
                            />
                          </Link>
                        </div>
                      );
                    })} */}
                  </div>
                  <img
                    src={require("../../assets/Vector Smart Object1 copy 9.png")}
                    alt=""
                    className="float2"
                  />
                  <img
                    src={require("../../assets/Vector Smart Object copy 9.png")}
                    alt=""
                    className="float1"
                  />
                </div>
                <div className="card-body">
                  <h4>Pet Robots</h4>
                  <p className="visible-text">
                    Robot pets have scientifically been shown to be excellent
                    companions for humans, especially in situations like those
                    we have experienced within the pandemic. For elderly,
                    disabled and people who are isolated and alone, the robot
                    can be of great comfort in the absence of ...
                  </p>
                  <p className="hidden-text">
                    Robot pets have scientifically been shown to be excellent
                    companions for humans, especially in situations like those
                    we have experienced within the pandemic. For elderly,
                    disabled and people who are isolated and alone, the robot
                    can be of great comfort in the absence of interactions with
                    humans. They have been demonstrated to increase Oxitocin,
                    and other hormones and neurotransmitters, that were thought
                    could only come from living companions. Robot pets have been
                    found to decrease elderly dementia patients’ anxiety,
                    stress, and use of psychoactive and pain medications.
                  </p>
                  <input
                    type="checkbox"
                    id="read9"
                    className="reveal-toggler"
                  />
                </div>
                <div className="card-footer">
                  <label htmlFor="read9" className="reveal-btn">
                    READ MORE
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid video2 py-3 px-3">
        <div className="container">
          <p> </p>
        </div>
      </div>

      <div className="container-fluid sec2 ">
        <img
          src={require("../../assets/Vector Smart Object copy 8.png")}
          alt=""
          className="bg1"
        />
        <img
          src={require("../../assets/Vector Smart Object.png")}
          alt=""
          className="bg2"
        />
        <div className="container">
          <h2>SERVICE WE PROVIDE</h2>
          <p className="pb-5 pt-2">
            We provide a host of different services that will instill confidence
            with your new robots.!
          </p>
          <div className="row justify-content-around align-items-center">
            <div className="col-lg-5 col-sm-8 animate hook4 position-relative overflow-hidden py-6">
              <img
                src={require("../../assets/predicting.png")}
                alt=""
                srcSet=""
              />
              <div className="anim"></div>
            </div>
            <div className="col-lg-6 col-sm-8 text py-3 animate hook2">
              <h3>Setup and Delivery</h3>
              <p className="visible-text">
                When you receive your robot, the first thing you'll need to do
                is set it up. Depending on your chosen model, this could be a
                simple or more complex process. We'll provide you with all the
                instructions you need and online support if you have any
                questions. Once your robot is up and running, we'll give you
                comprehensive training on all its features. This will help you
                to get the most out of your new companion. ...
              </p>
              <p className="hidden-text">
                When you receive your robot, the first thing you'll need to do
                is set it up. Depending on your chosen model, this could be a
                simple or more complex process. We'll provide you with all the
                instructions you need and online support if you have any
                questions. Once your robot is up and running, we'll give you
                comprehensive training on all its features. This will help you
                to get the most out of your new companion. You'll learn to use
                its basic functions and more advanced features such as
                programming and customizing its behavior. <br />
                <br />
                We want you to be comfortable with your robot, so we'll take the
                time to make sure you understand everything. By the end of the
                training, you'll be an expert on your new robot and ready to
                start enjoying all its benefits. Most robots will come with an
                android screen, so getting to know this menu will be a must. The
                first thing you'll want to do is navigate to the settings menu.
                From here, you can adjust various aspects of your robot's
                behavior.
                <br />
                <br />
                You can choose which programs to install on your robot. If
                you're adventurous, you can explore the wide world of android
                apps. There are thousands of apps available, many designed
                specifically for robots. Read the reviews before downloading
                anything.
              </p>
              <input type="checkbox" id="read1" className="reveal-toggler" />
              <label htmlFor="read1" className="reveal-btn">
                READ MORE
              </label>
            </div>
          </div>
          <div className="row justify-content-around align-items-center flex-wrap-reverse">
            <div className="col-lg-6 col-sm-8 text py-3 animate hook1">
              <h3>Program Coding</h3>
              <p className="visible-text">
                Before you buy a robot, it is important to consider what tasks
                you need it to perform and how much space you have available.
                You also want to think about whether you need a robot that can
                move around freely or one that is stationary. Our team can help
                you to assess your needs and choose the right model for your
                home or office. We also offer a comprehensive set-up service, so
                you can be sure your new robot ...
              </p>
              <p className="hidden-text">
                Before you buy a robot, it is important to consider what tasks
                you need it to perform and howimport RevealButton from
                './RevealButton'; much space you have available. You also want
                to think about whether you need a robot that can move around
                freely or one that is stationary. Our team can help you to
                assess your needs and choose the right model for your home or
                office. We also offer a comprehensive set-up service, so you can
                be sure your new robot will be up and running smoothly.
                <br />
                <br />
                We provide ongoing support and maintenance, so you can always
                keep your robot in peak condition. Whether you're looking for a
                basic model or a top-of-the-line machine, our team can help you
                to find the perfect solution for your needs. That’s why we
                provide programming and repair services for our clients. Our
                team is well-versed in several coding languages, so we can help
                with whatever robot you might need. We're also updating our
                services to ensure we provide the best care for your robot.
              </p>
              <input type="checkbox" id="read2" className="reveal-toggler" />
              <label htmlFor="read2" className="reveal-btn">
                READ MORE
              </label>
            </div>
            <div className="col-lg-5 col-sm-8 animate hook4 position-relative overflow-hidden py-6">
              <img
                src={require("../../assets/machine-learning.png")}
                alt=""
                srcSet=""
              />
              <div className="anim anim2"></div>
            </div>
          </div>
          <div className="row justify-content-around align-items-center margin-botttom">
            <div className="col-lg-5 col-sm-8 animate hook4 position-relative overflow-hidden py-6">
              <img
                src={require("../../assets/automation.png")}
                alt=""
                srcSet=""
              />
              <div className="anim anim3"></div>
            </div>
            <div className="col-lg-6 col-sm-8 text py-3 animate hook2 ">
              <h3>Repairs and Maintenance</h3>
              <p className="visible-text">
                When your robot needs repairs, don't worry. Roche Robots has you
                covered. We offer high-quality services to our customers in
                preventive and corrective maintenance, diagnosis, and equipment
                repair. We want to ensure your robot is always up and running so
                you can continue benefiting from all it offers. We know you're
                busy, so we make it easy for you...
              </p>
              <p className="hidden-text">
                When your robot needs repairs, don't worry. Roche Robots has you
                covered. We offer high-quality services to our customers in
                preventive and corrective maintenance, diagnosis, and equipment
                repair. We want to ensure your robot is always up and running so
                you can continue benefiting from all it offers. We know you're
                busy, so we make it easy for you. You can either bring your
                robot to us, or we can come to you. Our team is dedicated to
                providing you with the best possible experience.
              </p>
              <input type="checkbox" id="read3" className="reveal-toggler" />
              <label htmlFor="read3" className="reveal-btn">
                READ MORE
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRobot;
