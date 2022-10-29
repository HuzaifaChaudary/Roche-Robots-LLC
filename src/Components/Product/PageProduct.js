import React, { useContext, useEffect, useState } from 'react';
import data from '../allData/Data';
import './Product.css';
import { CategoryContext } from './../../App';
const PageProduct = (props) => {
   const categoris = useContext(CategoryContext);
   const [slide ,setSlide]=useState(0);
   const plus=()=> setSlide(slide+1);

   
   const minus=()=> setSlide(slide-1);
  
  const [category ,setCategory]=useState(data[0]);
  useEffect(()=>{
    setCategory(data[categoris])
  },[categoris]);


    return (
        <div className='product'>
      <div className="catagory-name" id="three-container" >
        
        <h3 className="ct-name" id="here"> {category.category} </h3>
      </div>

      <div className="container-fluid sec2 py-5">
        <div className="container product-slider mb-5">
          <div >
          <iframe className='rounds' width="100%" height="480" src={`https://www.youtube.com/embed/${category.robots[slide].video[slide]}`}  title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>
          </div>
          <button className="product-slider-prev">
            <i className="fa-solid fa-angle-left" onClick={minus}></i>
          </button>
          <button className="product-slider-next">
            <i className="fa-solid fa-angle-right" onClick={plus}></i>
          </button>
        </div>
        <div className="container py-3">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2>{category.robots[slide].name}</h2>
              <h4>{ category.robots[slide].shortDis} </h4>
            </div>
            <div className="col-md-6">
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="" />
                <p id="rating">5</p>
              </div>
              <h3>Price: <span> {category.robots[slide].price} </span></h3>
            </div>
          </div>
          <div className="row justify-content-center buy-botton button-deck">
           <div className="col-md-4">
              <button className="cart">Add to Cart</button>
            </div>
            <div className="col-md-4">
              <a href="/" className="buy">Buy Now</a> 
              </div>
          </div>
        </div>
        
      </div>


              </div>
    

    );
};

export default PageProduct;