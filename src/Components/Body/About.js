import React, { useEffect, useState } from 'react';
import '../allData/glass';
import './About.css';
import AboutGlass from '../Home/AboutGlass';
import { Route, Routes } from 'react-router-dom';
import Glass from './Contact/Glass';
import ServiceGlass from '../Service/ServiceGlass';
import ProductGlass from '../Product/ProductGlass';

const About = () => {
  var view = ' 0 0 1440 320'
  const [width, setWidth] = useState(view);

  const [size, setSize] = useState(window.innerWidth);
  const detect = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', detect);
    if (size < 1445) {
      setWidth('0 0 1440 317')
    }

    else if (size < 450) {
      setWidth('0 0 1440 316')
    }
    else if (size < 550) {
      setWidth('0 0 1440 318')
    }
    else if (size < 950) {
      setWidth('0 0 1440 318')
    }
    else if (size < 1100) {
      setWidth('0 0 1440 316')
    }
    else if (size < 1200) {
      setWidth('0 0 1440 318')
    }
    else if (size < 1300) {
      setWidth('0 0 1440 319')
    }
    else {
      setWidth('0 0 1440 320')
    };
    return () => {
      window.removeEventListener('resize', detect)
    }
  }, [size]);

  return (
    <div >
      <div class="curve">
        <svg id='svg' xmlns="../../assets/cd.jpg" viewBox={width}><path fill="#ffffffe9" fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,106.7C480,128,600,160,720,181.3C840,203,960,213,1080,197.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>


      </div>
      <Routes>
        <Route path='/' element={<AboutGlass />} />
        <Route path='/about' element={<AboutGlass />} />
        <Route path='/products' element={<ProductGlass />} />
        <Route path='/products/:pdkey' element={<ProductGlass />} />
        <Route path='/services' element={<ServiceGlass />} />
        <Route path='/demonstration' element={<ServiceGlass />} />
        <Route path='/contact' element={<Glass />} />
      </Routes>




    </div>
  );
};

export default About;