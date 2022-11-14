import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Partners from "../Data/Partner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./OurPartner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const OurPartner = () => {
  return (
    <div className="partner">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {Partners.map((pt) => (
          <SwiperSlide key={pt.id} className="bullet">
            <img src={pt.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default OurPartner;
