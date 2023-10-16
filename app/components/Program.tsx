"use client";
import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

interface ListItem {
  title: string;
  desc: string;
}
interface urlItem {
  title: string;
  url: string;
}

const Program: React.FC = () => {
  const isMobile: boolean = useMediaQuery({ query: "(max-width: 768px)" });
  const { t, i18n } = useTranslation();
  const [currentActive, setCurrentActive] = useState<number>(0);
  const list: ListItem[] = [
    {
      title: t("programText.text2"),
      desc: t("programText.text3"),
    },
    {
      title: t("programText.text4"),
      desc: t("programText.text5"),
    },
    {
      title: t("programText.text6"),
      desc: t("programText.text7"),
    },
    {
      title: t("programText.text8"),
      desc: t("programText.text9"),
    },
    {
      title: t("programText.text10"),
      desc: t("programText.text11"),
    },
    {
      title: t("programText.text12"),
      desc: t("programText.text13"),
    },
  ];

  const url: urlItem[] = [
    { title: t("programText.text14"), url: "./images/screen.png" },
    { title: t("programText.text2"), url: "./images/screen1.png" },
    { title: t("programText.text4"), url: "./images/screen2.png" },
    { title: t("programText.text6"), url: "./images/screen3.png" },
    { title: t("programText.text8"), url: "./images/screen4.png" },
    { title: t("programText.text10"), url: "./images/screen5.png" },
    { title: t("programText.text12"), url: "./images/screen6.png" },
  ];
  return (
    <div>
      <div className="container mb-16">
        <h2 className="text-[#FACD46] text-2xl md:text-4xl mb-8">
          {t("programText.text1")}
        </h2>
        <div className="flex justify-between md:space-x-12 h-screen">
          <img
            className="hidden md:block w-[50%] self-center"
            src={url[currentActive].url}
            alt="screen"
          />
          <div className="md:w-[50%] w-full">
            {list.map((index, i) =>
              currentActive === i + 1 ? (
                <div key={i}>
                  <div className="relative h-24 bg-[#FACD46] p-4 rounded-xl flex items-center justify-between mb-2">
                    <p className="absolute bottom-4 left-4 md:text-xl">
                      {index.title}
                    </p>

                    {currentActive === 0 ? (
                      <IoMdAdd
                        onClick={() => setCurrentActive(i + 1)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    ) : (
                      <IoMdRemove
                        onClick={() => setCurrentActive(0)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    )}
                  </div>
                  <div className="relative h-96 md:h-80 border-[2px] rounded-xl border-[#FACD46] mb-2">
                    <p className="absolute bottom-4 right-4 pl-4 text-right text-[#FACD46]">
                      {index.desc}
                    </p>
                  </div>
                </div>
              ) : null
            )}
            {list.map((index, i) =>
              currentActive === 0 ? (
                <div key={i}>
                  <div className="relative h-24 bg-[#FACD46] p-4 rounded-xl flex items-center justify-between mb-2">
                    <p className="absolute bottom-4 left-4 md:text-xl">
                      {index.title}
                    </p>

                    {currentActive === 0 ? (
                      <IoMdAdd
                        onClick={() => setCurrentActive(i + 1)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    ) : (
                      <IoMdRemove
                        onClick={() => setCurrentActive(0)}
                        className="absolute bottom-4 right-4 text-black cursor-pointer w-6 h-6"
                      />
                    )}
                  </div>
                </div>
              ) : null
            )}
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

export default Program;
