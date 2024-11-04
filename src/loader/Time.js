import moment from 'moment'
import React from 'react'

function Time({time}) {
  const videoTime = moment()?.startOf('day')?.seconds(time)?.format('H:mm:ss')
  return (
    <div>
      <span className='text-xs rounded-md px-2 py-1 text-white bg-black absolute bottom-2 right-2'>{videoTime}</span>
    </div>
  )
}

export default Time