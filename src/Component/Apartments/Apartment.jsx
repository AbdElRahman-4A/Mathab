import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Apartments_module.css";
import nahel from "../../image/try.png";
import safa from "../../image/try1.png";
import bedor from "../../image/try2.png";
import ellan from "../../image/try3.png";
import { useNavigate } from "react-router-dom";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

 

export const Apartment = () => {
  const navigate = useNavigate();

  const bedorRoom = () => {
    navigate("bedorroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ellanRoom = () => {
    navigate("ellanroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const NahelRoom = () => {
    navigate("nahelroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const safaRooms = () => {
    navigate("safaRoom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const masterRooms = () => {
    navigate("masterrooms");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div className="row   handleSlider">
             <span onClick={masterRooms} className="d-flex justify-content-center">
              <Link className=" py-3 px-4 w-50 text-center m-auto titleApart  ">
                جميع الشقق
              </Link>
            </span>
           <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={4}
            initialSlide={0}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container "
          >
            <SwiperSlide>
              <img
                src={nahel}
                className="h-75 dropS"
                alt="slide_image"
                onClick={NahelRoom}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={safa}
                className="h-75 dropS"
                alt="slide_image"
                onClick={safaRooms}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={bedor}
                className="h-75 dropS"
                alt="slide_image"
                onClick={bedorRoom}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ellan}
                className="h-75 dropS"
                alt="slide_image"
                onClick={ellanRoom}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
