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
                placeholder="Joe Rogan"
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
              <span className="text-gray-700 p-2">Your location</span>
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
                placeholder="Queens, Brooklyn, etc."
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
      <div className="bg-black text-white flex flex-col text-center px-2 py-10">
        <div className="xl:flex Xl:flex-row xl:justify-evenly">
          <h1 className="text-4xl sm:text-6xl font-bold mb-2 xl:text-7xl xl:my-[12.5%]">
            How does it <span className="text-orange-500">work?</span>
          </h1>
          <img
            className=" hidden xl:block xl:w-[700px] rounded-lg"
            src="https://images.unsplash.com/photo-1538115081112-32c7d8401807?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="xl:flex Xl:flex-row xl:justify-evenly mt-8">
          <img
            className=" hidden xl:block xl:w-[800px] rounded-lg"
            src="https://images.unsplash.com/photo-1453873531674-2151bcd01707?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <p className="text-sm mt-2 xl:max-w-xl xl:text-md xl:mt-[5%] uppercase font-bold">
            The rescue website operates as a lifeline, employing a sophisticated
            working procedure to save lives and address criminal incidents
            swiftly and effectively. Users in distress can access the platform
            and share their location, enabling the system to dispatch
            specialized teams such as police, firefighters, and ambulances to
            the scene promptly. The website utilizes advanced GPS tracking
            technology to pinpoint the exact location of individuals in need,
            ensuring a rapid response to emergencies. In addition to addressing
            medical emergencies, the platform also serves as a crucial tool in
            combating crime. It enables users to report incidents like robbery,
            kidnapping, and murder, facilitating a coordinated effort between
            law enforcement agencies and emergency response teams. The website's
            integrated system streamlines communication and information sharing,
            fostering a comprehensive approach to public safety that goes beyond
            traditional emergency services. By merging technology and emergency
            response strategies, the rescue website plays a pivotal role in
            saving lives and maintaining community safety.
          </p>
        </div>
      </div>
      <div className="mt-8">
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
