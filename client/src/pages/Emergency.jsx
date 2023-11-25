import React from "react";
import men from "../assets/men.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";

const Emergency = () => {
  return (
    <div className=" justify-center font-poppins my-10">
      <h1 className="mb-10 sm:mb-0 sm:text-8xl xl:text-9xl text-7xl font-bold tracking-wider text-center">
        We are here to <span className=" text-orange-500">rescue.</span>
      </h1>
      <div className="flex mx-2 font-poppins flex-col sm:flex-row justify-evenly items-center">
        <div className="p-6 border border-gray-300 sm:rounded-lg">
          <form
            method="POST"
            action="https://herotofu.com/start"
            enctype="multipart/form-data"
          >
            <label className="block mb-6">
              <span className="text-gray-700 p-2">Your name</span>
              <input
                name="name"
                type="text"
                className="
            block
            p-2
            w-full
            mt-1
            border
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Joe Bloggs"
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700 p-2">Your problem category</span>
              <input
                name="problem"
                type="text"
                className="
            block
            p-2
            w-full
            mt-1
            border
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="Robbery, Kidnapping, etc."
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700 p-2">Proof</span>
              <input
                name="receipt"
                type="file"
                className="
            block
            p-2
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
              />
            </label>
            <label className="block mb-6">
              <span className="text-gray-700 p-2">What's wrong?</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-1
            p-2
            border
            resize-none
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="3"
                placeholder="Please describe your problem"
              ></textarea>
            </label>
            <div className="mb-2">
              <button
                type="submit"
                className="
            h-10
            px-5
            mx-auto
            text-indigo-100
            bg-orange-500
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-orange-700
          "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          <img src={men} alt="Helping" width={500} />
        </div>
      </div>
      <div className="">
        <h1 className="text-5xl sm:text-7xl xl:text-8xl font-bold mx-auto text-center">
          Our Corporate <span className="text-orange-500">Philanthropy.</span>
        </h1>
        <div
          x-data="{}"
          x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            <li>
              <img src={one} alt="Facebook" width={300} />
            </li>
            <li>
              <img src={two} alt="Disney" width={300} />
            </li>
            <li>
              <img src={three} alt="Airbnb" width={300} />
            </li>
            <li>
              <img src={four} alt="Apple" width={300} />
            </li>
            <li>
              <img src={five} alt="Spark" width={300} />
            </li>
            <li>
              <img src={six} alt="Spark" width={300} />
            </li>
            <li>
              <img src={seven} alt="Spark" width={300} />
            </li>
            <li>
              <img src={eight} alt="Spark" width={300} />
            </li>
            <li>
              <img src={four} alt="Apple" width={300} />
            </li>
            <li>
              <img src={five} alt="Spark" width={300} />
            </li>
            <li>
              <img src={one} alt="Facebook" width={300} />
            </li>
            <li>
              <img src={two} alt="Disney" width={300} />
            </li>
            <li>
              <img src={three} alt="Airbnb" width={300} />
            </li>
            <li>
              <img src={four} alt="Apple" width={300} />
            </li>
            <li>
              <img src={five} alt="Spark" width={300} />
            </li>
            <li>
              <img src={six} alt="Spark" width={300} />
            </li>
            <li>
              <img src={seven} alt="Spark" width={300} />
            </li>
            <li>
              <img src={eight} alt="Spark" width={300} />
            </li>
            <li>
              <img src={four} alt="Apple" width={300} />
            </li>
            <li>
              <img src={five} alt="Spark" width={300} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
