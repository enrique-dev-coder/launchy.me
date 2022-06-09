import React from 'react'

const FontBoxes = ({title, text}) => {
  return (
    <div className='flex w-full gap-12 my-4 px-[8%]'>
        <div className="w-1/3">
            <h3 className='mb-2'>{title} Regular</h3>
            <p>{text}</p>
        </div>
        <div className="w-1/3 font-semibold">
            <h3 className='mb-2'>{title} Semibold</h3>
            <p>{text}</p>
        </div>
        <div className="w-1/3 font-bold">
            <h3 className='mb-2'>{title} Bold</h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default FontBoxes