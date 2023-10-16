"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { GoDotFill } from "react-icons/go";
import slideBg from "../sliderBg/slide_bg.png";
import device from "../sliderBg/device.png";
import Menu from "./Menu";

interface Slide {
  url: any;
  img: any;
  title: string;
  sub_title: string;
  btn_text: string;
}

const Slider: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { t } = useTranslation();

  const slides: Slide[] = [
    {
      url: slideBg,
      img: device,
      title: t("sliderText_1.title"),
      sub_title: t("sliderText_1.subText"),
      btn_text: t("sliderText_1.btnText"),
    },
    {
      url: slideBg,
      img: device,
      title: t("sliderText_2.title"),
      sub_title: t("sliderText_2.subText"),
      btn_text: t("sliderText_2.btnText"),
    },
    {
      url: slideBg,
      img: device,
      title: t("sliderText_3.title"),
      sub_title: t("sliderText_3.subText"),
      btn_text: t("sliderText_3.btnText"),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesCount);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [slidesCount]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full mx-auto relative">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url.src})`,
        }}
        className="px-1 bg-center bg-cover duration-500"
      >
        <div className="container">
          <Menu />
          <div className="flex flex-col py-20 md:flex-row space-y-8 justify-between items-center">
            <div className="text-center md:text-left md:pl-16">
              <p className="text-4xl md:text-[40px] text-[#373737] efx__fadeIn">
                {slides[currentIndex].title}
              </p>
              <h1 className="text-5xl md:text-7xl text-[#373737] font-bold efx__fadeIn mb-8">
                {slides[currentIndex].sub_title}
              </h1>
              <button className="border-[2px] border-[#373737] bg-transparent rounded-3xl py-3 px-6 font-semibold hover:bg-[#373737] hover:text-white transition duration-300 text-[#373737] efx__fadeIn">
                <a
                  href={
                    isMobile
                      ? "https://wa.me/whatsappphonenumber"
                      : "mailto:email@example.com"
                  }
                  target="_blank"
                >
                  {slides[currentIndex].btn_text}
                </a>
              </button>
            </div>

            <img
              className="w-[150px] md:w-[450px] efx__fadeInRight"
              src={slides[currentIndex].img.src}
              alt="device"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8 mb-16">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            {slideIndex === currentIndex ? (
              <GoDotFill className="text-[#FFB900]" />
            ) : (
              <GoDotFill className="text-[#6D5821]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
