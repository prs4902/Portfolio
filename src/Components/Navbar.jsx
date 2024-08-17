import React, { useState } from 'react'
import pic from '../assets/Paras.photo.png'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const navItems = [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "About"
        },
        {
            id: 3,
            text: "Projects"
        },
        {
            id: 4,
            text: "Contact"
        },
    ]
    return (
        <>
            <div className='max-w-screen-2xl container shadow-md mx-auto h-16 px-4 md:px-20 fixed top-0 left-0 right-0 z-50 bg-white'>
                <div className='flex justify-between items-center h-16'>
                    <div className='flex space-x-2 '>
                        <img src={pic} className='h-14 w-14 rounded-full' alt="Paras.photo.png" />
                        <h1 className='font-semibold text-xl cursor-pointer'>Paras <span className='text-red-800 '>Sharma</span>
                            <p className='text-sm'>Web Developer</p>
                        </h1>
                    </div>
                    {/* desktop navbar  */}
                    <div>
                        <ul className='hidden md:flex space-x-8'>
                            {
                                navItems.map(({ id, text }) => (
                                    <li className='hover:scale-105 duration-200 cursor-pointer hover:text-red-800' key={id}>
                                        <Link to={text}
                                            smooth={true}
                                            duration={500}
                                            offset={-70}
                                            activeClass='active'>
                                            {text}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div onClick={() => setMenu(!menu)} className='md:hidden'>
                            {menu ? <RxCross1 size={24} /> : <AiOutlineMenu size={24} />}</div>
                    </div>
                </div>
                {/* Mobile Navbar */}
                {menu && (
                    <div className='bg-white/10 backdrop-blur-md fixed inset-0'>
                        <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl'>
                            {navItems.map(({ id, text }) => (
                                <li className='hover:scale-105 duration-200 cursor-pointer hover:text-red-800' key={id}>
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={text}
                                        smooth={true}
                                        duration={500}
                                        offset={-70}
                                        activeClass='active'>
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </>
    )
}

export default Navbar