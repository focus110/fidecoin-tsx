// import logo from "../images/logo.png";
import { useTranslation } from "react-i18next";

const Menu: React.FC = () => {
  const locales: any = {
    fr: { title: "FR" },
    esp: { title: "SP" },
    en: { title: "ENG" },
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="pt-9">
      <div className="flex justify-between items-center">
        <a href="/">
          <img className="w-32" src="./logo.png" alt="logo" />
        </a>
        <div className="space-x-4 md:space-x-6">
          {Object.keys(locales).map((locale) => (
            <button
              key={locale}
              onClick={() => i18n.changeLanguage(locale)}
              className="bg-transparent cursor-pointer text-[#100607] text-[16px]"
            >
              {locales[locale].title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
