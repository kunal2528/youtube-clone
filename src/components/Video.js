import React from 'react'
import { Link } from 'react-router-dom';
import Time from '../loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

function Video({video}) {
  
  return (
    <div className=''>
      <Link to={`/video/${video.videoId}`}>
        <div className='flex flex-col'>
          <div className='relative h-48 md:h-56 rounded-xl hover:rounded-none duration-200 overflow-hidden'>
            <img className='h-full w-full' src={video?.thumbnails[0]?.url} alt="thumbnail" />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          <div className='flex mt-3 space-x-2'>
            <div className='flex items-start'>
              <div className='flex w-9 h-9 rounded-full overflow-hidden border'>
                <img className='w-full h-full overflow-hidden rounded-full' src={video?.author?.avatar[0]?.url} alt='avatar' />
              </div>
            </div>
            <div>
              <span className='text-sm font-bold line-clamp-2'>{video?.title}</span>
              <span className='flex items-center font-semibold mt-1 text-[12px] text-gray-600'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && <BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]' />}
              </span>
              <div className='flex text-gray-500 items-center text-[12px]'>
                {video?.stats?.views && <span>
                  {`${abbreviateNumber(video?.stats?.views, 2)} views`}
                </span>}
                {video?.stats?.views && <span className='flex leading-none font-bold relative top-[-1px] mx-1'>•</span> }
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div> 
  )
}

export default Video