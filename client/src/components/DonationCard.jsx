import React from "react";

const DonationCard = ({ image, text }) => {
  return (
    <div className="flex flex-col justify-center">
      <div className=" bg-white mx-5 my-5 rounded-lg p-4">
        <img src={image} alt="Riot" className=" rounded-lg mb-2 mx-auto" />
        <p className="text-sm tracking-tight font-poppins text-center sm:text-lg">
          {text}
        </p>
      </div>
      <button className=" bg-orange-500 mx-5 text-2xl font-bold text-white font-poppins p-4 rounded-lg hover:bg-orange-600">
        Donate Now
      </button>
    </div>
  );
};

export default DonationCard;
