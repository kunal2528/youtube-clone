import moment from 'moment'
import React from 'react'

function Time({time}) {
  const videoTime = moment()?.startOf('day')?.seconds(time);

  const formattedTime = videoTime.hours() > 0 
    ? videoTime.format('H:mm:ss')
    : videoTime.format('mm:ss'); 
    
  return (
    <div>
      <span className='text-xs rounded-md px-2 py-1 text-white bg-black absolute bottom-2 right-2'>{formattedTime}</span>
    </div>
  )
}

export default Time