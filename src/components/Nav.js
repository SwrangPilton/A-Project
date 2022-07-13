import React from 'react'
import logo from '../assets/logo.png'
import { GoSearch, GoBell, GoPerson } from "react-icons/go";

export default function Nav() {
    return (
        <nav className="grid grid-cols-2 p-x py-3 shadow-xl sticky top-0 z-10 bg-white">
            <div>
                <ul className="justify-start items-center">
                    <img className="h-7" src={logo} alt="Netflix" />
                    <li><a href="#!">Home</a></li>
                    <li><a href="#!">TV Shows</a></li>
                    <li><a href="#!">Movies</a></li>
                    <li><a href="#!">My List</a></li>
                </ul>
            </div>
            <div>
                <ul className="justify-end">
                    <li><GoSearch className='text-xl mt-1' /></li>
                    <li><GoBell className='text-xl mt-1 ' /></li>
                    <li><GoPerson className='text-xl mt-1 ' /></li>
                </ul>
            </div>
        </nav>
    )
}
