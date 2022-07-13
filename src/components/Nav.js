import { useState, useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import { GoSearch, GoBell, GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';
import { VscListFlat, VscChromeClose } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';

export default function Nav() {
    const [navOpen, setNavOpen] = useState(false);
    const [openSearchBar, setopenSearchBar] = useState(false);
    const [isScrollable, setIsScrollable] = useState(false);
    const ref = useRef(null);
    const notify = () => toast.info("There is no notification now !");

    const toggleNav = () => {
        setNavOpen(!navOpen)
        setIsScrollable(!isScrollable)
    }
    const closeNav = () => { setNavOpen(false) }

    useEffect(() => {
        document.body.classList.toggle('body-fixed', isScrollable);
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setopenSearchBar(!openSearchBar)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, [openSearchBar, isScrollable])

    return (
        <nav className="padding grid grid-cols-2 shadow-xl sticky top-0 z-10 bg-white">
                <ul className="justify-start items-center">
                <Link to="/" className="text-3xl font-bold">
                    <img src={logo} className='h-7' alt="" />
                </Link>
                <li><Link to="/">Home</Link></li>
                <li><a href="/#tvshows">TV Shows</a></li>
                <li><a href="#!">Movies</a></li>
                <ToastContainer />

                </ul>

            <button className={`z-50 w-3/12 lg:w-1/12 ml-auto xl:hidden text-2xl`}
                onClick={toggleNav}>
                {navOpen ? <VscChromeClose className='text-white w-full' /> : <VscListFlat className='w-full ' />}
            </button>

            <div className={`absolute z-40 bg-black w-screen h-screen top-0 left-0 ${navOpen ? 'block' : 'hidden'} `}>
                <div className="padding flex flex-col text-white">
                    <Link to="/" onClick={closeNav} className="text-3xl font-bold mb-4">
                        <img src={logo} className='h-7' alt="" />
                    </Link>
                    {openSearchBar === true ? (
                        <div ref={ref} className="shadow-md mb-4">
                            <div className="input-group relative flex flex-wrap items-stretch w-full">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            </div>
                        </div>
                    ) : ''}
                    <Link to="/" onClick={closeNav} className="text-lg pb-2 ">Home</Link>
                    <Link to="/#trending" onClick={closeNav} className="text-lg pb-2">Trending</Link>
                    <Link to="/#tvshows" onClick={closeNav} className="text-lg pb-2">TV Shows</Link>
                    <Link to="/#movies" onClick={closeNav} className="text-lg pb-2">Movies</Link>
                    <Link to="/signin" onClick={closeNav} className="text-lg pb-2">Account</Link>
                    <Link to="#!" onClick={notify} className="text-lg pb-2">Notifications</Link>
                    <Link to="#!" onClick={closeNav} className="text-lg pb-2">About</Link>
                </div>
            </div>

            <div className={`hidden xl:block   ${navOpen ? 'bg-black text-white block' : 'hidden'}`}>
                <ul className='float-right mt-1'>
                    {openSearchBar === true ? (
                        <li ref={ref} className=''>
                            <div className="xl:w-72 shadow-md">
                                <div className="input-group relative flex flex-wrap items-stretch w-full">
                                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-0.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                </div>
                            </div>
                        </li>
                    ) : ''}

                    <li><Link to="#!"><GoSearch
                        onClick={() => setopenSearchBar(!openSearchBar)} className='text-xl mt-1 hover:text-red-500 cursor-pointer' /></Link></li>
                    <li><Link to="#!"><GoBell onClick={notify} className='text-xl mt-1 hover:text-red-500 cursor-pointer' /></Link></li>
                    <li><Link to="/signin"><GoPerson className='text-xl mt-1 hover:text-red-500 cursor-pointer' /></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
