import React from 'react'

const ServicesText = ({title, text, children}) => {
  return (
    <div className='flex flex-col md:flex-row py-[3%] px-[8%] gap-4 xl:gap-10 my-[60px] md:my-[80px]'>

        <div className="flex flex-col flex-1">

            <h2 className='uppercase text-white md:hidden text-3xl mb-[30px] text-center'>{`WE ${title}`}</h2>

            <div className="w-full h-[200px] bg-slate-100 relative z-30"></div>

        </div>

        <div className="flex flex-col flex-1 md:order-first gap-5">

            <h2 className='uppercase text-white hidden md:block text-3xl'>{`WE ${title}`}</h2>

            <p className='text-slate-100'>{text}</p>

            {children}

            <button className="text-white py-2 px-3 uppercase text-sm navbar_button w-1/3">
                Charlemos
            </button>

        </div>

    </div>
  )
}

export default ServicesText