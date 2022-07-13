import React, { useEffect, useState } from 'react'
import { GoTriangleRight, GoPlus } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import moviesData from '../data/walldata.json'

export default function Wall() {
    const [showID, setShowID] = useState(0);
    const [data, setData] = useState(() => JSON.parse(window.localStorage.getItem('movies')) || moviesData[0]);
    const movieslength = moviesData.length

    const getData = () => {
        if (showID >= movieslength - 1) setShowID(0)
        else setShowID(showID + 1)
    }

    useEffect(() => {
        // console.log(showID)
        window.localStorage.setItem('movies', JSON.stringify(moviesData[0]))
        setData(moviesData[showID])
    }, [showID])

    return (
        <div className='wall'>
            <div className="grid grid-cols-1 lg:grid-cols-6 relative">
                {data && (
                    <React.Fragment>
                        <div className='col-span-4 order-1 lg:order-2 '>
                            <iframe title='Wall' className='w-full h-full min-h-[250px]' src={data.video} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                            <div className="absolute top-[42%] right-2 ">
                                <div className="wall-next-btn">
                                    <BsChevronRight className='m-2' onClick={getData} />
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-tr from-gray-700 to-gray-500 padding col-span-2 
                flex flex-wrap flex-col justify-center order-2 lg:order-1 md:p-[30px] lg:p-[0 100px]">
                            <h1 className='text-3xl lg:text-5xl font-bold text-slate-50 mb-4'>{data.name}</h1>
                            <ul>
                                {data.genre.map((d, id) => <li key={id}><p>{d}</p></li>)}
                            </ul>

                            <p className='mt-12 mb-2 font-semibold'>Plot : </p>
                            <p className='text-lg line-clamp-3'>{data.plot}</p>
                            <Link to="/show" state={data} className='text-blue-400'>Read More</Link>

                            <div className='space-x-2 md:space-x-0 my-5 '>
                                <button className='pl-5 lg:pl-7 mr-3 border-2 border-transparent md:mb-2  bg-red-600 hover:bg-red-500 cursor-pointer'>
                                    <GoTriangleRight className='absolute text-xl top-3 left-1 cursor-pointer' /> <a href={data.video} target="_blank" rel="noopener noreferrer">Watch Now</a></button>
                                <button className='pl-7 lg:pl-9 border-2 '>
                                    <GoPlus className='absolute text-xl top-3 left-1 cursor-pointer' /> Add to Watch List</button>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div> 
        </div>
    )
}
