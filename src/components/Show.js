import React from 'react'
import { useLocation } from "react-router-dom";

export default function Show() {
  const location = useLocation();
  const data = location.state
  const { name, video, genre, plot } = data
  console.log(name, video, genre, plot)
  return (
    <div className='padding'>
      <iframe title='asd' className=" aspect-video hover:aspect-square" src={'https://youtu.be/kn6-c223DUU'}></iframe>
      <h1 className='text-2xl'>{name}</h1>
      <p>Plot : </p>
      <p>{plot}</p>
    </div>
  )
}
