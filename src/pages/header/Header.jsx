import React, { useState, useRef, useEffect } from 'react';
import logo from './header_img/maxWay logo.webp';
import uzflag from './header_img/uz.svg';
import ruflag from './header_img/ru.svg';
import enflag from './header_img/en.svg';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import User from './User';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFlag, setSelectedFlag] = useState(uzflag); // Default to uzflag
  const [userScreenOpen, setUserScreenOpen] = useState(false);
  const dropdownRef = useRef(null);
  const userScreenRef = useRef(null);

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (flag) => {
    setSelectedFlag(flag);
    setDropdownOpen(false);
  };

  const handleToggleUserScreen = () => {
    setUserScreenOpen(!userScreenOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
    if (userScreenOpen && userScreenRef.current && !userScreenRef.current.contains(event.target) && !event.target.classList.contains('Person')) {
      setUserScreenOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userScreenOpen]);

  return (
    <div className='w-[1440px] h-[80px] mx-auto'>
      <div className='w-[90%] h-[100%] mx-auto flex justify-between'>
        <div className='w-[38%] h-[100%]'>
          <ul className='w-[100%] h-[100%] flex items-center justify-between'>
            <img src={logo} alt="MaxWay Logo" className='w-[55px] h-[55px] cursor-pointer' />
            <li className='font-semibold cursor-pointer text-[17px]'>Menyu</li>
            <li className='text-[#4e4d4d] font-medium text-[17px] hover:shadow-2xl cursor-pointer hover:text-black hover:font-semibold'>Filiallar</li>
            <li className='text-[#4e4d4d] font-medium text-[17px] hover:shadow-2xl cursor-pointer hover:text-black hover:font-semibold'>Biz haqimizda</li>
            <li className='text-[#4e4d4d] font-medium text-[17px] hover:shadow-2xl cursor-pointer hover:text-black hover:font-semibold'>Bog'lanish</li>
          </ul>
        </div>
        <div className='w-[50%] h-[100%] flex justify-end gap-3'>
          <div className='w-[38%] h-[100%] flex items-center justify-start gap-3'>
            <button className='w-[32px] h-[32px] rounded-[50%] flex items-center justify-center bg-[#e8e7e7]'>
              <FmdGoodIcon className='text-violet-900' sx={{ width: "22px" }} />
            </button>
            <div className='leading-4'>
              <p className='text-[13.5px]'>Yetkazib berish yoki Olib ketish</p>
              <p className='text-[13.5px] text-violet-800'>Qabul qilib olish turini tanlang</p>
            </div>
          </div>
          <div className='w-[38%] h-[100%]'>
            <ul className='w-[100%] h-[100%] flex items-center justify-end gap-4'>
              <li ref={dropdownRef} className='relative'>
                <button
                  onClick={handleToggleDropdown}
                  className='flagsbtn w-[60px] h-[30px] flex items-center justify-evenly bg-[#e8e7e7] rounded-[15px]'
                >
                  <img src={selectedFlag} alt="selected flag" className='w-[18px] h-[18px]' />
                  <KeyboardArrowDownIcon className='text-violet-800' />
                </button>
                {dropdownOpen && (
                  <div className='absolute top-[40px] right-0 bg-white shadow-lg rounded-md'>
                    <ul>
                      <li className='flex gap-2 w-[120px] px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => handleOptionClick(uzflag)}>
                        <img src={uzflag} alt="Uzbek" className='w-[18px] h-[18px]' />Uzbek
                      </li>
                      <li className='flex gap-2 w-[120px] px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => handleOptionClick(ruflag)}>
                        <img src={ruflag} alt="Русский" className='w-[18px] h-[18px]' />Русский
                      </li>
                      <li className='flex gap-2 px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={() => handleOptionClick(enflag)}>
                        <img src={enflag} alt="English" className='w-[18px] h-[18px]' />English
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className='w-[30px] h-[30px] flex items-center justify-evenly bg-[#e8e7e7] rounded-[15px]'>
                <ShoppingCartIcon sx={{ width: "20px", height: "20px" }} className='text-violet-950' />
              </li>
              <li><span>0000 so'm</span></li>
              <li className='Person w-[30px] h-[30px] flex items-center justify-evenly bg-[#e8e7e7] rounded-[15px]' onClick={handleToggleUserScreen}>
                <PersonIcon sx={{ width: "22px", height: "22px" }} className='text-violet-950' />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {userScreenOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div ref={userScreenRef} className='bg-white p-8 rounded-lg shadow-lg w-[500px]'>
            <User onClose={handleToggleUserScreen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
