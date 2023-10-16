import Slider from "./components/Slider";
import Introduction from "./components/Introduction";
import FidaPay from "./components/FidayPay";
import Wallet from "./components/Wallet";
import Whatsapp from "./components/Whatsapp";
import Program from "./components/Program";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";
import "../i18n";

export default function Home() {
  return (
    <main className="bg-[#2F2F2F]">
      <Slider />
      <Introduction />
      <FidaPay />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Wallet />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Whatsapp />
      <hr className="container border-[1px] border-[#FACD46] mb-16" />
      <Program />
      <Partnership />
      <Footer />
    </main>
  );
}
