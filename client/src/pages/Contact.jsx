import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pntpl6i",
        "template_s8kcsix",
        form.current,
        "XEhmrrjLJ6XLvOKH6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="font-poppins m-2">
      <h1 className="font-bold text-6xl text-center sm:text-7xl xl:text-8xl">
        Contact <span className="text-orange-500">Us.</span>
      </h1>
      <div>
        <div className="bg-orange-500 text-white text-lg rounded-lg font-bold mt-8 sm:max-w-2xl mx-auto sm:px-4 sm:py-4">
          <form
            action=""
            className="flex flex-col p-2"
            onSubmit={sendEmail}
            ref={form}
          >
            <label htmlFor="" className="mb-2">
              Your Name
            </label>
            <input
              name="user_name"
              type="text"
              className="my-2 rounded-md text-black p-2 outline-none"
            />
            <label htmlFor="" className="my-2">
              Your Email
            </label>
            <input
              name="user_email"
              type="text"
              className="my-2 rounded-md text-black p-2 outline-none"
            />
            <label htmlFor="" className="my-2">
              Your Message
            </label>
            <textarea
              name="user_message"
              rows="6"
              type="text"
              className="mt-2 rounded-md text-black p-2 outline-none resize-none "
            />
          </form>
        </div>
        <button className="flex mx-auto m-2 mt-8 py-2 px-4 text-lg font-bold bg-blue-600 rounded-lg text-white hover:bg-blue-800">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
