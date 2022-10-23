import React from 'react';
import contact  from '../../assets/Contact Page Sm.mp4';


const ContactVideo = () => {
    return (
        <>
            <video loop={true} id="headerVideo">
                <source id="video" src={contact} type="video/mp4" />
            </video>


        </>
    );
};

export default ContactVideo;