import React from 'react'
import { CalculateText } from '../Components/CalculateText'
import LeftBox from '../Components/LeftBox'

export const Home = () => {
    return (
        <div className='w-full flex justify-center gap-6 px-6'>
            <div className='w-[70%]'><CalculateText /></div>
            <div className='w-[25%]'><LeftBox /></div>
        </div>
    )
}

