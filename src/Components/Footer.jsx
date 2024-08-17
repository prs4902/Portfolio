import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='items-center flex flex-col justify-center'>
                        <div className='flex space-x-4'>
                        <a href="https://www.facebook.com/prs4902?mibextid=ZbWKwL" target='_blank'>
                        <abbr title='Facebook'>
                            <FaFacebook size={24} className='cursor-pointer hover:scale-110 duration-200'/>
                            </abbr></a>
                            <a href="https://www.Twitter.com" target='_blank'>
                                    <abbr title='Twitter'>
                            <FaTwitter size={24} className='cursor-pointer hover:scale-110 duration-200'/>
                            </abbr></a>
                            <a href="https://www.instagram.com/_prs4902?igsh=d253cHdsbzdvbHpp" target='_blank'>
                                    <abbr title='Instagram Profile'>
                            <FaInstagram size={24} className='cursor-pointer hover:scale-110 duration-200'/>
                            </abbr></a>
                            <a href="https://www.linkedin.com/in/prs4902" target='_blank'>
                                    <abbr title="LinkedIn Profile">
                            <FaLinkedinIn size={24} className='cursor-pointer hover:scale-110 duration-200'/>
                            </abbr></a>
                        </div>
                        <div className='mt-8 border-t border-gray-800 pt-8 flex flex-col items-center'>
                            <p className='text-sm'>&copy; 2024 prs4902. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer