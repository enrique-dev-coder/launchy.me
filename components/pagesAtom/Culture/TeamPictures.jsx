import React, { Fragment } from 'react'
import BoxesSlider from './BoxesSlider'

const TeamPictures = () => {
  return (
    <Fragment>

        <h2 className=' relative uppercase border-y-2 border-white text-white text-center my-[60px] md:my-[80px] py-[2%] text-4xl tracking-wider font-bold'>
            Somos <span className='text-white'>talento latino</span>
            <div className="absolute left-[5%] -top-[34%] h-[50px] w-[50px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] hidden sm:block ">
                <img
                    src="/img/team/latino.png"
                    alt="latino mami"
                    className="w-full h-full"
                />
            </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-[2%]">

            <div className="grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team fotos/Ivana trabajando (1).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Flor y Jasu (2).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Flor (3).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Ivana (4).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

            </div>

            <div className="grid col-span-1 grid-cols-2 grid-rows-2 gap-4">

                <img src='/img/team fotos/Luis jugando (5).png' alt=""  className='row-span-2 col-span-1 h-full relative z-30 mx-auto'/>

                <img src='/img/team fotos/Jasu (6).png' alt=""  className='row-span-1 col-span-1 h-full relative z-30 mx-auto'/>

                <img src='/img/team fotos/Tite (7).png' alt=""  className='row-span-1 col-span-1 h-full relative z-30 mx-auto'/>

            </div>

            <div className="grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team fotos/Leyendo (8).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Luis cumple (10).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Eli (9).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team fotos/Daily (11).png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

            </div>

        </div>

        <BoxesSlider />

    </Fragment>
  )
}

export default TeamPictures