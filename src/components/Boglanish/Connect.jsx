import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import QrCode from "./Boglanish_img/qrcode.png"
import Footer from '../Menyu/Footer';

const Connect = () => {
  return (
    <div className='w-[1440px] mx-auto my-0'>
      <div className="w-[88%] mx-auto my-0">
      <h1 className="text-4xl font-bold py-6 text-black">Bog'lanish</h1>
      <div className="p-7 bg-[#96B1C2] w-[300px] h-[300px] rounded-[10px]">
        <img src={QrCode} alt="QrCode" className="w-[100px] h-[100px] mb-[10px] rounded-[10px]" />
        <p className="text-[18px] font-bold text-white mb-4">Telegramda sharh <br /> qoldiring yoki savol bering</p>
        <div className="flex gap-1 ">
          <FaTelegramPlane className="mt-[6px] text-white" />
          <a href="" className='text-[18px] font-normal text-white' >@maxwaymasterfood_bot</a>
        </div>
        </div>
        <p className="text-2xl font-bold pt-6 pb-1 text-black">Yagona aloqa markazi</p>
        <p className="">+998712005400</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Connect