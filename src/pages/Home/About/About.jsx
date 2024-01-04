import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-10 md:py-16 py-2 px-2 lg:py-4 lg:px-8 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image*/}
        <div
          className="w-full lg:w-1/2 mb-6 md:mb-0 md:mr-6"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="2000"
        >
          <img
            src="https://i.ibb.co/QPygSXv/about-us.jpg"
            alt="About Us"
            className="mx-auto md:mx-0 rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-4">
            About Us
          </h2>
          <p className="mb-4">
            Welcome to ACraft Hub, where creativity meets education! We are a
            summer camp school dedicated to fostering artistic expression and learning
            through the captivating world of arts and crafts. At ACraft Hub, we
            provide a dynamic platform for students to enroll and immerse
            themselves in a variety of enriching extra-curricular activities.{" "}
          </p>
          <p className="mb-4">
            Our team is passionate about nurturing talent, fostering a love for
            creativity, and creating memorable experiences for every
            participant. Join us on a journey where innovation, imagination, and
            education come together, making every summer at ACraft Hub an
            unforgettable adventure in self-discovery and artistic exploration.
          </p>
          <Link to="/about">
            <button className="flex items-center justify-center gap-1 text-indigo-800 border border-indigo-800 hover:bg-indigo-800 hover:text-white hover:border-indigo-800 rounded px-3 py-2 duration-500 text-sm font-semibold">
              More About Us <BsArrowUpRight className="mt-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
