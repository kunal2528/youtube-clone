import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Logo from '../logo.png';
import { CiSearch } from "react-icons/ci";
import { IoIosSearch, IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import { useUtils } from '../context/UtilsContext';
import { IoArrowBack } from 'react-icons/io5';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const {setIsSideBar, isSideBar, setMobileShow, mobileShow} = useUtils();
  const [searchBar, setSearchBar] = useState(false);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const navigateYoutube = () => {
    navigate("/");
  }

  const handleSideBar = () => {
    if(window.innerWidth <= 1280) {
      setIsSideBar(!isSideBar);
      setMobileShow(!mobileShow);
    }
    setIsSideBar(!isSideBar);
  }

  if(searchBar) {
    return (
      <div className='flex justify-between px-6 py-2 fixed top-0 bg-white w-[100%] items-center'>
        <IoArrowBack size={20} className='cursor-pointer' onClick={() => setSearchBar(!searchBar)} />
        <div className='flex flex-grow mx-4'>
          <div className='w-[100%] px-3 py-2 border border-gray-400 rounded-l-full'>
            <input type="text" placeholder='Search' className='outline-none' onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} />
          </div>
          <button className='px-5 py-2 bg-gray-100 border border-gray-400 rounded-r-full' onClick={() => searchQueryHandler("searchButton")}>
            <CiSearch size={'24px'} />
          </button>
        </div>
        <IoMdMic size={'42px'} className='ml-3 border rounded-full p-1 border-gray-400 cursor-pointer hover:bg-gray-200 duration-200' />
      </div>
    )
  }

  return ( 
    <div className='flex justify-between px-6 py-2 fixed z-40 top-0 bg-white w-[100%]'>
      <div className='flex items-center space-x-4'>
        <AiOutlineMenu className='text-xl cursor-pointer' onClick={handleSideBar} />
        <img src={Logo} alt="logo" className='w-20 md:w-28 cursor-pointer' onClick={navigateYoutube} />
      </div>
      <div className='md:flex w-[45%] hidden'>
        <div className='w-[100%] px-3 py-2 border border-gray-400 rounded-l-full'>
          <input type="text" placeholder='Search' className='outline-none' onChange={(e) => setSearchQuery(e.target.value)} onKeyUp={searchQueryHandler} value={searchQuery} />
        </div>
        <button className='px-5 py-2 bg-gray-100 border border-gray-400 rounded-r-full' onClick={() => searchQueryHandler("searchButton")}>
          <CiSearch size={'24px'} />
        </button>
        <IoMdMic size={'42px'} className='ml-3 border rounded-full p-1 border-gray-400 cursor-pointer hover:bg-gray-200 duration-200' />
      </div>
      <div className='flex space-x-1 md:space-x-4'>
        <IoIosSearch size={'42px'} className='md:hidden hover:border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' onClick={() => setSearchBar(!searchBar)} />
        <RiVideoAddLine size={'42px'} className='hover:border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
        <AiOutlineBell size={'42px'} className='ml-3 hover:border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
        <CgProfile size={'42px'} className='ml-3 hover:border rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200' />
      </div>
    </div>
  )
}

export default Navbar