import { Fade } from "react-awesome-reveal";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      imageSrc: "https://i.ibb.co/4psHVp6/user-1.png",
      name: "Adam Smith",
      opinion:
        "ACraft isn't only learning from zero to any level you want, but the family of like-minded people who will always support you, help you, answer any (stupid) questions, motivate you and inspire you to exploit and all that just to share knowledge with you. You guys are fantastic! I thank our mentor for the inspiration and gift of teaching, the leaders for the excellent organization of the course and an extraordinary sensitivity!",
      rating: 5,
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/DKdqMdP/user-2.png",
      name: "Lucia Johnson",
      opinion:
        "Passed the 'Digital drawing' course. Very satisfied with the course. I had never drawn on a tablet before and it didn't work very well on paper, and now I can create art in a digital space. The atmosphere and teaching methods of ACraft were such that at the end of the course we didn't want to leave. Many thanks to our teacher and curator. As if all the teachers were like in this school, even those ones, who had firmly decided that learning is not for them, would have studied.",
      rating: 4,
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/bPNcSvk/user-3.png",
      name: "David Brown",
      opinion:
        "I am extremely grateful to the ACraft school for all the valuable knowledge I acquired during the courses ('Digital Design' and 'Character Design'), for the unreal pumping of skills, for a regular entry into the field of digital design, for a support for administrators and a positive and friendly atmosphere where I wanted to study and grow more every day. The teachers are good professionals and inspirers ! Thanks ACraft! ❤️",
      rating: 5,
    },
  ];

  return (
    <Fade duration={1500}>
      <div className="xl:mx-10">
        <h2 className="text-xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mt-10 xl:mt-14 mx-6">
          WHAT PEOPLE SAYING ABOUT US:
        </h2>
        <p className="text-xs md:text-sm lg:text-lg xl:text-xl mx-6 mb-4 lg:mb-10">
          Join our huge creative ACraft family today!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          {reviews.map((review) => (
            <div key={review.id} className="max-w-2xl mx-auto overflow-hidden">
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
