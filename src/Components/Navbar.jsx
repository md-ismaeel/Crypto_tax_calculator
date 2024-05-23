import React, { useState } from 'react'
import "../Components/Navbar.css"
import logo from "../assets/logo.svg"
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {

    const [show, setShow] = useState(false)

    return (
        <>
            <div className='lg-screen w-full h-[60px] flex justify-between items-center px-16 border-b-2 bg-white'>
                <div className='cursor-pointer'>
                    <img src={logo} alt='logo' height={'100px'} width={"100px"} />
                </div>
                <div className='flex justify-center items-center gap-6 text-lg'>
                    <ul className='navUl flex justify-center items-center gap-7'>
                        <li>feature</li>
                        <li>exchanges</li>
                        <li>how it Works?</li>
                        <li>bog</li>
                        <li>About us</li>
                    </ul>
                    <button className='btn py-[3px] px-4 text-blue-500 rounded-md'>sign in</button>
                </div>
            </div>

            <div className='sm-devise hidden'>

                <div className='w-full flex justify-between items-center px-4 mt-2'>
                    <div className='cursor-pointer'>
                        <img src={logo} alt='logo' height={'100px'} width={"100px"} />
                    </div>

                    <button onClick={() => setShow(prev => !prev)} className='relative text-2xl'><IoMdMenu /></button>
                </div>

                {show && (
                    <div className='absolute top-10 right-0 justify-center items-start gap-6 text-lg bg-white px-10 py-4'>
                        <ul className='navUl  flex flex-col justify-center items-start gap-7'>
                            <li>feature</li>
                            <li>exchanges</li>
                            <li>how it Works?</li>
                            <li>bog</li>
                            <li>About us</li>
                        </ul>
                        <button className='btn py-[3px] px-4 mt-2 text-blue-500 rounded-md'>sign in</button>
                    </div>
                )}
            </div>


        </>
    )
}