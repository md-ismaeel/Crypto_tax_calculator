import React from 'react'

export const FormGroupReadOnly = ({ title, val }) => {
    return (
        <div className='mb-10'>
            <label className='mb-2'>{title}</label>
            <div className='w-full relative'>
                <input type='text' readOnly value={val} className='w-[300px] px-4 py-2 bg-slate-100 rounded-md outline-none' />
                <span className='absolute left-2 top-2 font-semibold'>{'$'}</span>
            </div>
        </div>
    )
}
