import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./MasterRoom.css";

export const MasterRooms = () => {
  const navigate = useNavigate();

  const bedorRoom = () => {
    navigate("/bedorroom");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const ellanRoom = () => {
    navigate("/ellanroom");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const NahelRoom = () => {
    navigate("/nahelroom");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const safaRooms = () => {
    navigate("/safaRoom");
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      <section className="masterRoom">
        <div className="container">
          <div className="row w-50 m-auto ">
            <div className="col-md-12 p-3 ">
              <div className="d-flex justify-content-center align-align-items-center btn">
                <h2 className="titleMasterroom animate__heartBeat">
                  جميع الشقق
                </h2>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row mb-2">
              <div className="col-md-6 masterimg "></div>
              <div className="col-md-6   d-flex align-items-center masterArea p-5">
                <div>
                  <div dir="rtl">
                    <h2 className="mb-5">بدور حطين</h2>
                    <p className="fw-bold mb-5">
                      خمسة خطوات عن بوليفارد الرياض - RUH BLVD!!! هذا المسكن صمم
                      لتظيف روح الهدوء والراحة للنزلاء بحيث تمتاز بخدمة الدخول
                      الذاتي والانترنت وتحتوي على 3 غرف نوم ومطبخ و 3 دورات مياة
                      وصالة واسعة وتلفزيون بنظام صوتي ويوجد اشتراك على برنامج
                      نتفلكس وشاهد VIP وايضا مطبخ متكامل مايكرويف . ثلاجة . آلة
                      قهوة . فرن . وغلاية ماء . غسالة ملابس والعديد من المزايا
                      مثل موقف سيارة خاص بمساحة اجمالية 150م الدخول الساعة
                      الثالثة مساءً الخروج الساغة الحادية والعشر صباحاً سوف
                      تصلكم رسالة الى الجوال المسجل تشرح طريقة الدفع ودخول الشقة
                      تو ما نوّر المكان
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-secondary p-3 ms-3 fw-bold">
                        650
                        <span>ريال / الليله</span>
                      </button>

                      <span onClick={bedorRoom}>
                        <Link className="no-underline text-white fw-bold">
                          <button className="btn btn-danger p-3  ">
                            احجز الان
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 d-flex align-items-center masterAreaR p-5">
                <div>
                  <div dir="rtl">
                    <h2 className="mb-5"> صفا عرقة</h2>
                    <p className="fw-bold mb-5">
                      تقع في جوهر حي عرقة باقرب من مراكز أعمال والجامعة وكامل
                      الخدمات هذا المسكن صمم لتظيف روح الهدوء والراحة للنزلاء
                      بحيث تمتاز بخدمة الدخول الذاتي والانترنت وتحتوي على 3 غرف
                      نوم ومطبخ و 3 دورات مياة وصالة واسعة وتلفزيون بنظام صوتي
                      ويوجد اشتراك على برنامج نتفلكس وشاهد VIP وايضا مطبخ متكامل
                      مايكرويف . ثلاجة . آلة قهوة . فرن . وغلاية ماء . غسالة
                      ملابس والعديد من المزايا مثل موقف سيارة خاص بسماحة اجمالية
                      130م الدخول الساعة الثالثة مساءً الخروج الساغة الحادية
                      والعشر صباحاً سوف تصلكم رسالة الى الجوال المسجل تشرح طريقة
                      الدفع ودخول الشقة تو ما نوّر المكان
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-secondary p-3 ms-3 fw-bold">
                        850
                        <span>ريال / الليله</span>
                      </button>
                      <span onClick={safaRooms}>
                        <Link className="no-underline text-white fw-bold">
                          <button className="btn btn-danger p-3  ">
                            احجز الان
                          </button>{" "}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 masterimgR "></div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 masterimg1 "></div>
              <div className="col-md-6   d-flex align-items-center masterArea p-5">
                <div>
                  <div dir="rtl">
                    <h2 className="mb-5">نخيل - تركي 1</h2>
                    <p className="fw-bold mb-5">
                      في قلب حي النخيل - بوابة الجامعة الخامسة هذا المسكن صمم
                      لتظيف روح الهدوء والراحة للنزلاء بحيث تمتاز بخدمة الدخول
                      الذاتي والانترنت وتحتوي على 2 غرف نوم ومطبخ و 2 دورات مياة
                      وصالة واسعة وتلفزيون بنظام صوتي ويوجد اشتراك على برنامج
                      نتفلكس وشاهد VIP وايضا مطبخ متكامل مايكرويف . ثلاجة . آلة
                      قهوة . فرن . وغلاية ماء . غسالة ملابس والعديد من المزايا
                      مثل موقف سيارة خاص بسماحة اجمالية 100م الدخول الساعة
                      الثالثة مساءً الخروج الساغة الحادية والعشر صباحاً سوف
                      تصلكم رسالة الى الجوال المسجل تشرح طريقة الدفع ودخول الشقة
                      تو ما نوّر المكان
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-secondary p-3 ms-3 fw-bold">
                        900
                        <span>ريال / الليله</span>
                      </button>

                      <span onClick={NahelRoom}>
                        <Link className="no-underline text-white fw-bold">
                          <button className="btn btn-danger p-3  ">
                            احجز الان
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-md-6 d-flex align-items-center masterAreaR p-5">
                <div>
                  <div dir="rtl">
                    <h2 className="mb-5"> الين حطين</h2>
                    <p className="fw-bold mb-5">
                      شقة فااااااااااااااااخرة في حطين النموذجي خلف صاد سكوير
                      موقع هادئ ومميز وتمتاز بخدمة الدخول الذاتي والانترنت
                      وتحتوي على 3 غرف نوم ومطبخ و 3 دورات مياة وصالة واسعة مع
                      مجلس وتراس فخم وتلفزيون بنظام صوتي ويوجد اشتراك على برنامج
                      نتفلكس وشاهد VIP وايضا مطبخ متكامل مايكرويف . ثلاجة . آلة
                      قهوة . فرن . وغلاية ماء . غسالة ملابس والعديد من المزايا
                      مثل موقف سيارة خاص بسماحة اجمالية 130م الدخول الساعة
                      الثالثة مساءً الخروج الساغة الحادية والعشر صباحاً سوف
                      تصلكم رسالة الى الجوال المسجل تشرح طريقة الدفع ودخول الشقة
                      تو ما نوّر المكان
                    </p>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-secondary p-3 ms-3 fw-bold">
                        1600
                        <span>ريال / الليله</span>
                      </button>
                      <span onClick={ellanRoom}>
                        <Link className="no-underline text-white fw-bold">
                          <button className="btn btn-danger p-3  ">
                            احجز الان
                          </button>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 masterimgR1 "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
