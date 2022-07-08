import React from 'react'

const Circle = ({number, text}) => {
  return (
    <div className='border-2 border-[#ECB9FD] p-[2%] rounded-[50%] h-[138px] w-[138px] flex flex-col justify-center gap-2 border-t-0 border-r-0'>
        <h2 className='text-[#ECB9FD] text-center roboto_normal font-semibold text-[18px] lg:text-[24px]'>{number}</h2>
        <h2 className='text-[#ECB9FD] uppercase text-center roboto_normal text-[14px]'>{text}</h2>
    </div>
  )
}

export default Circle