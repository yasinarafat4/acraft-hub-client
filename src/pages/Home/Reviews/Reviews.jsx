import { Fade } from "react-awesome-reveal";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      imageSrc: "https://i.ibb.co/4psHVp6/user-1.png",
      name: "Adam Smith",
      opinion:
        "ACraft is fantastic! I thank our mentor for the inspiration and gift of teaching.",
      rating: 5,
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/DKdqMdP/user-2.png",
      name: "Lucia Johnson",
      opinion:
        "Very satisfied with the course. Now I can create art in a digital space.",
      rating: 4,
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/bPNcSvk/user-3.png",
      name: "David Brown",
      opinion:
        "Extremely grateful for the valuable knowledge and positive atmosphere. Thanks ACraft! ❤️",
      rating: 5,
    },
  ];

  return (
    <Fade duration={1500}>
      <div>
        {/* Section Title */}
        <SectionTitle
          heading={"What People are Saying"}
          text={"Join our huge creative ACraft family today!"}
        />

        {/* Review container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          {reviews.map((review) => (
            <div key={review.id} className="max-w-2xl mx-auto md:m-4 overflow-hidden shadow-md">
              <img
                src={review.imageSrc}
                alt="User"
                className="w-28 h-28 object-center rounded-full mx-auto"
              />
              <div className="p-4">
                <div className="font-bold text-xl mb-2">{review.name}</div>
                <p className="text-gray-700 text-base mb-2 dark:text-white">
                  {review.opinion}
                </p>
                <div className="flex justify-center items-center gap-1">
                  <span className="text-yellow-500 text-xl">&#9733;</span>
                  <span className="text-gray-700 text-base dark:text-white">
                    {review.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Reviews;
