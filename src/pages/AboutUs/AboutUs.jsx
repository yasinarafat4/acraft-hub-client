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

      <div className="p-8">
        <div className="w-full">
          <p className="mb-4 lg:text-lg">
            We pride ourselves to inspire and educate students in the exciting
            realm of arts and crafts. Our platform is crafted with care to
            provide a unique learning experience, encouraging participants to
            explore their creative potential. Here's a more detailed look at
            what sets us apart:
          </p>
          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Immersive Learning:</span> Engage
              in hands-on, immersive learning experiences that go beyond
              traditional classroom settings.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Diverse Curriculum: </span>
              Explore a diverse range of artistic activities, from painting and
              sculpture to DIY crafts and more.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold"> Qualified Instructors: </span>
              Learn from skilled and passionate instructors dedicated to
              nurturing creativity and providing personalized guidance.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold"> Interactive Workshops: </span>
              Participate in interactive workshops that foster collaboration,
              critical thinking, and problem-solving skills.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold"> Enrollment Flexibility: </span>
              Choose from a variety of programs tailored to different age groups
              and skill levels.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Inspiring Environment: </span>
              Experience a vibrant and inspiring environment conducive to
              unleashing creativity and fostering artistic expression.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Community Building: </span>
              Join a community of like-minded individuals, creating lasting
              connections with fellow students who share a passion for the arts.
            </p>
          </div>

          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold"> Progress Tracking: </span>
              Benefit from progress tracking tools that allow both students and
              parents to monitor skill development and achievements.
            </p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Showcase Opportunities: </span>
              Showcase your masterpieces at exhibitions and events, celebrating
              the accomplishments of our talented ACraft Hub community.
            </p>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-indigo-700 mr-2 text-lg">&#10003;</span>
            <p>
              <span className="font-semibold">Memorable Summers: </span>
              Create memories that last a lifetime, as ACraft Hub becomes a hub
              of creativity, learning, and fun-filled summers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
