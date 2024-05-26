import React from 'react'
import { CalculateText } from '../Components/CalculateText'
import LeftBox from '../Components/LeftBox'
import "../Home/Home.css"

export const Home = () => {
    return (
        <div className='home w-full flex justify-center gap-6 px-6'>
            <div className='calc w-[75%]'><CalculateText /></div>
            <div className='left-box w-[25%]'><LeftBox /></div>
        </div>
    )
}

