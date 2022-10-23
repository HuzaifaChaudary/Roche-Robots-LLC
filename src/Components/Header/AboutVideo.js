import React from 'react';
import about  from '../../assets/About Us Page Sm.mp4';


const AboutVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={about} type="video/mp4" />
                </video>
        </>
    );
};

export default AboutVideo;