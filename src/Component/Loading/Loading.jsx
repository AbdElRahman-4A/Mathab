import React from "react";
import Lottie from "lottie-react";
import load from "../../Animation/"

export const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Lottie animationData={load} className="animatLoad " />
          </div>
        </div>
      </div>
    </>
  );
};
