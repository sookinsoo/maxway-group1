import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const Locate = ({ onClose }) => {
    return (
        <div className='w-[1100px] h-[580px] shadow-2xl mx-auto flex items-center justify-center bg-white rounded-[20px]'>
            <div className='w-[95%] h-[90%]'>
                <div className='w-[100%] h-[15%] leading-7 flex justify-between items-center'>
                    <div>
                        <h2 className='text-[28px] font-semibold'>Qabul qilib olish turini tanlang</h2>
                        <p className='text-gray-500 font-normal text-[17px]'>Real vaqt va moslashuvchan menyuni ko'rish uchun</p>
                    </div>
                    <div>
                        <CloseIcon className='cursor-pointer' onClick={onClose} />
                    </div>
                </div>
                <div className='w-[100%] h-[85%] flex justify-between'>
                    <div className='w-[50%] h-[100%]'>
                        <div className='w-[100%] flex justify-between'>
                            <button className='w-[49%] h-[45px] rounded-[20px] border bg-[#f1f1f1] text-violet-800 text-[17px]'>Yetkazib berish</button>
                            <button className='w-[49%] h-[45px] rounded-[20px] border bg-[#f1f1f1] text-violet-800 text-[17px]'>Olib ketish</button>
                        </div>
                        <input type="text" className='w-[100%] h-[45px] outline-none border rounded-[15px] mt-[20px] pl-[20px] text-[14px]' placeholder='Yetkazib berish manzili' />
                    </div>
                    <div className='w-[49%] h-[100%]'>
                        <iframe
                            className="w-[100%] h-[100%]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.176141914206!2d69.32750237543918!3d41.326782999753185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4f744c2e275%3A0x8d7b1cb1405f2b81!2sMax%20Way!5e0!3m2!1sen!2s!4v1716897255651!5m2!1sen!2s"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locate;
