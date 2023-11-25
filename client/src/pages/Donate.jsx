import React, { useState } from "react";

const Donate = () => {
  const [donation, setDonation] = useState(0);
  return (
    <div className="my-4">
      <div className="flex flex-col justify-center items-center bg-black ">
        <input type="text" />
        <button>Donate</button>
      </div>
    </div>
  );
};

export default Donate;
