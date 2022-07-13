import React from 'react'
import { useLocation } from "react-router-dom";

export default function Show() {
  const location = useLocation();
  const data = location.state
  const { name, video, genre, plot } = data
  console.log(name, video, genre, plot)
  return (
    <div className='padding'>
      <iframe title='asd' className="w-[800px] h-[500px] mx-auto mb-4" src={video}></iframe>
      <h1 className='text-3xl font-bold mb-2'>{name}</h1>
      <p className='text-xl mb-2'> <span className='font-semibold'>Plot :</span> {plot}</p>
      <div className="flex flex-wrap space-x-2 mb-2">
        <p className='text-xl font-semibold'>Genre : </p>
        {genre.map((g, i) => <p className='text-xl' key={i}>{g}</p>)}
      </div>
    </div>
  )
}
