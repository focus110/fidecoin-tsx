"use client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

const FidaPay: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { t, i18n } = useTranslation();

  useEffect(() => {
    localStorage.setItem("scrollId", "fidapay");
  }, []);

  return (
    <div id="fidapay">
      <div className="container pt-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-x-8 mb-8">
          <div className="mb-8 md:mb-0">
            <img className="w-64" src="./images/Phone.png" alt="mobile phone" />
          </div>
          <div className="md:w-[30%]">
            <h4 className="text-2xl md:text-5xl text-white mb-8">
              {t("fidayPayText.text1").split(" ")[0]}{" "}
              {t("fidayPayText.text1").split(" ")[1]}{" "}
              {t("fidayPayText.text1").split(" ")[2]}{" "}
              {t("fidayPayText.text1").split(" ")[3]}{" "}
              {t("fidayPayText.text1").split(" ")[4]}{" "}
              {t("fidayPayText.text1").split(" ")[5]} <br />
              {t("fidayPayText.text1").split(" ")[6]}
              <span className="text-[#FACD46]">{t("fidayPayText.text2")}</span>,
              <br />
              <span className="text-[#FACD46]">
                {t("fidayPayText.text3")}
              </span>, {t("fidayPayText.text4")}{" "}
              <span className="text-[#FACD46]">{t("fidayPayText.text5")}</span>.
            </h4>
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

        <div className="flex flex-col md:flex-row justify-between mb-16 space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img className="w-14" src="./images/card.png" alt="creadit card" />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text6")} <br />
              {t("fidayPayText.text7")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img
              className="w-14"
              src="./images/image_2.png"
              alt="creadit card"
            />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text8")} <br />
              {t("fidayPayText.text9")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img
              className="w-14"
              src="./images/image_3.png"
              alt="creadit card"
            />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text10")}
            </p>
          </div>
          <div className="relative border-[3px] border-[#FACD46] md:w-[300px] h-44 rounded-xl p-4">
            <img
              className="w-10"
              src="./images/image_4.png"
              alt="creadit card"
            />
            <p className="absolute bottom-4 right-4 text-[#FACD46] text-right text-xl">
              {t("fidayPayText.text11")} <br />
              {t("fidayPayText.text12")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FidaPay;
