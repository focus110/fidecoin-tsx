"use client";
import { MdLocationOn, MdCall, MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-[#FACD48] py-16">
      <div className="container flex flex-col md:flex-row justify-between mb-11">
        <div className="md:w-[30%] mb-8 md:mb-0">
          <img className="w-40 mb-8" src="./images/logo.png" alt="logo" />
          <p className="text-[#373737] text-lg mb-8">{t("footerText.text1")}</p>
          <ul className="flex space-x-4 items-center">
            <li className="w-10 h-10 bg-[#373737] rounded-full flex justify-center items-center">
              <a href="#facebook">
                <FaFacebookF className="w-4 text-[#FACD48]" />
              </a>
            </li>
            <li className="w-10 h-10 bg-[#373737] rounded-full flex justify-center items-center">
              <a href="#twitter">
                <FaTwitter className="w-4 text-[#FACD48]" />
              </a>
            </li>
            <li className="w-10 h-10 bg-[#373737] rounded-full flex justify-center items-center">
              <a href="#instagram">
                <FaInstagram className="w-4 text-[#FACD48]" />
              </a>
            </li>
            <li className="w-10 h-10 bg-[#373737] rounded-full flex justify-center items-center">
              <a href="#linkedinIn">
                <FaLinkedinIn className="w-4 text-[#FACD48]" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="text-[#373737] text-2xl mb-6">
            {t("footerText.text2")}
          </h6>
          <div className="flex mb-2">
            <MdLocationOn className="w-8 text-3xl mr-2" />
            <p className="text-[#373737] text-lg">
              {t("footerText.text3")}
              <br />
              {t("footerText.text4")}
            </p>
          </div>
          <div className="flex mb-2">
            <MdCall className="w-8 text-3xl mr-2" />
            <p className="text-[#373737] text-lg">{t("footerText.text5")}</p>
          </div>
          <div className="flex">
            <MdEmail className="w-8 text-3xl mr-2" />
            <p className="text-[#373737] text-lg">{t("footerText.text6")}</p>
          </div>
        </div>
      </div>
      <p className="container text-lg">{t("footerText.text7")}</p>
    </div>
  );
};

export default Footer;
