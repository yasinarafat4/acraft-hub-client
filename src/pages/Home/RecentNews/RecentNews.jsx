import React from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const RecentNews = () => {
  return (
    <div>
      {/* Section Title */}
      <SectionTitle
        heading={"Recent News"}
        text={"Stay updated with the Arts & Crafts Community!"}
      />

      {/* News Left to Right */}
      <Marquee direction="left" pauseOnHover>
        <div className="my-4 lg:ms-6 flex justify-center items-center gap-6">
          <a
            href="https://www.ctinsider.com/westport/article/Art-Town-A-famous-school-makes-Westport-artists-17049416.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/LdHJfLg/1200x0.jpg"
              alt="Famous Artist Course"
            />
          </a>
          <a
            href="https://www.collegeart.org/news/2017/12/20/news-from-the-art-and-academic-worlds-259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/7GKCSRm/college-art-loan-programs.jpg"
              alt="College Art Programs"
            />
          </a>
          <a
            href="https://www.artforprogress.org/afp-in-new-york-daily-news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/ZBS8vTq/NY-Daily-News-Article.jpg"
              alt="Daily News Article"
            />
          </a>
          <a
            href="https://studioinaschool.org/about/news-events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/djbPMgf/images-1.jpg"
              alt="Introducing Studio’s 2023"
            />
          </a>
          <a
            href="https://www.youtube.com/watch?app=desktop&v=3scyQ50A1sU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/nkGH81B/maxresdefault.jpg"
              alt="Beautiful Art for the Catholic Church"
            />
          </a>
        </div>
      </Marquee>
      {/* News Right to Left */}
      <Marquee direction="right" pauseOnHover>
        <div className="my-4 lg:ms-6 flex justify-center items-center gap-6">
          <a
            href="https://www.youtube.com/watch?app=desktop&v=3scyQ50A1sU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/nkGH81B/maxresdefault.jpg"
              alt="Beautiful Art for the Catholic Church"
            />
          </a>
          <a
            href="https://studioinaschool.org/about/news-events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/djbPMgf/images-1.jpg"
              alt="Introducing Studio’s 2023"
            />
          </a>
          <a
            href="https://www.artforprogress.org/afp-in-new-york-daily-news/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/ZBS8vTq/NY-Daily-News-Article.jpg"
              alt="Daily News Article"
            />
          </a>
          <a
            href="https://www.collegeart.org/news/2017/12/20/news-from-the-art-and-academic-worlds-259/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/7GKCSRm/college-art-loan-programs.jpg"
              alt="College Art Programs"
            />
          </a>
          <a
            href="https://www.ctinsider.com/westport/article/Art-Town-A-famous-school-makes-Westport-artists-17049416.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-60 h-36 cursor-pointer"
              src="https://i.ibb.co/LdHJfLg/1200x0.jpg"
              alt="Famous Artist Course"
            />
          </a>
        </div>
      </Marquee>
    </div>
  );
};

export default RecentNews;
