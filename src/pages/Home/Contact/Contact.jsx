import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="px-10 py-10 md:py-14 mx-4 bg-gradient-to-r from-orange-400 to-red-500  dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-800 text-white text-center rounded-2xl mt-14">
      <p className="text-slate-700 dark:text-white text-lg">
        {" "}
        <b>Call Us:</b> <span className="text-slate-100 text-base">+88 123456789</span>
      </p>
      <p className="text-slate-700 dark:text-white text-lg">
        {" "}
        <b>Email Us:</b>{" "}
        <span className="text-slate-100 text-base">acraft@gmail.com</span>
      </p>
      <Link to="/contact">
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
