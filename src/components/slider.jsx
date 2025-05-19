import Image from "next/image";
import Slider from "react-slick";
import { useTheme } from "next-themes";

const ImageSlider = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderCards = [
    { image: isDarkMode ? "/cactus-light.png" : "/cactus.png" },
    { image: isDarkMode ? "/snowflake-light.png" : "/snowflake.png" },
    { image: isDarkMode ? "/snowflake-light.png" : "/snowflake.png" },
    { image: isDarkMode ? "/snowflake-light.png" : "/snowflake.png" },
    { image: isDarkMode ? "/snowflake-light.png" : "/snowflake.png" },
  ];

  return (
    <Slider {...settings} className="twoSlider">
      {sliderCards.map((card, index) => (
        <div className="px-4" key={index}>
          <div className="px-4 py-5 rounded-[28px] flex flex-col justify-center items-center bg-cardwhite dark:bg-darkbluetwo">
            <span className="mb-4">
              <Image
                src={card.image}
                alt=""
                width={180}
                height={36}
                className="w-full h-9"
              />
            </span>
            <p className="text-[18px] font-light text-textgray dark:text-white text-center">
              Welcome to our website, where you can explore a world of
              possibilities and find the perfect solutions tailored just for you!
            </p>
            <div className="mt-8 flex flex-col justify-center items-center">
              <span>
                <Image
                  src="/avatar.png"
                  alt=""
                  width={69}
                  height={69}
                  className="rounded-full"
                />
              </span>
              <span className="mt-4 text-center">
                <h5 className="text-[18px] font-normal text-textgray dark:text-skyblue">
                  Liam Harper
                </h5>
                <p className="text-[18px] font-normal text-[#666666] dark:text-white">
                  Chief Innovation Officer
                </p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
