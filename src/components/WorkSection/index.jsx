import { WorkDiv } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import img1 from "../../assets/work1.png";
import img2 from "../../assets/work2.png";
import img3 from "../../assets/work3.png";
import img4 from "../../assets/work4.png";

const WorkSection = () => {
  return (
    <WorkDiv>
      <h1>Works:</h1>
      <div className="div-carrousel">
        <Swiper
          className="swiper"
          modules={[Navigation, Pagination, EffectFade]}
          effect={"fade"}
          grabCursor={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide className="swiper-slide">
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </WorkDiv>
  );
};

export default WorkSection;
