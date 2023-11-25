import React from "react";
import manhattan from "../assets/manhattan.jpg";

const Home = () => {
  return (
    <div className=" flex flex-col ">
      <h1 className="text-6xl text-center font-bold font-poppins sm:mt-10 mx-auto mb-2 sm:text-7xl xl:text-8xl">
        Manhattan Crisis.
      </h1>
      <p className="font-poppins text-center px-2 tracking-wider m-auto mb-10 text-lg">
        Instances when the entirety of
        <span className=" text-orange-500">
          {" "}
          Manhattan experienced a comprehensive system failure{" "}
        </span>
        are exceedingly rare and noteworthy.
      </p>
      <img
        src={manhattan}
        alt="CityImage"
        className=" filter grayscale brightness-75 "
      />
    </div>
  );
};

export default Home;
