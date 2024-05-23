import React from 'react'

export const LevelOption = ({ title, options }) => {
    return (
        <>
            <div className="flex gap-2 items-center">
                <label htmlFor="year" className="w-fit inline-block shrink-0">{title}</label>
                <select className='w-[200px] ml-2 px-4 py-2 bg-slate-100 rounded-md text-lg font-semibold'>
                    {options.map((option, i) => (
                        <option key={i}>{option}</option>
                    ))}
                </select>
            </div>
        </>
    )
}