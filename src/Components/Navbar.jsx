import React, { useState } from 'react'
import "../Components/Navbar.css"
import logo from "../assets/logo.svg"
import { IoMdMenu } from "react-icons/io";
import { MdCancel } from "react-icons/md";

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
                        <li>Feature</li>
                        <li>Exchanges</li>
                        <li>How it Works?</li>
                        <li>Bog</li>
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

                    <button onClick={() => setShow(prev => !prev)} className='relative text-2xl'>{show ? <MdCancel className='text-red-500' /> : <IoMdMenu />}</button>
                </div>

                {show && (
                    <div className='absolute z-10 top-12 right-0 justify-center items-start gap-6 text-lg bg-white px-10 py-4 border-2'>
                        <ul className='navUl  flex flex-col justify-center items-start gap-7'>
                            <li>Feature</li>
                            <li>Exchanges</li>
                            <li>How it Works?</li>
                            <li>Bog</li>
                            <li>About us</li>
                        </ul>
                        <button className='btn py-[3px] px-4 mt-2 text-blue-500 rounded-md'>sign in</button>
                    </div>
                )}
            </div>


        </>
    )
}