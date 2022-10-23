import React from 'react';
import home  from '../../assets/Homepage Sm.mp4';


const HomeVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={home} type="video/mp4" />
                </video>
        </>
    );
};

export default HomeVideo;