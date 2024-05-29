import React from 'react';
import product from './img/max.webp';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Box = () => {
  return (
    <div className='w-[100%] flex'>
      <div className='w-[65%] '>
        <h2 className='text-[36px] font-semibold pl-[20px] mb-[10px]'>Savatcha</h2>
        <div className='w-[95%] mx-auto rounded-[25px] shadow-2xl'>
          <div className='w-[100%] h-[150px] border-b-[1px] flex justify-between items-center'>
            <div className='w-[60%] h-[100%] flex items-center gap-3'>
              <img src={product} alt="" className='w-[90px] h-[80px] rounded-[10px] ml-[20px]' />
              <div>
                <p className='font-semibold text-[20px]'>Kraft packet</p>
                <p className='text-[14px] text-[gray]'>Aksiya Longer 2+1 Ikkita longer xarid qiling - uchinchisini bepul oling! 😋</p>
              </div>
            </div>
            <div className='flex items-center justify-end gap-3 w-[35%] h-[100%]'>
              <div className='w-[110px] h-[35px] border border-violet-900 rounded-[20px] flex items-center justify-center gap-3'>
                <div className='font-semibold'><RemoveIcon /></div>
                <span className='font-semibold text-[20px]'>0</span>
                <div className='font-semibold'><AddIcon /></div>
              </div>
              <div className='mr-[30px]'>
                <span className='font-semibold text-[20px]'>2000 so'm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='scrollBar w-[35%] h-[85vh]'>
        <div className='scrolBox w-[90%] h-[250px] rounded-[10px] mx-auto mt-[60px] flex items-center shadow-2xl  sticky top-0'>
          <div className='w-[90%] mx-auto h-[90%]'>
            <div className='border-b-[1px]'>
              <h3 className='font-semibold text-[22px]'>Umumiy</h3>
              <div className='w-[100%] h-[35px] flex items-center justify-between'>
                <p className='font-normal text-[17px]'>Yetkazib berish</p> 
                <span className='text-[18px]'>0 so'm</span>
              </div>
              <div className='w-[100%] h-[35px] flex items-center justify-between mb-[10px]'>
                <p className='font-normal text-[17px]'>Mahsulotlar</p> 
                <span className='text-[18px]'>0 so'm</span>
              </div>
            </div>
            <div>
              <div className='flex justify-between mt-[20px]'>
                <p>To'lash uchun</p>
                <span>0 so'm</span>
              </div>
              <button className='mt-[15px] w-[100%] h-[45px] rounded-[15px] outline-none bg-violet-500 text-white font-semibold'>To'lov sahifasiga o'tish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
