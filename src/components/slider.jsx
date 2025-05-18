import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";



const ImageSlider = ({isDarkMode}) => {
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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  };

  return (
    <Slider {...settings} className="twoSlider">
      <div className="px-4">
        <div className={`px-4 py-5 rounded-[28px] flex flex-col justify-center items-center ${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'}`}>
          <span className="mb-4">
            <Image
              src="/snowflake.png"
              alt=""
              width={180}
              height={36}
              className="w-full h-9"
            />
          </span>
          <p className="text-[18px] font-light text-textgray text-center">
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
              <h5 className="text-[18px] font-normal text-textgray">
                Liam Harper
              </h5>
              <p className="text-[18px] font-normal text-[#666666]">
                Chief Innovation Officer
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className={`px-4 py-5 rounded-[28px] flex flex-col justify-center items-center ${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'}`}>
          <span className="mb-4">
            <Image
              src="/cactus.png"
              alt=""
              width={180}
              height={36}
              className="w-full h-9"
            />
          </span>
          <p className="text-[18px] font-light text-textgray text-center">
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
              <h5 className="text-[18px] font-normal text-textgray">
                Liam Harper
              </h5>
              <p className="text-[18px] font-normal text-[#666666]">
                Chief Innovation Officer
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className={`px-4 py-5 rounded-[28px] flex flex-col justify-center items-center ${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'}`}>
          <span className="mb-4">
            <Image
              src="/cactus.png"
              alt=""
              width={180}
              height={36}
              className="w-full h-9"
            />
          </span>
          <p className="text-[18px] font-light text-textgray text-center">
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
              <h5 className="text-[18px] font-normal text-textgray">
                Liam Harper
              </h5>
              <p className="text-[18px] font-normal text-[#666666]">
                Chief Innovation Officer
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className={`px-4 py-5 rounded-[28px] flex flex-col justify-center items-center ${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'}`}>
          <span className="mb-4">
            <Image
              src="/cactus.png"
              alt=""
              width={180}
              height={36}
              className="w-full h-9"
            />
          </span>
          <p className="text-[18px] font-light text-textgray text-center">
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
              <h5 className="text-[18px] font-normal text-textgray">
                Liam Harper
              </h5>
              <p className="text-[18px] font-normal text-[#666666]">
                Chief Innovation Officer
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className={`px-4 py-5 rounded-[28px] flex flex-col justify-center items-center ${isDarkMode ? 'bg-cardwhite' : 'bg-[#001432]'}`}>
          <span className="mb-4">
            <Image
              src="/cactus.png"
              alt=""
              width={180}
              height={36}
              className="w-full h-9"
            />
          </span>
          <p className="text-[18px] font-light text-textgray text-center">
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
              <h5 className="text-[18px] font-normal text-textgray">
                Liam Harper
              </h5>
              <p className="text-[18px] font-normal text-[#666666]">
                Chief Innovation Officer
              </p>
            </span>
          </div>
        </div>
      </div>
    </Slider>
  );
};
export default ImageSlider;