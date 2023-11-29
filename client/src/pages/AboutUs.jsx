import React from "react";
import hands from "../assets/hands.png";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center text-center mt-10 mx-5 ">
      <div className="xl:flex xl:flex-row">
        <div className="xl:my-auto">
          <h1 className=" text-7xl font-poppins font-bold xl:text-8xl">
            What Are <span className=" text-orange-500">We?</span>
          </h1>
          <p className=" font-poppins my-5 tracking-wider text-lg ">
            In the face of adversity, solidarity becomes our greatest strength.
            Welcome to Mh,{" "}
            <span className=" text-orange-500">a beacon of hope</span> for those
            trapped in the aftermath of the recent crisis in Manhattan. We are
            more than just a charity; we are a lifeline connecting the global
            community with our fellow citizens in need.
          </p>
        </div>
        <img src={hands} alt="HoldingHands" width={800} className=" mx-auto" />
      </div>
      <h2 className="my-5 mx-auto font-poppins text-5xl font-bold tracking-widest bg-orange-500 text-white p-4 rounded-lg lg:text-8xl lg:bg-white lg:text-black lg:bg-gradient-to-r from-red-500 to-blue-500 lg:text-transparent lg:bg-clip-text">
        AMERICA NEEDS YOU
      </h2>
      <p></p>
    </div>
  );
};

export default AboutUs;
