import React from 'react'

const Circle = ({number, text}) => {
  return (
    <div className='border border-[#ECB9FD] p-[2%] rounded-[50%] h-[150px] w-[150px] flex flex-col justify-center gap-4 border-t-0'>
        <h2 className='text-[#ECB9FD] text-center'>{number}</h2>
        <h2 className='text-[#ECB9FD] uppercase text-center'>{text}</h2>
    </div>
  )
}

export default Circle