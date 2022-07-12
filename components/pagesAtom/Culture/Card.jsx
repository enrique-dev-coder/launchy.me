import React from 'react'

const Card = ({alien, title, text}) => {
  return (
    <div className={`border border-white w-[286px] h-[187px] shrink-0`}>

        <div className="bg-gradient-to-l from-[#4254A8] to-[#FF89FB] flex border-b border-white pt-[2%] pl-[14px] h-[44px] z-20 relative">
            <img src={`/img/team/${alien}.png`} alt="" className='h-full' />
            <h2 className='uppercase text-white flex items-center ml-2 font-roboto text-[16px] tracking-[.1rem]'>{title}</h2>
        </div>

        <p className="text-white w-[254px] h-[124px] mx-[16px] my-[10px] roboto_normal text-sm">
            {text}
        </p>

    </div>
  )
}

export default Card