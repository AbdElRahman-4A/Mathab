import React from "react";
import "./About.css";
import logo from "../../image/logo.png";
export const AboutUs = () => {
  return (
    <>
      <section className="aboutus " id="about">
        <div className="container  p-5">
          <div className=" text-center  p-5 fw-bold text-white ">
            <div className="">
              <div className="an d-flex justify-content-center align-items-center">
                <h2 className="h2 aboutTitle ">من نحن</h2>
              </div>
            </div>
            <div className="titleLine  mt-3 mb-3"></div>
          </div>
          <div className="row   d-flex aboutarea  ">
            <div className="col-md-12 p-3   ">
              <div className="text-white text-center mb-5 animate__fadeInDownBig">
                <img src={logo} className=" pt-3 m-auto imageHandle" />
                <h2>مـــــــثاب</h2>
                <h3>يالله حيّهم</h3>
              </div>
              <div className="group ">
                <div className="d-flex justify-content-center text-white">
                  <div className="text-center p-3 fw-bold">
                    <h4 className="fw-bold">
                      مـــــــثاب هي منصة الإلكترونية لحجز شقق سكنية فاخرة
                      بخدمات متكاملة
                    </h4>
                    <br />
                    مثاب تخدم المملكة العربية السعودية بما يواكب رؤية حكومتنا
                    الرشيدة في الارتقاء بمستوى الايواء والمساكن في قطاعي السياحة
                    <br />
                    والترفيه من خلال توفير شقق سكنية فاخرة بخدمات متكاملة
                    للزيارات القصيرة والمتوسطة والطويلة الأجل على كيف كيفك
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
