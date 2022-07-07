import React from 'react'
import Wrapper from '../Wrapper'

const ServicesText = ({title, text, children, picture, id}) => {
  return (
    <Wrapper>
        <div className='flex flex-col lg:flex-row py-[3%]  gap-4 xl:gap-10 my-[60px] lg:my-[80px]' id={`${id}`}>

          <div className="flex flex-col flex-1 items-center">

            <h2 className='uppercase text-white lg:hidden text-3xl mb-[30px] text-center font-roboto'>{`WE ${title}`}</h2>

            <img src={picture} alt="" className='z-30 sm:max-w-[438px] sm:max-h-[259px] lg:ml-auto' />

          </div>

          <div className="flex flex-col flex-1 lg:order-first gap-5">

            <h2 className='uppercase text-white hidden lg:block text-3xl'>{`WE ${title}`}</h2>

            <p className='text-slate-100 pr-7'>{text}</p>

            {children}

            <button className="text-white py-2 px-3 uppercase text-sm navbar_button w-2/4 mt-4">
              Charlemos
            </button>

          </div>

        </div>
    </Wrapper>
    
  )
}

export default ServicesText