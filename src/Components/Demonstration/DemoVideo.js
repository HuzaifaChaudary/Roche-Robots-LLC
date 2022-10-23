import React from 'react';
import demo from '../../assets/Demonstration Page Sm.mp4'


const DemoVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={demo} type="video/mp4" />
                </video>
        </>
    );
};

export default DemoVideo;