import React ,{useEffect} from 'react';
import './PageAbout.css';

const PageAbout = () => {
  useEffect(()=>{
    const readMore = document.querySelectorAll(".reveal-toggler");
    const readMoreLabel = document.querySelectorAll(".reveal-btn");
    const visibleText = document.querySelectorAll(".visible-text");
    const hiddenText = document.querySelectorAll(".hidden-text");
    
    readMore.forEach((el, index) => {
      el.onchange = () => {
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

  } ,[] );
  
  

    return (
        <section className='about-page'>
                  <div className="container-fluid sec2 py-5">
        <img src={ require("../../assets/Vector Smart Object copy 8.png")} alt="" className="bg1" />
        <img src={ require("../../assets/Vector Smart Object.png")} alt="" className="bg2" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-12 animate hook4">
                <img src={require("../../assets/standrobot.2de6cf10edb77051ecd5-min.png")} alt="" />
            </div>
            <div className="col-md-6 col-12 py-5 px-3 animate hook2 text">
              <h2>ABOUT US</h2>
              <p className="visible-text">
                <strong>
                  “The government adoption of AI will not bring about a
                  government being run by robots. Instead, our government will
                  continue to be run by people, with help from algorithms
                  dramatically improving government services for all ... the
                  world.”
                  <br />
                  — Will Hurd.
                </strong>
                <br /><br />

                At Roche Robots, we believe that robotics will improve societal
                well-being and solve political and enviromental issues. Robotics
                can change the world by manufacturing abundance for all. Robots
                help bridge staff shortages 24 hours a day, and are capable of
                providing real equality for future generations. Perhaps the only
                way to survive political and economic conflict is that
                government and economic policies are placed in the hands of
                robots. <br /><br />

                Roche Robots is dedicated to providing innovative robotic
                solutions that make a profound difference in our world.
              </p>
              <p className="hidden-text">
                <strong>
                  “The government adoption of AI will not bring about a
                  government being run by robots. Instead, our government will
                  continue to be run by people, with help from algorithms
                  dramatically improving government services for all ... the
                  world.”
                  <br />
                  — Will Hurd.
                </strong>
                <br /><br />

                At Roche Robots, we believe that robotics will improve societal
                well-being and solve political and enviromental issues. Robotics
                can change the world by manufacturing abundance for all. Robots
                help bridge staff shortages 24 hours a day, and are capable of
                providing real equality for future generations. Perhaps the only
                way to survive political and economic conflict is that
                government and economic policies are placed in the hands of
                robots. <br /><br />

                Roche Robots is dedicated to providing innovative robotic
                solutions that make a profound difference in our world.
                <br /><br />
                Our sales department are trained to assist you with the best
                options for your needs, whether it be a disinfecting robot
                especially to stamp out COVID-19, or robots to take your
                temperature and blood pressure. We have security robots that can
                patrol your buildings, and robots that can go into elevators and
                deliver food, towels or mail to your room. Our telepresence
                robots allow you to remotely inspect your warehouses or
                factories. And our child care robots can read you a story before
                bed, entertain your children with singing and dancing, or act as
                a baby monitor when baby is sleeping. Let our quality staff
                direct you to the choice that’s right for you.
                <br /><br />
                One of our primary goals is to find robots that are more
                adaptive and easier to use. We are constantly working on
                reviewing robotic technology so as to be more accessible to
                everyone. Our manufacturers are passionate about making a
                difference, and are constantly exploring new ways to use
                robotics to improve society.
                <br /><br />
                We have a solid commitment to customer satisfaction. We work
                closely with our clients to ensure they get the most out of our
                robotic solutions. Our Company also offers training and support
                services so our clients can get up to speed quickly and start
                seeing results.
                <br /><br />
                Our company is definitely worth considering if you're looking
                for an innovative robotics company committed to making a
                difference. We have a team with a wealth of experience and
                knowledge and always strive to create better solutions for
                tomorrow.
              </p>
              <input type="checkbox" id="read1" className="reveal-toggler" />
              <label for="read1" className="reveal-btn">READ MORE</label>
            </div>
          </div>
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-6 col-12 animate hook4">
              <img src={ require("../../assets/sitrobot.fce50700f67200b24fe5-min.png")} alt="" />
            </div>
            <div className="col-md-6 col-12 py-5 px-3 animate hook2 text">
              <h2>OUR VISION</h2>
              <p className="visible-text">
                Our vision at Roche Robots is to put robots into every corner of
                Australia; homes, schools, offices, hospitals, aged care
                facilities, NDIS, and everywhere in between.
                <br /><br />
                We want to make sure that everyone has access to the benefits
                that robots can bring. Whether helping out around the house,
                providing companionship for the elderly or disabled, or
                assisting in educational and therapeutic settings, we believe
                that robots have a lot to offer.
                <br /><br />
                We are committed to making Roche Robots the best possible
                resource for information on robots and robotics technology in
                Australia. We aim to provide clear and concise information on
                everything from choosing the right robot for your needs to
                setting it up and using it effectively. We provide access
                directly with our manufacturers who are always more than happy
                to guide the setup process and offer the best advice.
              </p>
              <p className="hidden-text">
                Our vision at Roche Robots is to put robots into every corner of
                Australia; homes, schools, offices, hospitals, aged care
                facilities, NDIS, and everywhere in between.
                <br /><br />
                We want to make sure that everyone has access to the benefits
                that robots can bring. Whether helping out around the house,
                providing companionship for the elderly or disabled, or
                assisting in educational and therapeutic settings, we believe
                that robots have a lot to offer.
                <br /><br />
                We are committed to making Roche Robots the best possible
                resource for information on robots and robotics technology in
                Australia. We aim to provide clear and concise information on
                everything from choosing the right robot for your needs to
                setting it up and using it effectively. We provide access
                directly with our manufacturers who are always more than happy
                to guide the setup process and offer the best advice.
                <br /><br />
                We also want to help people connect with each other, so we will
                host events and workshops where people can share their
                experiences and learn from each other. We hope everyone in
                Australia and around the world will enjoy the benefits of
                robotics technology through Roche Robots!
                <br /><br />
                We believe that robotics is the future of Australia, and we are
                dedicated to making it a reality. Our team is passionate about
                robotics, and we are committed to making our vision a reality.
                We are working hard to develop innovative new robots that can be
                used in various settings and applications. We hope you will join
                us on this journey and help us make Australia a world leader in
                robotics. If you want to learn more about Roche Robots and our
                vision for the future, please visit our website or contact us
                today.
              </p>
              <input type="checkbox" id="read2" className="reveal-toggler" />
              <label for="read2" className="reveal-btn">READ MORE</label>
            </div>
          </div>
        </div>
      </div>
      <div className="sec3 container-fluid">
        <div className="container">
          <div className="row">
            <h3>
              Robotics is growing exponentially and can potentially improve our
              quality of life in many ways. Some ways that our robotics may
              enhance your quality of life include:
            </h3>
          </div>
          <div className="row row-cols-lg-2 row-cols-1">
            <div className="quality animate hook3">
              <img src={require("../../assets/improveEdu.png")} alt="" />
              <div>
                <h4>Improving Education</h4>
                <p>
                  Robotics can play an important role in education, from early
                  childhood education to university-level studies. Robotics can
                  help students learn problem-solving skills, critical thinking,
                  and creativity.
                </p>
              </div>
            </div>
            <div className="quality animate hook3">
              <img src={require("../../assets/improveManu.png")} alt="" />
              <div>
                <h4>Improving Manufacturing</h4>
                <p>
                  Robotics can help improve manufacturing processes, making them
                  faster, more accurate, and more efficient. Robotics can also
                  help reduce waste and pollution.
                </p>
              </div>
            </div>
            <div className="quality animate hook3">
              <img src={require("../../assets/healthcare.png")} alt="" />
              <div>
                <h4>Enhancing Healthcare</h4>
                <p>
                  Robotics can be used in various healthcare applications, from
                  assisting surgeons during surgery to providing patient
                  rehabilitation therapy. Robotics can help improve accuracy and
                  precision, as well as safety.
                </p>
              </div>
            </div>
            <div className="quality animate hook3">
              <img src={require("../../assets/boortingEcon.png")} alt="" />
              <div>
                <h4>Boosting The Economy</h4>
                <p>
                  Robotics have the potential to create new jobs and businesses
                  and stimulate economic growth.
                </p>
              </div>
            </div>
            <div className="quality animate hook3">
              <img src={require("../../assets/ecohealth.png")} alt="" />
              <div>
                <h4>Enhancing Eco-Health</h4>
                <p>
                  Robotics can be used in various ways to help protect the
                  environment, from monitoring and controlling pollution to
                  cleaning up hazardous waste sites.
                </p>
              </div>
            </div>
            <div className="quality animate hook3">
              <img src={require("../../assets/improveCom.png")} alt="" />
              <div>
                <h4>Improving Communication</h4>
                <p>
                  Robotics can be used to develop new communication
                  technologies, including advanced prosthetic devices,
                  brain-computer interfaces, and human-robot interactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid sec4">
        <div className="container">
          <h3>
            Our team has extensive robotic experience, allowing us to source
            reliable and effective robots that make your life easier. Regardless
            of the robot you want, we have a solution that will meet your needs.
          </h3>
        </div>
      </div>

        </section>
    );
};

export default PageAbout;