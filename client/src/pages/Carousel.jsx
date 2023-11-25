import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import riot1 from "../assets/riot1.jpg";
import { RxDotFilled } from "react-icons/rx";

function App() {
  const slides = [
    {
      url: riot1,
    },
    {
      url: "https://images.pexels.com/photos/3457340/pexels-photo-3457340.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/2833366/pexels-photo-2833366.png?auto=compress&cs=tinysrgb&w=1600",
    },

    {
      url: "https://images.pexels.com/photos/4636148/pexels-photo-4636148.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      url: "https://images.pexels.com/photos/4646764/pexels-photo-4646764.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1600px] h-[780px] w-full m-auto py-10 px-2 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled color="rgb(249,115,22)" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
