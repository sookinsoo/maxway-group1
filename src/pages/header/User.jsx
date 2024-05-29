import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const User = ({ onClose }) => {
    const [phone, setPhone] = useState('+998');
    const [isPhoneValid, setIsPhoneValid] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        if (value.startsWith('+998') && value.length <= 13) {
            setPhone(value);
            setIsPhoneValid(value.length === 13); // 13 characters means +998 and 9 more digits
        }
    };

    return (
        <div className='w-[450px] h-[350px] rounded-[10px] flex items-center relative'>
            <button onClick={onClose} className='absolute top-[5%] left-[90%]'><CloseIcon /></button>
            <div className='w-[85%] h-[75%] mx-auto'>
                <h2 className='text-[40px] font-semibold text-center'>Tizimga kirish</h2>
                <p className='text-[20px] text-[gray] text-center'>Telefon raqamingiz bilan tizimga kiring</p>
                <div className='mt-[20px]'>
                    <form action="">
                        <label htmlFor="phone" className='text-[18px] text-[#6c6c6c]'>Telefon raqam</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={handleInputChange}
                            className='h-[45px] outline-none pl-[15px] mt-[10px] border block w-[100%] border-black rounded-[10px]'
                        />
                    </form>
                    <button
                        className={`w-[100%] mt-[35px] h-[45px] rounded-[15px] border font-semibold ${
                            isPhoneValid ? 'bg-violet-500 text-white' : 'bg-[#e6e6e6] text-[gray]'
                        }`}
                    >
                        Kodni yuborish
                    </button>
                </div>
            </div>
        </div>
    );
};

export default User;
