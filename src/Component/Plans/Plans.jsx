import React from "react";
import "./Plans.css";
import S1 from "../../image/Service3.png";
import S2 from "../../image/Service1.png";
import S3 from "../../image/Service2.png";
import S4 from "../../image/Service4.png";
import { Link, useNavigate } from "react-router-dom";
import head from "../../image/head.png";

export const Plans = () => {
  const navigate = useNavigate();

  const bedorRoom = () => {
    navigate("/bedorroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const ellanRoom = () => {
    navigate("/ellanroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const nahelRoom = () => {
    navigate("/nahelroom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const safaRooms = () => {
    navigate("/safaRoom");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className=" ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h2 className="text-center mb-3 ">اختر خطتك السعرية</h2>
              <div className="plansArea">
                <img src={head} alt="" className="" />
              </div>
              <div className="titleLine m-auto"></div>
            </div>
          </div>

          <div className="row p-3 mb-5  ">
            <div className="col-md-3 p-3 smallScale ">
              <div className=" btnPrice  rounded-3 text-center  p-2">
                <div className="card-buttonzz">
                  <h3 className=" m-auto text-warning titlePlans">بدورحطين </h3>
                </div>
              </div>
              <div className=" d-flex justify-content-center ">
                <img src={S3} alt="" className="w-100 mb-2 " />
              </div>
              <div className=" text-end   ">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h5 className="mb-3">تنظيف كامل للشقة بشكل اسبوعي</h5>
                    <h4 className="mb-2">
                      <span className="h2">
                        14000 <span className="h3"> ريال </span>
                      </span>
                    </h4>
                    <h5>سارٍ حتى شهر واحد</h5>
                  </li>
                </ul>
              </div>
              <div className=" btnPrice card-button rounded-3 text-center  p-2">
                <div className="">
                  <h3 className=" m-auto btnPlans" onClick={bedorRoom}>
                    <Link>ارحب</Link>{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 p-3 smallScale ">
              <div className=" btnPrice  rounded-3 text-center  p-2">
                <div className="card-buttonzz">
                  <h3 className=" m-auto text-warning titlePlans">
                    نخيل تركي 1
                  </h3>
                </div>
              </div>
              <div className=" d-flex justify-content-center ">
                <img src={S1} alt="" className="w-100 mb-2 " />
              </div>
              <div className=" text-end   ">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h5 className="mb-3">تنظيف كامل للشقة بشكل اسبوعي</h5>
                    <h4 className="mb-2">
                      <span className="h2">
                        15000 <span className="h3"> ريال </span>
                      </span>
                    </h4>
                    <h5>سارٍ حتى شهر واحد</h5>
                  </li>
                </ul>
              </div>
              <div className=" btnPrice card-button rounded-3 text-center  p-2">
                <div className="">
                  <h3 className=" m-auto btnPlans" onClick={nahelRoom}>
                    <Link>ارحب</Link>{" "}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-md-3 p-3 smallScale ">
              <div className=" btnPrice  rounded-3 text-center  p-2">
                <div className="card-buttonzz">
                  <h3 className=" m-auto text-warning titlePlans">صفا عرقة </h3>
                </div>
              </div>
              <div className=" d-flex justify-content-center ">
                <img src={S2} alt="" className="w-100 mb-2 " />
              </div>
              <div className=" text-end   ">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h5 className="mb-3">تنظيف كامل للشقة بشكل اسبوعي</h5>
                    <h4 className="mb-2">
                      <span className="h2">
                        15000 <span className="h3"> ريال </span>
                      </span>
                    </h4>
                    <h5>سارٍ حتى شهر واحد</h5>
                  </li>
                </ul>
              </div>
              <div className=" btnPrice card-button rounded-3 text-center  p-2">
                <div className="">
                  <h3 className=" m-auto btnPlans" onClick={safaRooms}>
                    <Link>ارحب</Link>{" "}
                  </h3>{" "}
                </div>
              </div>
            </div>

            <div className="col-md-3 p-3 smallScale ">
              <div className=" btnPrice  rounded-3 text-center  p-2">
                <div className="card-buttonzz">
                  <h3 className=" m-auto text-warning titlePlans">حطين الين</h3>
                </div>
              </div>
              <div className=" d-flex justify-content-center ">
                <img src={S4} alt="" className="w-100 mb-2 " />
              </div>
              <div className=" text-end   ">
                <ul dir="rtl" className="text-center">
                  <li style={{ listStyleType: "none" }}>
                    <h5 className="mb-3">تنظيف كامل للشقة بشكل اسبوعي</h5>
                    <h4 className="mb-2">
                      <span className="h2">
                        23000 <span className="h3"> ريال </span>
                      </span>
                    </h4>
                    <h5>سارٍ حتى شهر واحد</h5>
                  </li>
                </ul>
              </div>
              <div className=" btnPrice card-button rounded-3 text-center  p-2">
                <div className="">
                  <h3 className=" m-auto btnPlans" onClick={ellanRoom}>
                    <Link>ارحب</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
