import React from "react";

const SectionTitle = ({ heading, text }) => {
  return (
    <div className="mt-10 mx-4 lg:mx-0 lg:ms-6">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-2">
        {heading}
      </h2>
      <p className="text-sm md:text-lg text-slate-500 dark:text-gray-300">
        {text}
      </p>
    </div>
  );
};

export default SectionTitle;
