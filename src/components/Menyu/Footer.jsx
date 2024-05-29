import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const img =
    "https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=64&q=75";

  return (
    <div>
      <hr />
      <div className="my-8 flex justify-between items-center">
        <div>
          <img src={img} alt="Footer logo" />
        </div>
        <div className="flex gap-5">
          <p className="font-medium text-xl opacity-65">Filial</p>
          <p className="font-medium text-xl opacity-65">Biz haqimida</p>
          <p className="font-medium text-xl opacity-65">Bog'lanish</p>
        </div>
        <div>
          <p></p>
        </div>
      </div>
      <hr />
      <div className="flex  justify-between py-6">
        <div>© Delever 2020 - 2024 Barcha huquqlar himoyalangan</div>
        <div className="flex gap-6">
          <FaInstagram className="w-7 h-7 opacity-65" />
          <FaFacebook className="w-7 h-7 opacity-65" />
          <FaYoutube className="w-7 h-7 opacity-65" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
