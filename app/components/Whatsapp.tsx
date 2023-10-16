"use client";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const Whatsapp: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 768px)" });
  const { t, i18n } = useTranslation();
  return (
    <div>
      <div className="container pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 mb-16">
          <div className="flex flex-col items-center md:items-end">
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
              {t("whatsappText.text1")}
            </p>
            <img
              className="w-8 mb-4"
              src="./images/img1.png"
              alt="mobile phone"
            />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
              {t("whatsappText.text2")}
            </p>
            <img
              className="w-8 mb-4"
              src="./images/img2.png"
              alt="mobile phone"
            />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
              {t("whatsappText.text3")}
            </p>
            <img
              className="w-8 mb-4"
              src="./images/img3.png"
              alt="mobile phone"
            />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-4">
              {t("whatsappText.text4")}
            </p>
            <img
              className="w-8 mb-4"
              src="./images/img4.png"
              alt="mobile phone"
            />
            <p className="text-[#FACD46] text-xl text-left md:text-right mb-8 md:mb-4">
              {t("whatsappText.text5")}
            </p>
          </div>
          <div className="mb-8 md:mb-0">
            <img
              className="w-64"
              src="./images/device2.png"
              alt="mobile phone"
            />
          </div>
          <div className="md:w-[30%] text-center">
            <h4 className="text-3xl md:text-5xl text-[#FACD46] mb-4 text-left">
              {t("whatsappText.text6")} <br />
              {t("whatsappText.text7")}
            </h4>
            <div className="relative flex items-center space-x-4 mb-20">
              <img
                className="w-12"
                src="./images/whatsapp.png"
                alt="mobile phone"
              />
              <p className="text-3xl md:text-5xl text-white">
                {t("whatsappText.text8")}{" "}
              </p>
              <div className="absolute md:left-24 left-0 -bottom-11 flex items-center space-x-2">
                <img
                  className="w-6"
                  src="./images/info.png"
                  alt="mobile phone"
                />
                <p className="domion_font text-white">
                  {t("50_Millions_users")}
                </p>
              </div>
            </div>

            <p className="text-3xl md:text-5xl text-[#FACD46] text-center mb-8">
              {t("whatsappText.text9")}
            </p>
            <button className="mt-2 bg-[#FACD46] hover:bg-transparent border-[2px] border-[#FACD46] transition duration-300 hover:text-[#FACD46] text-xl rounded-3xl py-3 px-6 w-full md:w-64">
              <a
                href={
                  isMobile
                    ? "https://wa.me/whatsappphonenumber"
                    : "mailto:email@example.com"
                }
                target="_blank"
              >
                {t("btnText")}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
