import React from 'react'

export default function Card({imageUrl, category, title, date, month}) {
  return (
    <div className='container relative w-96 mr-14'>
        {/* Image */}
        <img src={imageUrl} alt="event" className="w-full rounded-3xl object-cover" />

        {/* Details */}
        <div className="container absolute bottom-8 left-4 w-full flex flex-col">
            <h1 className='text-red-200 uppercase'>{category}</h1>
            <p className='text-white capitalize'>{title}</p>
        </div>

        {/* Time */}
        <div className="absolute top-4 right-4 w-20 h-20 bg-white flex flex-col items-center p-2 rounded-lg">
          <span className="text-gray-700 text-md uppercase">{month}</span>
          <span className="text-black text-3xl font-bold">{date}</span>
        </div>
    </div>
  )
}