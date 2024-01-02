import React from "react";

const Welcome = () => {
  const facilitiesData = [
    {
      id: 1,
      image: "https://i.ibb.co/ysqF456/teacher-icon.png",
      title: "Awesome Teachers",
      text: "Meet our exceptional educators dedicated to inspiring and guiding students.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/WcGgV4m/certificate-icon.png",
      title: "Global Certificate",
      text: "Achieve excellence with our globally recognized certification program.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/G3kwCP9/class-icon.png",
      title: "Best Classes",
      text: "Experience top-notch learning environments with our best-in-class courses.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/5K6GW1f/support-icon.png",
      title: "Student Support ",
      text: "Our commitment goes beyond classes. Receive unparalleled support for your journey.",
    },
  ];

  return (
    <div className="my-4 ms-4 lg:ms-6">
      {/* title */}
      <div className="mt-10 mx-4 lg:mx-0 lg:ms-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-2">
          Welcome to <span className="text-orange-600">Acraft</span>
          <span className="text-indigo-600">Hub</span>
        </h2>
        <p className="w-full md:w-2/3 xl:w-1/2 mx-auto text-sm text-slate-500 dark:text-gray-300">
          Unleash your creativity with us. Let's craft unforgettable experiences
          together!
        </p>
      </div>
      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
        {facilitiesData.map((facility) => (
          <div key={facility.id}>
            <img src={facility.image} alt="Facilities Image" />
            <h2 className="text-lg xl:text-xl font-semibold mt-2">{facility.title}</h2>
            <p>{facility.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
