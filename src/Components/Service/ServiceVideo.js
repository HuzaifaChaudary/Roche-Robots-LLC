import React from 'react';
import service from '../../assets/Services Page Sm.mp4'

const ServiceVideo = () => {
    return (
        <>
                <video  loop={true} id="headerVideo">
                    <source id= "video" src={service} type="video/mp4" />
                </video>
        </>
    );
};

export default ServiceVideo;