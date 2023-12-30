import React from "react";
import { Helmet } from "react-helmet-async";
import contactCover from "../../assets/images/cover/contact-cover.jpg";
import Cover from "../Shared/Cover/Cover";

const ContactUs = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | Contact</title>
      </Helmet>
      <Cover
        bgImg={contactCover}
        title={"Contact Us"}
        text={"Feel free to contact us for further assistance!"}
      ></Cover>
    </div>
  );
};

export default ContactUs;
