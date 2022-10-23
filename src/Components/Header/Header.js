import React from 'react';
import BusinessRobot from './BusinessRobot';
import HeaderVideo from './HeaderVideo';
import Navbar from './Navbar';


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderVideo  ></HeaderVideo>
            <BusinessRobot></BusinessRobot>
        </div>
    );
};

export default Header;