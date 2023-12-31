import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-10 py-10 md:py-14 mx-4 dark:bg-slate-800 bg-slate-950 text-white text-center">
      <p>Call Us: <span className="text-slate-300">+88 123456789</span></p>
      <p>Email Us: <span className="text-slate-300">acraft@gmail.com</span></p>
      <Link to='/contact'>
        <button
          style={{ borderBottom: "3px solid white" }}
          className="bg-slate-600 hover:bg-slate-500 hover:duration-500 text-slate-200 hover:text-white font-semibold py-2 px-4 mt-2 rounded-md text-[10px] xl:text-[13px] uppercase"
        >
          Contact With Us
        </button>
      </Link>
    </div>
  );
};

export default Contact;