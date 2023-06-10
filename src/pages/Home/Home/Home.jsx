import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";
import FeaturedSection from "../FeaturedSection/FeaturedSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ACraft | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Reviews></Reviews>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};

export default Home;
