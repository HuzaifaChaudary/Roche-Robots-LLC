import React, {  useState } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import videoSlider from '../allData/videoSlider';
import './VideoCarusol.css';




const VideoCarusol = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
 <div>


    <Carousel activeIndex={index} onSelect={handleSelect} interval={null}    >
      {
        videoSlider && videoSlider.map((vd, key) => {
          return (
            <CarouselItem  key={vd.dis}>
              <h3 className="round2">{vd.title}</h3>
              <iframe className='round' width="100%" height="480" src={vd.video} title="YouTube video player"
                frameBorder="0" 
                  allowFullScreen></iframe>



            </CarouselItem>

          )
        }
        )
      }

    </Carousel>
    </div>


  );
}



export default VideoCarusol;