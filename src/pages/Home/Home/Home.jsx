import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import RecentNews from "../RecentNews/RecentNews";
import Reviews from "../Reviews/Reviews";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | Home</title>
      </Helmet>
      <Banner />
      <Welcome />
      <PopularClasses />
      <PopularInstructors />
      <About />
      <Contact />
      <Reviews />
      <RecentNews />
      <FeaturedSection />
    </div>
  );
};

export default Home;
