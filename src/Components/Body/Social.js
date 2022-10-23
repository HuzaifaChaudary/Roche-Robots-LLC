import React, { useEffect } from 'react';
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
                        href={data.link}
                        key={links.src}>
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