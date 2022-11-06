import React from 'react';
import About from '../../Components/Body/About';
import Social from '../../Components/Body/Social';
import { Routes, Route } from 'react-router-dom';
import PageHome from '../Home/PageHome';
import PageAbout from '../About/PageAbout';
import PageContact from './Contact/PageContact';
import PageService from './../Service/PageService';
import PageDemonstration from '../Demonstration/PageDemonstration';
import PageProduct from './../Product/PageProduct';
import CovidPage from '../Covid-19/CovidPage';


const MainBody = (props) => {
    const setIndex=(event)=>{
        props.onClickCategory(event);

    }
    return (
        <section >
            <img src={ require("../../assets/new.jpg")} alt=""  className='main-img'/>
            <section className='main-body'  >
            <Social></Social>
            <Routes>
            <Route path='/' element ={<PageHome setIndex={setIndex} />}/>
            <Route path='/about' element ={<PageAbout/>}/>
            <Route path='/products' element ={<PageProduct/>}/>
            <Route  path='/products/:pdkey' element ={<PageProduct/>}/>
            <Route path='/services' element ={<PageService/>}/>
            <Route path='/demonstration' element ={<PageDemonstration/>}/>
            <Route path='/covid' element ={<CovidPage/>}/>
            <Route path='/contact' element ={<PageContact/>}/>
            </Routes>

            </section>
            <About></About>

        </section>
    );
};

export default MainBody;