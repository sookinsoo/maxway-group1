import { useEffect, useState } from "react";
import { SOUS } from "../APIData";

const Sous = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(SOUS);
  }, []);

  return (
    <div className="mb-20">
      <h1 className=" font-bold text-3xl mb-4">🥫Souslar</h1>
      <div className=" grid grid-cols-4">
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[320px] shadow-xl rounded-md h-[400px] mb-6"
              >
                <img
                  src={item.image}
                  alt="img"
                  className="w-[100%] h-[60%] rounded-xl"
                />
                <div className="p-5">
                  <h1 className="font-bold text-xl">{item.name}</h1>
                  <h1 className="text-[12px]">{item.desc}</h1>
                  <div className="flex justify-between items-center mt-2">
                    <p className="font-medium text-xl">{item.price} som</p>
                    <button className="py-2 px-6 bg-[#660d8b] text-white rounded-full">
                      Qo'shish
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Sous;
