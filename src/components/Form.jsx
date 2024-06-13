import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();

  const handleBtn = (e) => {
    e.preventDefault();
    const service = import.meta.env.VITE_SERVICE_ID;
    const template = import.meta.env.VITE_TEMPLATE_ID;
    const publickey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publickey,
      })
      .then(() => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err.text);
      });
  };

  return (
    <div
      className="flex justify-center items-center"
      data-aos="fade-left"
      data-aos-duration="3000"
    >
      <form className="flex flex-col space-y-2" ref={form}>
        <label>Name</label>
        <input
          type="text"
          name="user_name"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Email Id</label>
        <input
          type="email"
          name="user_email"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Phone number</label>
        <input
          type="number"
          name="user_phone"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Message</label>
        <textarea
          cols="20"
          rows="5"
          placeholder="Feel free to ask!"
          name="user_message"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700
        outline-sky-500"
        ></textarea>
        <button
          className="bg-green-500 py-2 rounded uppercase text-lg text-slate-900 font-medium hover:bg-green-600 
        transition-all duration-500"
          onClick={handleBtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
