import React from 'react'

export const FormGroups = ({ title, setInputVal }) => {
    return (
        <div className='mb-10'>
            <label className='mb-2'>{title}</label>
            <div className='w-full relative'>
                <input type='text' onChange={(e) => setInputVal(e.target.value)} className='w-[300px] px-4 py-2 bg-slate-100 rounded-md' />
                <span className='absolute left-2 top-2 font-semibold'>{'$'}</span>
            </div>
        </div>
    )
}
