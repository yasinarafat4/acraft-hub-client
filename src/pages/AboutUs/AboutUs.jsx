import React from "react";
import { Helmet } from "react-helmet-async";
import aboutCover from "../../assets/images/cover/classes-cover.png";
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
        text={"Would you like to see?"}
      ></Cover>
    </div>
  );
};

export default AboutUs;
