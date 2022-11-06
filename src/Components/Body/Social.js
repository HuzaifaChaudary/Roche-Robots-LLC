import React, { useEffect } from 'react';
import {  } from 'react-router-dom';
import links from '../allData/SocialLinks';
import './social.css'

const Social = () => {
  useEffect(() => {
    var btncontainer = document.querySelector(".btncontainer");

    window.onscroll = () => {
      btncontainer.classList.add("hidden");
      const factor = (window.innerHeight + btncontainer.clientHeight) / 2;
      if (window.scrollY > factor) {
        btncontainer.classList.remove("hidden");
      }
    };

  }, [])

  return (
    <div className='btncontainer hidden'>
      <ul>
        {
          links.map(data => <a 
                        href={data.src}
                        key={links.src}
                        target='blank'>
                      <li>
                        {data.icon}
                      </li>
                    </a>




          )
        }
      </ul>

    </div>
  );
};

export default Social;