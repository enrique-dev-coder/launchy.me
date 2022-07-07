import React, { Fragment } from 'react'
import BoxesSlider from './BoxesSlider'

const TeamPictures = () => {
  return (
    <Fragment>

        <h2 className=' relative uppercase border-y-2 border-white resource_text text-center my-[60px] md:my-[80px] py-[3%] text-3xl sm:text-4xl xl:text-5xl xl:py-[2%] tracking-wider font-bold font-roboto'>
            Somos <span className='text-white'>talento latino</span>
            <div className="absolute left-[5%] -top-[34%] xl:-top-[47%] h-[50px] w-[50px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] hidden sm:block ">
                <img
                    src="/img/team/latino.png"
                    alt="latino mami"
                    className="w-full h-full"
                />
            </div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-0 md:px-[2%]">

            <div className="block md:hidden col-span-1 flex items-center overflow-x-auto scrollbar py-[1rem] px-[3%] gap-4">

                    <img src='/img/team fotos/Ivana trabajando (1).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Flor y Jasu (2).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Flor (3).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Ivana (4).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Luis jugando (5).png' alt=""  className='z-30 h-[200px]'/>

                    <img src='/img/team fotos/Jasu (6).png' alt=""  className='z-30 h-[200px]'/>

                    <img src='/img/team fotos/Tite (7).png' alt=""  className='z-30 h-[200px]'/>
            
                    <img src='/img/team fotos/Leyendo (8).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Luis cumple (10).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Eli (9).png' alt="" className='z-30 h-[200px]' />

                    <img src='/img/team fotos/Daily (11).png' alt="" className='z-30 h-[200px]' />
            </div>

            <div className="hidden md:grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team-fotos/Ivana-trabajando.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Flor-y-Jasu.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Flor.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Ivana.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

            </div>

            <div className="hidden md:grid col-span-1 grid-cols-2 grid-rows-2 gap-4">

                <img src='/img/team-fotos/Luis-jugando.png' alt=""  className='row-span-2 col-span-1 h-full relative z-30 mx-auto'/>

                <img src='/img/team-fotos/Jasu.png' alt=""  className='row-span-1 col-span-1 h-full relative z-30 mx-auto'/>

                <img src='/img/team-fotos/Tite.png' alt=""  className='row-span-1 col-span-1 h-full relative z-30 mx-auto'/>

            </div>

            <div className="hidden md:grid col-span-1 grid-cols-2 gap-4">

                <img src='/img/team-fotos/Leyendo.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Luis-cumple.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Eli.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

                <img src='/img/team-fotos/Daily.png' alt="" className='col-span-1 h-full relative z-30 mx-auto' />

            </div>

        </div>

        <BoxesSlider />

    </Fragment>
  )
}

export default TeamPictures