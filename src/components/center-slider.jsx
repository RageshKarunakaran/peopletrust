import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const team = [
  {
    name: "Alex Mercer",
    title: "CEO",
    image: "/avatar.png", // Replace with your own
    testimonial:
      "As the CEO, I can confidently say this is the most impressive Web 3 platform I've encountered, and I've explored many. I have no financial incentive to share this.",
  },
  {
    name: "Hakim Smith",
    title: "CTO",
    image: "/avatar.png",
    testimonial: "As the CEO, I can confidently say this is the most impressive Web 3 platform I've encountered, and I've explored many. I have no financial incentive to share this.",
  },
  {
    name: "Taco Salad",
    title: "Designer",
    image: "/avatar.png",
    testimonial: "As the CEO, I can confidently say this is the most impressive Web 3 platform I've encountered, and I've explored many. I have no financial incentive to share this. ",
  },
  // Add more as needed
];

const TeamSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
      <Slider {...settings} className="cardSlider">
        {team.map((person, index) => (
          <div key={index} className="">
            <div className="bg-blue-800/90 rounded-3xl p-6 text-white mx-auto w-11/12 max-w-md transition-all duration-300 ease-in-out">
              <div className="flex justify-center mb-4">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{person.name}</h3>
              <p className="text-sm text-blue-100 mb-4">{person.title}</p>
              <p className="text-sm text-white">{person.testimonial}</p>
            </div>
          </div>
        ))}
      </Slider>
  );
};

export default TeamSlider;
