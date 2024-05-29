import { useContext, useEffect, useState } from "react";
import { LONGER } from "../APIData";
import { CountContext, SumContext } from "../../App";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Aksiya = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(LONGER);
  }, []);
  const { count, setCount } = useContext(CountContext);
  const { sum, setSum } = useContext(SumContext);

  return (
    <div className="mb-20">
      <h1 className=" font-bold text-3xl mb-4">Longer 1+1=3 Aksiya</h1>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="max-w-[320px] shadow-xl rounded-md h-[400px] mb-16"
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
                  {count ? (
                    <button
                      className="py-2 px-6 bg-[#660d8b] text-white rounded-full"
                      onClick={() => setCount(false)}
                    >
                      Qo'shish
                    </button>
                  ) : (
                    <button className="py-1 px-4  text-black border rounded-full  flex justify-between gap-3 items-center">
                      <span className="font-bold text-xl">
                        <FaMinus
                          onClick={() => {
                            if (sum > 1) {
                              setSum(sum - 1);
                            } else {
                              setCount(true);
                            }
                          }}
                        />
                      </span>
                      <span className="font-medium text-[24px]">{sum}</span>
                      <span className="font-bold text-xl">
                        <FaPlus className="" onClick={() => setSum(sum + 1)} />
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Aksiya;
