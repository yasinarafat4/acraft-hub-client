import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import FeaturedSection from "../FeaturedSection/FeaturedSection";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | Home</title>
      </Helmet>
      <Banner />
      <PopularClasses />
      <PopularInstructors />
      <About />
      <Contact />
      <Reviews />
      <FeaturedSection />
    </div>
  );
};

export default Home;
