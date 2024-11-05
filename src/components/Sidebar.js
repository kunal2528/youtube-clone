import React from 'react';
import { GoHistory, GoHome, GoLightBulb } from "react-icons/go";
import { SiYoutubekids, SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaFire, FaYoutube } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive, CgPlayList } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { RiYoutubeLine } from 'react-icons/ri';
import { useUtils } from '../context/UtilsContext';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const {mobileShow, setMobileShow} = useUtils();
  const navigate = useNavigate();

  const sidebarItems = [
    {
      groupName: 'Home',
      groupItems: [
        {
          id: 1,
          name: 'Home',
          icon: <GoHome />
        },
        {
          id: 2,
          name: 'Shorts',
          icon: <SiYoutubeshorts />
        },
        {
          id: 3,
          name: 'Subscriptions',
          icon: <MdOutlineSubscriptions />
        },
      ]
    },
    {
      groupName: 'You',
      groupItems: [
        {
          id: 1,
          name: 'History',
          icon: <GoHistory />
        },
        {
          id: 2,
          name: 'Playlists',
          icon: <CgPlayList />
        },
        {
          id: 3,
          name: 'Your videos',
          icon: <RiYoutubeLine />
        },
        {
          id: 4,
          name: 'Your courses',
          icon: <GoLightBulb />
        },
        {
          id: 5,
          name: 'Watch later',
          icon: <MdOutlineWatchLater />
        },
        {
          id: 6,
          name: 'Liked videos',
          icon: <AiOutlineLike />
        }
      ]
    },
    {
      groupName: 'Explore',
      groupItems: [
        {
          id: 1,
          name: 'Trending',
          icon: <FaFire />
        },
        {
          id: 2,
          name: 'Shopping',
          icon: <HiOutlineShoppingBag />
        },
        {
          id: 3,
          name: 'Music',
          icon: <SiYoutubemusic />
        },
        {
          id: 4,
          name: 'Films',
          icon: <PiFilmSlateLight />
        },
        {
          id: 5,
          name: 'Live',
          icon: <CgMediaLive />
        },
        {
          id: 6,
          name: 'Gaming',
          icon: <SiYoutubegaming />
        },
        {
          id: 7,
          name: 'News',
          icon: <FaRegNewspaper />
        },
        {
          id: 8,
          name: 'Sport',
          icon: <TfiCup />
        },
        {
          id: 9,
          name: 'Courses',
          icon: <PiLightbulbLight />
        },
        {
          id: 10,
          name: 'Fashion & beauty',
          icon: <SiStylelint />
        },
        {
          id: 11,
          name: 'Podcasts',
          icon: <MdPodcasts />
        }
      ]
    },
    {
      groupName: 'More from YouTube',
      groupItems: [
        {
          id: 1,
          name: 'YouTube Premium',
          icon: <FaYoutube />
        },
        {
          id: 2,
          name: 'YouTube Studio',
          icon: <SiYoutubeshorts />
        },
        {
          id: 3,
          name: 'YouTube Music',
          icon: <SiYoutubemusic />
        },
        {
          id: 4,
          name: 'YouTube Kids',
          icon: <SiYoutubekids />
        },
      ]
    },
  ];

  const ModelOverlay = () => {
    return (
      <div className='flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30' onClick={()=>setMobileShow(!mobileShow)}></div>
    )
  }

  const searchHandler = (item) => {
    navigate(`/search/${item}`);
  }

  return (
    <>
      <div className={`${
        mobileShow 
          ? "fixed top-0 left-0 bottom-0 transition-all duration-300 bg-white z-40 h-screen w-[60%] sm:w-[30%] py-4" 
          : "hidden w-[15%] h-[calc(100vh-6.625rem)]" 
        } xl:static xl:block px-2 lg:px-6 overflow-y-scroll overflow-x-hidden scrollbar-thin`}>
        <div className='space-y-3 items-center'>
          {sidebarItems.map(group => (
            <div className='mb-5' key={group.groupName}>
              <h1 className='font-bold'>{group.groupName}</h1>
              {
                group.groupItems.map(item => (
                  <div key={item.id} className='space-x-6 flex items-center hover:bg-gray-300 duration-300 rounded-md px-1 py-2 my-2' onClick={()=>searchHandler(item.name)}>
                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                    <span className='text-sm cursor-pointer'>{item.name}</span>
                  </div>
                ))
              }
            </div>
          ))}
        </div>
        <span className='text-xs font-semibold text-gray-500'>About Press Copyright<br />Contact us Creator <br />  Advertise Developers <br /><br />
        <p>Terms Privacy Policy & Safety <br /> How YouTube works <br /> Test new features</p> </span>
        <br />
        <p className='text-xs text-gray-800'>© 2024 Copyright</p>
      </div>
      {mobileShow ? <ModelOverlay /> : null}
    </>
  )
}

export default Sidebar