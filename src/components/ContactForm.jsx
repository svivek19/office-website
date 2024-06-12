import React, { useEffect } from "react";
import Form from "./Form";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";

const ContactForm = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-5/6 mx-auto my-10 md:my-24 space-y-10 md:space-y-0">
      <div className="flex flex-col space-y-8">
        <p className="text-base uppercase text-green-600 font-medium">
          Rest easy, we're here for you!
        </p>
        <p className="text-2xl md:text-5xl leading-normal md:leading-[60px] text-slate-900 font-normal font-sans">
          Thinking about a project? Let's talk!
        </p>
        <p className="text-lg md:text-xl text-slate-700">
          From pricing questions to tailored demos, we're excited to connect and
          help you kickstart your journey.
        </p>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <i className="text-xl md:text-3xl text-sky-700">
              <CiMail />
            </i>
            <p className="text-base md:text-lg text-slate-700">
              ifo.quantumsharq@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <i className="text-xl md:text-3xl text-lime-500">
              <IoIosCall />
            </i>
            <p className="text-base md:text-lg text-slate-700">
              +91 9342836860
            </p>
          </div>
        </div>
      </div>

      {/* contact form */}
      <div>
        <Form />
      </div>
    </div>
  );
};

export default ContactForm;
