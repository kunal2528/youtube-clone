import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListItems() {
  const navigate = useNavigate();

  const categories = [ "All", "Hanuman Chalisa", "Music", "React", "Apple", "New Music", "News", "Punjabi Songs", "Interview React", "Snooker Beast Kunal", "Snooker", "Coding", "Next.js", "Lofi songs", "new ios update", "mac 15.1", "business"];

  const searchHandler = (item) => {
    navigate(`/search/${item}`);
  }

  return (
    <div className='flex overflow-x-scroll px-4 scrollbar-none'>
      <div className='flex space-x-4 flex-nowrap'>
        {
          categories.map((item) => {
            return <div key={item} className='mb-4 flex-none bg-gray-200 py-2 px-4 hover:bg-gray-300 duration-300 rounded-xl font-medium text-gray-700 cursor-pointer' onClick={() =>searchHandler(item)}>{item}</div>
          })
        }
      </div>
    </div>
  )
}

export default ListItems