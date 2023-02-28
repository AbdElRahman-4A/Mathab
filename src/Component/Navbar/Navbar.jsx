import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../image/logo.png";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bgNav ">
        <div className="container-fluid ">
          <span className="navbar-brand">
            <div className=" d-flex justify-content-end align-items-center ">
              <img src={logo} className="w-25 animate__bounceIn" alt="mathab" />
            </div>
          </span>
          <button
            className="navbar-toggler position-absolute text-white bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end pe-5  "
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto " dir="rtl">
              <li className="nav-item ">
                <span className="nav-link m-2" aria-current="page">
                  <Link to="/" className="text-white">
                    الرئيسية
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link m-2" aria-current="page">
                  <Link to="/about" className="text-white">
                    من نحن
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link m-2" aria-current="page">
                  <Link to="/masterrooms" className="text-white">
                    الشقق
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link m-2" aria-current="page">
                  <Link to="/plans" className="text-white">
                    الخطط و الاسعار
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link m-2" aria-current="page">
                  <Link to="/contact" className="text-white">
                    تواصل معانا
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
