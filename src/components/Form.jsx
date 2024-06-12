import React from "react";

const Form = () => {
  const handleBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <form className="flex flex-col space-y-2">
        <label>Name</label>
        <input
          type="text"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Email Id</label>
        <input
          type="email"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Phone number</label>
        <input
          type="number"
          className="border border-slate-300 p-1 rounded px-2 text-slate-700 outline-sky-500"
        />
        <label>Message</label>
        <textarea
          cols="20"
          rows="5"
          placeholder="Feel free to ask!"
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
