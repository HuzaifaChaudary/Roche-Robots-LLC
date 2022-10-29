import React from 'react';
import BusinessRobot from './BusinessRobot';
import HeaderVideo from './HeaderVideo';
import Navbar from './Navbar';


const Header = (props) => {
    const categoryIndex=(index)=>{
        props.onClickCategory(index);
    }
    return (
        <div>
            <Navbar onct={categoryIndex} ></Navbar>
            <HeaderVideo  ></HeaderVideo>
            <BusinessRobot></BusinessRobot>
        </div>
    );
};

export default Header;