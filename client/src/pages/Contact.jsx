import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import dotenv from "dotenv";

// dotenv.config();

// ${process.env.EMAIL_SERVICE}
// ${process.env.EMAIL_TEMPLATE}
// ${process.env.EMAIL_PUBLIC_KEY}

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        ``,
        ``,
        form.current,
        ``
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
        <div className="bg-orange-500 text-white text-lg rounded-lg font-bold mt-8 sm:max-w-2xl mx-auto sm:px-4 sm:py-4 mb-8">
          {/* <form
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
          </form> */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col text-black p-2"
          >
            <label className="mt-2">Name</label>
            <input
              type="text"
              name="user_name"
              className="my-2 p-2 rounded-lg outline-none"
              placeholder="Enter your name..."
            />
            <label className="my-2">Email</label>
            <input
              type="email"
              name="user_email"
              className="my-2 p-2 rounded-lg outline-none"
              placeholder="Enter your email..."
            />
            <label className="my-2">Message</label>
            <textarea
              name="user_message"
              rows="8"
              className="my-2 p-2 rounded-lg outline-none resize-none"
              placeholder="Enter your message..."
            />
            <input
              type="submit"
              value="Send"
              className="mt-2 mb-2 cursor-pointer text-white bg-blue-700 w-[70px] text-xl p-2 rounded-lg mx-auto hover:bg-blue-900"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
