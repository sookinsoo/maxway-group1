import React, { useEffect, useState } from "react";
import Footer from "../Menyu/Footer";

const Services = () => {
  const [data, setData] = useState([]);
  const [activeView, setActiveView] = useState("list");

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "MAX WAY BERUNIY",
        time: "23:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 2,
        name: "MAX WAY ATLAS",
        time: "22:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 3,
        name: "MAX WAY - DRUJBA",
        time: "04:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 4,
        name: "MAX WAY MEGA PLANET",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 5,
        name: "MAX WAY AVIASOZLAR",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 6,
        name: "MAX WAY RISOVIY",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 7,
        name: "MAX WAY PARUS",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 8,
        name: "MAX WAY MAGIC CITY",
        time: "22:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 9,
        name: "MAX WAY SAMARQAND DARVOZA",
        time: "22:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 10,
        name: "MAX WAY PARKENT",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 11,
        name: "MAX WAY UNIVERSAM",
        time: "23:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 12,
        name: "MAX WAY ROYSON",
        time: "01:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 13,
        name: "MAX WAY NEXT",
        time: "22:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 14,
        name: "MAX WAY MUQUMIY",
        time: "04:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 15,
        name: "MAX WAY GRAND MIR",
        time: "04:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 16,
        name: "MAX WAY SAYRAM",
        time: "04:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 17,
        name: "MAX WAY MAKSIM GORKIY",
        time: "01:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 18,
        name: "MAX WAY SERGELI",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 19,
        name: "MAX WAY FONTAN",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
      {
        id: 20,
        name: "MAX WAY MINOR",
        time: "03:00 gacha ochiq",
        location: "улица Беруни, 47, Ташкент",
        workingTime: "Du-Yak: 10:00-23:00",
        phone: +998712005400,
      },
    ]);
  }, []);
  const showList = () => setActiveView("list");
  const showMap = () => setActiveView("map");

  return (
    <div className="max-w-[1440px] flex flex-col  w-full mx-auto">
      <div className="flex w-full items-center justify-between px-5 py-10  bg-[#ffffff] ">
        <h1 className="text-[32px] font-bold">Filiallar</h1>
        <div className="flex gap-3">
          <button
            className={`text-white text-[16px] w-[150px] h-[45px] border rounded-3xl ${
              activeView === "list" ? "bg-[#52277d]" : "bg-gray-500"
            }`}
            onClick={showList}
          >
            Ro'yxat
          </button>
          <button
            className={`text-white text-[16px] w-[150px] h-[45px] border rounded-3xl ${
              activeView === "map" ? "bg-[#52277d]" : "bg-gray-500"
            }`}
            onClick={showMap}
          >
            Xarita
          </button>
        </div>
      </div>

      {activeView === "list" && (
        <div className=" px-5 flex flex-col  w-[45%] gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 p-5 shadow-md  rounded-3xl border-2 border-[#fafafa]  bg-[#ffffff] flex-col  items-start justify-center"
            >
              <div className="w-full flex items-start justify-between">
                <div>
                  <h2 className="font-bold text-[24px]">{item.name}</h2>
                  <p>{item.location}</p>
                </div>
                <div>
                  <p className="text-[#59c439] text-[15px]">{item.time}</p>
                </div>
              </div>
              <div className="w-full border"></div>
              <div className="flex w-full justify-between items-center">
                <div>
                  <p className="text-gray-500 text-[15px]">Ish vaqti:</p>
                  <p>{item.workingTime}</p>
                </div>
                <div className="text-end">
                  <p className="text-gray-500 text-[15px]">Telefon:</p>
                  <p>{item.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeView === "map" && (
        <iframe
          className="max-w-[1440px] w-full absolute -z-10  bottom-0 overflow-hidden h-screen  "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.176141914206!2d69.32750237543918!3d41.326782999753185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f744c2e275%3A0x8d7b1cb1405f2b81!2sMax%20Way!5e0!3m2!1sen!2s!4v1716897255651!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      <Footer/>
    </div>
  );
};

export default Services;
