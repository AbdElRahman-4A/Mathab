import React from "react";
import "./ContactUs_module.css";

export const ContactUs = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-bg">
          <h2>تواصل معانا</h2>
          {/* <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div> */}
          <p className="text"></p>
        </div>

        <div className="contact-body">
          <div className="contact-info">
            <div>
              <span>
                <i className="fas fa-mobile-alt"></i>
              </span>
              <span> رقم الموبيل</span>
              <span className="text"> +966 112350297</span>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope-open"></i>
              </span>
              <span>راسلنا على</span>
              <span className="text">care@ataatre.com</span>
            </div>
            <div>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <span>العنوان</span>
              <span className="text">
                4599 طريق الفرع الدائري الشمالي - النخيل - الرياض - المملكة
                العربية السعودية
              </span>
            </div>
            <div>
              <span>
                <i className="fas fa-clock"></i>
              </span>
              <span> مواعيد العمل</span>
              <span className="text" dir="rtl">
                السبت - الخميس <br />
                (9:00 AM to 5:00 PM)
              </span>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14934532.555854663!2d36.045493586795104!3d23.955980237501276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2seg!4v1674649071786!5m2!1sen!2seg"
            width="100%"
            height="450"
          ></iframe>
        </div>
      </section>
    </>
  );
};
