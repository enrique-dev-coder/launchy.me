import React from 'react'

const Card = ({alien, title, text, style}) => {
  return (
    <div className={`border border-white max-w-[286px] h-[250px] sm:h-full shrink-0 sm:shrink-1 sm:col-span-1 justify-self-center ${style}`}>

        <div className="bg-[url(/img/Fondo.png)] bg-cover flex border-b border-white pt-[2%] pl-[5%] h-[50px]">
            <img src={`/img/team/${alien}.png`} alt="" className='h-full' />
            <h2 className='uppercase text-white flex items-center ml-2 font-roboto text-[16px] tracking-wide'>{title}</h2>
        </div>

        <div className="text-white p-[6%]">
            {text}
        </div>

    </div>
  )
}

export default Card