import React from 'react'

const Card = ({alien, title, text}) => {
  return (
    <div className='border border-white col-span-1'>

        <div className="bg-[url(/img/Fondo.png)] bg-cover flex border-b border-white py-[2%] pl-[5%] h-[50px]">
            <img src={`/img/team/${alien}.png`} alt="" className='h-full' />
            <h2 className='uppercase text-white flex items-center ml-2'>{title}</h2>
        </div>

        <div className="text-white p-[6%]">
            {text}
        </div>

    </div>
  )
}

export default Card