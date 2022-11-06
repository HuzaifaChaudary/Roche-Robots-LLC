import React from 'react';
import OurRobot from './OurRobot';
import RotateAnnimation from './RotateAnnimation';

const PageHome = (props) => {

    const SelectCt=(event)=>{
        props.setIndex(event);
    }
    
    
    return (
        <div>
        <RotateAnnimation></RotateAnnimation>
        <OurRobot onCtSelect={SelectCt}></OurRobot>
            
        </div>
    );
};

export default PageHome;