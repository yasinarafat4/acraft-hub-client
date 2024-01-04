import React from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const FAQ = () => {
  return (
    <div className="m-4">
      {/* Section Title */}
      <SectionTitle
        heading={"Frequently Asked Questions (FAQ)"}
        text={
          "Discover answers to your most common queries in our comprehensive FAQ section."
        }
      />
      {/* FAQ's */}
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          How can I enroll my child in an art and craft class for the summer
          camp?
        </div>
        <div className="collapse-content">
          <p>
            Enrolling your child is easy! Navigate to our "Classes" section,
            choose the desired art and craft class, and click on the "Enroll
            Now" button. Follow the prompts to complete the registration process
            securely.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What age groups are the art and craft classes suitable for?
        </div>
        <div className="collapse-content">
          <p>
            Our art and craft classes cater to a variety of age groups. We offer
            classes designed for different age ranges, ensuring an engaging and
            age-appropriate experience for every child participating in our
            summer camp.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Are there any discounts or promotions available for multiple class
          enrollments?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we often have special promotions and discounts for families
            enrolling in multiple classes. Check our "Promotions" page for the
            latest offers or contact our customer support for personalized
            assistance.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Can parents attend the art and craft classes with their children?
        </div>
        <div className="collapse-content">
          <p>
            While our classes are designed for children, we encourage parents to
            join specific classes or workshops designed for family
            participation. It's a great way to bond and create lasting memories
            together.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mt-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What safety measures are in place during the summer camp sessions?
        </div>
        <div className="collapse-content">
          <p>
            The safety of our campers is our top priority. We follow strict
            safety protocols, including qualified instructors, first aid
            provisions, and a secure environment. Additionally, we adhere to any
            local health guidelines to ensure a safe and enjoyable experience
            for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
