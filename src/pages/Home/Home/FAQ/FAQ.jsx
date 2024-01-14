// import React from "react";
// import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import { useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

// const FAQ = () => {
//   return (
//     <div className="m-4">
//       {/* Section Title */}
//       <SectionTitle
//         heading={"Frequently Asked Questions (FAQ)"}
//         text={
//           "Discover answers to your most common queries in our comprehensive FAQ section."
//         }
//       />
//       {/* FAQ's */}
//       <div className="collapse collapse-plus bg-base-200 mt-2">
//         <input type="radio" name="my-accordion-3" checked="checked" />
//         <div className="collapse-title text-xl font-medium">
//           How can I enroll my child in an art and craft class for the summer
//           camp?
//         </div>
//         <div className="collapse-content">
//           <p>
//             Enrolling your child is easy! Navigate to our "Classes" section,
//             choose the desired art and craft class, and click on the "Enroll
//             Now" button. Follow the prompts to complete the registration process
//             securely.
//           </p>
//         </div>
//       </div>
//       <div className="collapse collapse-plus bg-base-200 mt-2">
//         <input type="radio" name="my-accordion-3" />
//         <div className="collapse-title text-xl font-medium">
//           What age groups are the art and craft classes suitable for?
//         </div>
//         <div className="collapse-content">
//           <p>
//             Our art and craft classes cater to a variety of age groups. We offer
//             classes designed for different age ranges, ensuring an engaging and
//             age-appropriate experience for every child participating in our
//             summer camp.
//           </p>
//         </div>
//       </div>
//       <div className="collapse collapse-plus bg-base-200 mt-2">
//         <input type="radio" name="my-accordion-3" />
//         <div className="collapse-title text-xl font-medium">
//           Are there any discounts or promotions available for multiple class
//           enrollments?
//         </div>
//         <div className="collapse-content">
//           <p>
//             Yes, we often have special promotions and discounts for families
//             enrolling in multiple classes. Check our "Promotions" page for the
//             latest offers or contact our customer support for personalized
//             assistance.
//           </p>
//         </div>
//       </div>
//       <div className="collapse collapse-plus bg-base-200 mt-2">
//         <input type="radio" name="my-accordion-3" />
//         <div className="collapse-title text-xl font-medium">
//           Can parents attend the art and craft classes with their children?
//         </div>
//         <div className="collapse-content">
//           <p>
//             While our classes are designed for children, we encourage parents to
//             join specific classes or workshops designed for family
//             participation. It's a great way to bond and create lasting memories
//             together.
//           </p>
//         </div>
//       </div>
//       <div className="collapse collapse-plus bg-base-200 mt-2">
//         <input type="radio" name="my-accordion-3" />
//         <div className="collapse-title text-xl font-medium">
//           What safety measures are in place during the summer camp sessions?
//         </div>
//         <div className="collapse-content">
//           <p>
//             The safety of our campers is our top priority. We follow strict
//             safety protocols, including qualified instructors, first aid
//             provisions, and a secure environment. Additionally, we adhere to any
//             local health guidelines to ensure a safe and enjoyable experience
//             for everyone.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  const datas = [
    {
      title: "Connected Devices",
      color: "green",
      description:
        'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',
    },
    {
      title: "Apps Permissions",
      color: "sky",
      description:
        "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",
    },
    {
      title: "Pending task",
      color: "purple",
      description:
        "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",
    },
    {
      title: "Card expired",
      color: "amber",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
    {
      title: "Card expired",
      color: "red",
      description:
        "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",
    },
  ];
  return (
    <div className="space-y-4 p-2 md:px-6 m-4">
      {/* Section Title */}
      <SectionTitle
        heading={"Frequently Asked Questions (FAQ)"}
        text={
          "Discover answers to your most common queries in our comprehensive FAQ section."
        }
      />
      {datas?.map((data, idx) => (
        <div key={idx}>
          {/* header / Title */}
          <div
            onClick={() => handleToggle(idx)}
            className={`px-4 md:px-8 py-6 ${
              idx === 0
                ? "bg-green-50 border-green-500"
                : idx === 1
                ? "bg-sky-50 border-sky-500"
                : idx === 2
                ? "bg-purple-50 border-purple-500"
                : idx === 3
                ? "bg-amber-50 border-amber-500"
                : idx === 4
                ? "bg-red-50 border-red-500"
                : "bg-orange-50 border-orange-500"
            } border-l-[3px] cursor-pointer`}
          >
            <div className="flex items-center">
              <span>
                <svg
                  className={`mr-4 ${
                    idx === 0
                      ? "fill-green-900"
                      : idx === 1
                      ? "fill-sky-900"
                      : idx === 2
                      ? "fill-purple-900"
                      : idx === 3
                      ? "fill-amber-900"
                      : idx === 4
                      ? "fill-red-900"
                      : "fill-orange-900"
                  } shrink-0`}
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                      isOpen === idx && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
              <h4
                className={`${
                  idx === 0
                    ? "text-green-900"
                    : idx === 1
                    ? "text-sky-900"
                    : idx === 2
                    ? "text-purple-900"
                    : idx === 3
                    ? "text-amber-900"
                    : idx === 4
                    ? "text-red-900"
                    : "text-orange-900"
                } text-xl`}
              >
                {data.title}
              </h4>
            </div>
          </div>
          {/* body / content  */}
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${
              isOpen === idx
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className={`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  ${
                  idx === 0
                    ? "text-green-900 bg-green-50 border-green-500"
                    : idx === 1
                    ? "text-sky-900 bg-sky-50 border-sky-500"
                    : idx === 2
                    ? "text-purple-900 bg-purple-50 border-purple-500"
                    : idx === 3
                    ? "text-amber-900 bg-amber-50 border-amber-500"
                    : idx === 4
                    ? "text-red-900 bg-red-50 border-red-500"
                    : "text-orange-900 bg-orange-50 border-orange-500"
                } `}
              >
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
