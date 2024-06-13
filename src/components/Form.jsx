import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

const Form = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const errors = {};
    const formData = new FormData(form.current);

    if (!formData.get("user_name")) {
      errors.user_name = "Name is required";
    }
    if (!formData.get("user_email")) {
      errors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("user_email"))) {
      errors.user_email = "Email is invalid";
    }
    if (!formData.get("user_phone")) {
      errors.user_phone = "Phone number is required";
    }
    if (!formData.get("user_message")) {
      errors.user_message = "Message is required";
    }

    return errors;
  };

  const handleBtn = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setLoading(true);

    const service = import.meta.env.VITE_SERVICE_ID;
    const template = import.meta.env.VITE_TEMPLATE_ID;
    const publickey = import.meta.env.VITE_PUBLIC_KEY;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publickey,
      })
      .then(() => {
        console.log("success");
        form.current.reset();
        setErrors({});
      })
      .catch((err) => {
        console.log(err.text);
      })
      .finally(() => {
        setLoading(false);
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
        {errors.user_name && (
          <span className="text-red-500">{errors.user_name}</span>
        )}
        <label>Email Id</label>
        <input
          type="email"
          name="user_email"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        {errors.user_email && (
          <span className="text-red-500">{errors.user_email}</span>
        )}
        <label>Phone number</label>
        <input
          type="number"
          name="user_phone"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        {errors.user_phone && (
          <span className="text-red-500">{errors.user_phone}</span>
        )}
        <label>Message</label>
        <textarea
          cols="20"
          rows="5"
          placeholder="Feel free to ask!"
          name="user_message"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700
        outline-sky-500"
        ></textarea>
        {errors.user_message && (
          <span className="text-red-500">{errors.user_message}</span>
        )}
        <button
          className="bg-green-500 py-2 rounded uppercase text-lg text-slate-900 font-medium hover:bg-green-600 
        transition-all duration-500"
          onClick={handleBtn}
          disabled={loading}
        >
          {loading ? <div className="loading"></div> : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Form;
