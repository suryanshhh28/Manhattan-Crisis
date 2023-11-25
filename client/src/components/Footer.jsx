import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black flex flex-col justify-center items-center p-5 xl:flex-row lg:justify-evenly">
      <div className="mb-4">
        <h1 className=" text-white text-4xl uppercase font-bold tracking-tight my-4 sm:text-8xl lg:text-9xl ">
          P<span className=" italic">l</span>e<span className=" italic">a</span>
          s<span className=" italic">e</span>
          <span className=" italic">d</span>o<span className=" italic">n</span>a
          <span className=" italic">t</span>e
        </h1>
        <p className="lg:m-2 text-white text-center font-bold font-poppins  border-white sm:text-lg lg:text-xl">
          manhattancrisis@gmail.com
        </p>
        <p className="lg:m-2 text-white text-center font-bold font-poppins  border-white sm:text-lg lg:text-xl">
          +1889-778-232
        </p>
        <p className="lg:m-2 text-white text-center font-bold font-poppins  border-white sm:text-lg lg:text-xl">
          45, 6th Street, Manhattan, NYC
        </p>
      </div>

      <div className="">
        <iframe
          className="rounded-lg lg:w-96 lg:h-96 sm:w-80 sm:h-80 sm:mt-10 sm:mb-10 sm:ml-10 sm:mr-10 sm:rounded-lg"
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.35377293502!2d-74.05163263147499!3d40.75903219694643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1700763372363!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
