import React from 'react'
import { ReactTyped } from "react-typed";   //For Typing React-Typed used
import photo from "../assets/Paraslogo1.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";

const Home = () => {
    return (
        <div name='Home' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
            <div className='flex flex-col md:flex-row'>
                <div className='md:w-1/2 ml-10 mt-10'>
                {/* height-width for image "className=w-[700px] h-[530px]" */}
                <img src={photo} className='md:w-screen md:h-full' alt="Paraslogo1.png" />
                </div>
                <div className='md:w-1/2 mt-12 md:mt-24 space-y-2'>
                    <span className='text-xl'>Welcome In My Feed</span>
                    <div className='flex space-x-1 text-2xl md:text-4xl '>
                        <h1>Hello, I'm a</h1>
                        {/* <span className='text-red-700 font-bold'>Developer</span> */}
                        <ReactTyped className='text-red-700 font-bold'
                            strings={["Developer", "Programer", "Coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div> <br />
                    <p className='text-sm md:text-md text-justify'>Hey! I am Paras Sharma.
                    I build interactive websites that run across platforms & devices.</p> <br />
                    {/* Social Mediaa Icons */}
                    <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                        <div className='space-y-2'>
                            <h1 className='font-bold'>Available on</h1>
                            <ul className='flex space-x-2'>
                                <li>
                                    <a href="https://www.facebook.com/prs4902?mibextid=ZbWKwL" target='_blank'>
                                    <abbr title='Facebook'>
                                    <FaFacebookSquare className='text-2xl cursor-pointer hover:scale-110 duration-200' /></abbr></a></li>

                                    
                                <li>
                                    <a href="https://www.linkedin.com/in/prs4902" target='_blank'>
                                    <abbr title="LinkedIn">
                                    <FaLinkedin className='text-2xl cursor-pointer hover:scale-110 duration-200' /></abbr></a></li>
                                <li>
                                    <a href="https://t.me/_prs4902" target='_blank'>
                                    <abbr title='Telegram'>
                                    <FaTelegram className='text-2xl cursor-pointer hover:scale-110 duration-200' /></abbr></a></li>
                            </ul>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold '>Currently Working On</h1>
                            <div className='flex space-x-2 '>
                            <abbr title="React">
                                <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title="JavaScript">
                                <RiJavascriptFill className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title="HTML5">
                                <FaHtml5 className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title="CSS3">
                                <IoLogoCss3 className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title="Tailwind CSS">
                                <RiTailwindCssFill className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title="BootStrap">
                                <FaBootstrap className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title='Git'><FaGitAlt className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></abbr>
                                <abbr title='Github'><FaGithub className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/></abbr>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default Home