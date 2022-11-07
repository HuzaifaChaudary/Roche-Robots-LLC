import React from 'react';
import data from '../allData/Data';


const CovidPage = () => {
    return (
        <div className='product'>
      <div className="catagory-name" id="three-container" >
        
        <h2 className='annimation'> {data[8].category} </h2>
      </div>
      <div className='container' >
      <iframe className='rounds' width="100%" height="500" src={`https://www.youtube.com/embed/Am1-Hg7dfuQ`}  title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>
          </div>

      <div className="container-fluid sec2 py-5">
        <div className="container py-3">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2>{data[8].robots[0].name}</h2>
              <h4>{ data[8].robots[0].shortDis} </h4>
            </div>
            <div className="col-md-6">
              <div className="rate">
                <img src={require("../../assets/RatingStars.png")} alt="" />
                <p id="rating">5</p>
              </div>
              <h3>Price: <span> {data[8].robots[0].price} </span></h3>
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
      <div className="container">
          <div className="row">
          <div className="col-md-6">
            <h4>AndyGirl - Demonstration of Features</h4>
          <iframe className='rounds' width="50%" height="200" src={`https://www.youtube.com/embed/Am1-Hg7dfuQ`}  title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>
                                  <h4>Description</h4>
              <p>AndyGirl belongs to Shenzhen All Intelligent Robot Technology Co. LTD (abbreviated as AI-Tech) in the “Andy” family of intelligent service robots. AndyGirl is an epidemic prevention, disinfection, sterilisation, purification unit. AndyGirl can kill and decompose bacteria spores, viruses and formaldehyde indiscriminately. AndyGirl is useful for homes, cars, shops, medical centres and hospitals.</p>


              </div>
              <div className="col-md-6">
              </div>
              </div>
        </div>



              </div>
    );
};

export default CovidPage;