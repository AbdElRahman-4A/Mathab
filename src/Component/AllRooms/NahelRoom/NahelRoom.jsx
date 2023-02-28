import React from "react";
import Slider from "react-slick";
import "../BedorRoom/BedorRoom.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ACIcon from "../image/air-conditioner.png";
import TvIcon from "../image/tv.png";
import WifiIcon from "../image/wifi.png";

import imgMaster from "../image/nahelImg/imgMaster.jpeg";
import img1 from "../image/nahelImg/1.jpeg";
import img2 from "../image/nahelImg/2.jpeg";
import img3 from "../image/nahelImg/3.jpeg";
import img4 from "../image/nahelImg/4.jpeg";
import img5 from "../image/nahelImg/5.jpeg";
import img6 from "../image/nahelImg/6.jpeg";

export const NahelRoom = () => {
  const [order, setOrder] = useState({
    check_in: "",
    check_out: "",
    num_of_person: "",
  });

  const submitOrder = async (e) => {
    e.preventDefault();
    window.location = `https://wa.me/0570807803?text=%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D8%AF%D8%AE%D9%88%D9%84%20:%20${order.check_in}%0A%D8%AA%D8%A7%D8%B1%D9%8A%D8%AE%20%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%AF%D8%B1%D8%A9%20:%20${order.check_out}%0A%D8%B9%D8%AF%D8%AF%20%D8%A7%D9%84%D8%A7%D9%81%D8%B1%D8%A7%D8%AF%20:%20${order.num_of_person}%0A%D8%A7%D8%B3%D9%85%20%D8%A7%D9%84%D8%B4%D9%82%D8%A9%20:%20%D9%86%D8%AE%D9%8A%D9%84%20-%20%D8%AA%D8%B1%D9%83%D9%8A%201`;
  };

  const getInput = (e) => {
    const myOrder = { ...order };
    myOrder[e.target.name] = e.target.value;
    setOrder(myOrder);
    console.log(myOrder);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <section className="roomDetail ">
        <div className="container ">
          <div className="row  m-auto p-5">
            <div className="col-md-6   p-3">
              <div className="">
                <Slider {...settings}>
                  <div>
                    <img src={imgMaster} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img1} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img2} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img3} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img4} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img5} alt="" className="w-100" />
                  </div>
                  <div>
                    <img src={img6} alt="" className="w-100" />
                  </div>
                </Slider>
              </div>

              <form
                onSubmit={submitOrder}
                className=" orderForm mt-5 p-5 handleForm"
                dir="rtl"
              >
                <h3 className="text-center">أحجز الان</h3>
                <div className=" row d-flex justify-content-center ">
                  <div className="input-data col-md-4 ">
                    <label htmlFor="check_in">معاد الدخول : </label>
                    <input
                      onChange={getInput}
                      type="date"
                      className="form-control  my-2"
                      name="check_in"
                    />
                  </div>
                  <div className="input-data   col-md-4">
                    <label htmlFor="check_out">معاد المغادره : </label>
                    <input
                      onChange={getInput}
                      type="date"
                      className="form-control   my-2"
                      name="check_out"
                    />
                  </div>
                  <div className="input-data col-md-4 ">
                    <label htmlFor="num_of_person"> عدد الاشخاص : </label>
                    <input
                      onChange={getInput}
                      type="number"
                      className="form-control my-2"
                      name="num_of_person"
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-warning my-3 px-4 py-3 sendBtn">
                    ارسال
                  </button>
                </div>
              </form>
            </div>

            <div className="col-md-6  m-auto " dir="rtl">
              <div className=" btnPrice  rounded-3 text-center  p-2">
                <div className="card-button">
                  <h2 className="m-auto p-2 handleRoom animate__bounceIn fw-bold">
                    نخيل - تركي 1
                  </h2>
                </div>
              </div>
              <div>
                <div className="iconsRooms p-2 d-flex justify-content-center w-100">
                  <img src={ACIcon} className="mx-4" alt="" />
                  <img src={TvIcon} className="mx-4" alt="" />
                  <img src={WifiIcon} className="mx-4" alt="" />
                </div>
                <hr />
              </div>
              <div className="row d-flex pt-3">
                <div
                  className="col-md-2 text-center
                   "
                >
                  <h4> الوصف </h4>
                </div>
                <div className="col-md-9 ">
                  <p className="fw-bold ">
                    في قلب حي النخيل - بوابة الجامعة الخامسة هذا المسكن صمم
                    لتظيف روح الهدوء والراحة للنزلاء بحيث تمتاز بخدمة الدخول
                    الذاتي والانترنت وتحتوي على 2 غرف نوم ومطبخ و 2 دورات مياة
                    وصالة واسعة وتلفزيون بنظام صوتي ويوجد اشتراك على برنامج
                    نتفلكس وشاهد VIP وايضا مطبخ متكامل مايكرويف . ثلاجة . آلة
                    قهوة . فرن . وغلاية ماء . غسالة ملابس والعديد من المزايا مثل
                    موقف سيارة خاص بسماحة اجمالية 100م الدخول الساعة الثالثة
                    مساءً الخروج الساغة الحادية والعشر صباحاً سوف تصلكم رسالة
                    الى الجوال المسجل تشرح طريقة الدفع ودخول الشقة تو ما نوّر
                    المكان
                  </p>
                  <hr />
                </div>
              </div>

              <div className="row d-flex  ">
                <div
                  className="col-md-2 text-center 
                   "
                >
                  <h4> الخصائص </h4>
                </div>
                <div className="col-md-9 fw-bold   ">
                  <p className="mb-1">
                    <span className="h5">مساحه الشقه :</span>
                    <span className="text-danger h5">100 متر/مربع </span>
                  </p>
                  <p className="mb-1">
                    <span className="h5">عدد الاشخصاص :</span>
                    <span className="text-danger h5">(5) </span>
                  </p>

                  <hr />
                </div>
              </div>

              <div className="row d-flex">
                <div
                  className="col-md-2 text-center
                   "
                >
                  <h4> مواعيد </h4>
                </div>
                <div className="col-md-9 fw-bold  ">
                  <p className="mb-1">
                    <span className="h5">الدخول :</span>
                    <span className="text-danger h5">03:00 </span> مسائا
                  </p>
                  <p className="mb-1">
                    <span className="h5">المغادرة :</span>
                    <span className="text-danger h5">11:00 </span> صباحا
                  </p>

                  <hr />
                </div>
              </div>

              <div className="row d-flex">
                <div
                  className="col-md-2 text-center
                   "
                >
                  <h4> الاسعار </h4>
                </div>
                <div className="col-md-9 fw-bold  ">
                  <p className="mb-1">
                    <span className="h5">اليوم :</span> يبداء من
                    <span className="text-danger h5">900 </span> ريال
                  </p>
                  <p className="mb-1">
                    <span className="h5">الشهر :</span> يبداء من
                    <span className="text-danger h5">15000 </span> ريال
                  </p>

                  <hr />
                </div>
              </div>

              <div className="row d-flex">
                <div
                  className="col-md-2 text-center
                   "
                >
                  <h5> الموقع </h5>
                </div>
                <div className="col-md-9 d-flex justify-content-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.9261066656435!2d46.60866562919602!3d24.73702569900702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee2144910d8c7%3A0xcceaf611497546af!2zUkdOQTc0NzQsIDc0NzQgU2FsaW0gSWJuIE1hcWlsLCAzOTEz2Iwg2K3ZiiDYp9mE2YbYrtmK2YTYjCBSaXlhZGggMTIzOTMsIFNhdWRpIEFyYWJpYQ!5e0!3m2!1sen!2sus!4v1677610832357!5m2!1sen!2sus"
                    width="600"
                    height="450"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
