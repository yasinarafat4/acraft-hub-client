import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const RecentNews = () => {
  return (
    <div>
      {/* Section Title */}
      <SectionTitle
        heading={"Recent News"}
        text={"See What's New in Our Creative Summer Adventures."}
      />

      {/* News Left to Right */}
      <Marquee direction="left" pauseOnHover>
        <div className="my-4 lg:ms-6 flex justify-center items-center gap-6">
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
        </div>
      </Marquee>
      {/* News Right to Left */}
      <Marquee direction="right" pauseOnHover>
        <div className="my-4 lg:ms-6 flex justify-center items-center gap-6">
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
          <img
            className="w-full cursor-pointer"
            src="https://i.ibb.co/JKRtb6k/images.jpg"
            alt=""
          />
        </div>
      </Marquee>
    </div>
  );
};

export default RecentNews;
