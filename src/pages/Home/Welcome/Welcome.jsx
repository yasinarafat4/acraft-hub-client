import React from "react";

const Welcome = () => {
  return (
    <div>
      {/* title */}
      <div className="mt-10 mx-4 lg:mx-0 lg:ms-6 text-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-2">
          Welcome to <span className="text-orange-600">Acraft</span>
          <span className="text-indigo-600">Hub</span>
        </h2>
        <p className="w-full md:w-2/3 xl:w-1/2 mx-auto text-sm text-slate-500 dark:text-gray-300">
          Unleash your creativity with us. Let's craft unforgettable experiences
          together!
        </p>
      </div>
      {/* Body */}
    </div>
  );
};

export default Welcome;
