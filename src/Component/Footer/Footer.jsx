import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
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
  return (
    <>
      <footer className="">
        <div className="container bgFooter text-white ">
          <div className="row text-center  d-flex justify-content-center ">
            <div className="col-md-3  ">
              <h5 className="mb-4 fw-bold text-warning">الشقق </h5>
              <p className="text-white" onClick={ellanRoom}>
                الين حطين
              </p>
              <p className="text-white handlLink" onClick={safaRooms}>
                صفا عرقة
              </p>
              <p className="text-white handlLink" onClick={bedorRoom}>
                بدور حطين
              </p>
              <p className="text-white handlLink" onClick={NahelRoom}>
                نخيل - تركي 1
              </p>
            </div>
            <div className="col-md-3   ">
              <h5 className="mb-4 fw-bold text-warning">تواصل معانا</h5>
              <p className="handlLink">
                رقم الموبيل
                <br /> +966 112350297
              </p>

              <p className="handlLink">
                راسلنا على
                <br /> care@ataatre.com
              </p>
              <p className="handlLink">
                العنوان
                <br /> 4599 طريق الفرع الدائري الشمالي - النخيل - الرياض -
                المملكة العربية السعودية
              </p>
            </div>
            <div className="col-md-3  ">
              <h5 className="mb-4 fw-bold text-warning">من نحن</h5>
              <p className="handlLink">
                مثاب تخدم المملكة العربية السعودية بما يواكب رؤية حكومتنا
                الرشيدة في الارتقاء بمستوى الايواء والمساكن في قطاعي السياحة
                والترفيه من خلال توفير شقق سكنية فاخرة بخدمات متكاملة للزيارات
                القصيرة والمتوسطة والطويلة الأجل على كيف كيفك
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
