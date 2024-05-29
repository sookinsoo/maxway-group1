import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aksiya from "./Aksiya";
import Yangilik from "./Yangilik";
import Baraka from "./Baraka";
import Klab from "./Klab";
import Lavash from "./Lavash";
import Shourma from "./Shourma";
import Burger from "./Burger";
import Donar from "./Donar";
import HotDog from "./HotDog";
import Gazak from "./Gazak";
import Tamad from "./Tamad";
import Desert from "./Desert";
import Ichimlik from "./Ichimlik";
import Sous from "./Sous";
import Footer from "./Footer";
import Carousel from "../Carousel/Carousel";

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-20 rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        className="h-12 w-6 text-black absolute top-[-8px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
          className=" absolute"
        ></path>
      </svg>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-gray-20 rounded-full w-8 h-8 flex items-center justify-center absolute top-1/2 transform -translate-y-1/2`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <svg
        className="h-6 w-6 text-black absolute top-[6px]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </div>
  );
};

const Menu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Carousel/>
      <div className=" mx-auto px-4 py-8">
        <Slider {...settings}>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center text-xl font-medium">
            <a href="#ak">1+1=3 Aksiya</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#yan">Yangiik 📣</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#bar">🍟🍔🥤Barakali</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#klab">🥪Klab</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#lav">🌯Lavash</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#shov">🌮Shourma</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#bur">🍔Burger</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#don">🍱Donar</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#hot">🌭Hot-Dog</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#gaz">🍟Gazaklar</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#tam">🥙Tamaddilar</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#des">🍰Desert</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#ich">🥤Ichimliklar</a>
          </h1>
          <h1 className="px-4 py-2 hover:bg-slate-300 hover:text-[#5e0085] transition duration-500  hover:rounded-lg text-center font-medium text-xl">
            <a href="#sou">🥫Souslar</a>
          </h1>
        </Slider>
      </div>
      <p id="ak">
        <Aksiya />
      </p>
      <p id="yan">
        <Yangilik />
      </p>
      <p id="bar">
        <Baraka />
      </p>
      <p id="klab">
        <Klab />
      </p>
      <p id="lav">
        <Lavash />
      </p>
      <p id="shov">
        <Shourma />
      </p>
      <p id="bur">
        <Burger />
      </p>
      <p id="don">
        <Donar />
      </p>
      <p id="hot">
        <HotDog />
      </p>
      <p id="gaz">
        <Gazak />
      </p>
      <p id="tam">
        <Tamad />
      </p>
      <p id="des">
        <Desert />
      </p>
      <p id="ich">
        <Ichimlik />
      </p>
      <p id="sou">
        <Sous />
      </p>
      <Footer />
    </div>
  );
};

export default Menu;
