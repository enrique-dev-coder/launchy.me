import React, { Fragment } from 'react'

const TeamPictures = () => {
  return (
    <Fragment>
        <h2 className='uppercase border-y-2 border-white text-white text-center my-5 py-[2%] text-4xl tracking-wider'>Somos <span className='text-white'>talento latino</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-[2%]">

            <div className="grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team fotos/Team Launchy (8).png' alt="" className='col-span-2 h-full relative z-30' />

                <img src='/img/team fotos/Flor (2).png' alt="" className='col-span-1 h-full relative z-30' />

                <img src='/img/team fotos/Ivana (3).png' alt="" className='col-span-1 h-full relative z-30' />

            </div>

            <div className="grid col-span-1 grid-cols-2 grid-rows-2 gap-4">

                <img src='/img/team fotos/Luis jugando (4).png' alt=""  className='row-span-2 col-span-1 h-full relative z-30'/>

                <img src='/img/team fotos/Jasu (5).png' alt=""  className='row-span-1 col-span-1 h-full relative z-30'/>

                <img src='/img/team fotos/Ivana trabajando (6).png' alt=""  className='row-span-1 col-span-1 h-full relative z-30'/>

            </div>

            <div className="grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team fotos/Luis cumple (7).png' alt="" className='col-span-1 h-full relative z-30' />

                <img src='/img/team fotos/Tite (9).png' alt="" className='col-span-1 h-full relative z-30' />

                <img src='/img/team fotos/Team Launchy (8).png' alt="" className='col-span-2 h-full relative z-30' />

            </div>

        </div>
    </Fragment>
  )
}

export default TeamPictures