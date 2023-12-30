import React from "react";
import { Helmet } from "react-helmet-async";
import aboutCover from "../../assets/images/cover/about-cover.jpg";
import Cover from "../Shared/Cover/Cover";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | About</title>
      </Helmet>
      <Cover
        bgImg={aboutCover}
        title={"About Us"}
        text={"Meet ACraftHub: Our Vision, Your Solution!"}
      ></Cover>
    </div>
  );
};

export default AboutUs;
