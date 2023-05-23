import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import ct1 from '../../assets/home/slide1.jpg';
import ct2 from '../../assets/home/slide2.jpg';
import ct3 from '../../assets/home/slide3.jpg';
import ct4 from '../../assets/home/slide4.jpg';

const Category = () => {
  return (
    <div className="max-w-screen-lg m-auto my-7">
      
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={ct1} alt="" /> 
            <h3 className="text-2xl font-semibold text-center -mt-10 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={ct2} alt="" />
        <h3 className="text-2xl font-semibold text-center -mt-10 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={ct3} alt="" />
        <h3 className="text-2xl font-semibold text-center -mt-10 text-white">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={ct4} alt="" />
        <h3 className="text-2xl font-semibold text-center -mt-10 text-white">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
        <img src={ct4} alt="" />
        <h3 className="text-2xl font-semibold text-center -mt-10 text-white">desserts</h3>
        </SwiperSlide>
        
      </Swiper>
      
    </div>
  );
};

export default Category;
