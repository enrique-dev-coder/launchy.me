import React from 'react'

const Together = () => {
  return (
    <div className="">
        <h2 className='my-[30px] md:my-[40px] border border-white p-2 pl-6 uppercase text-white'>juntos cada día</h2>

        <div className="flex flex-col gap-4 my-[30px] md:my-[40px]">

            <div className="flex overflow-x-auto scrollbar sm:overflow-hidden flex-row items-center gap-4">

                <img src='/img/team-aliens/Luis.png' alt="" className='col-span-1 z-30 mx-auto w-[173px] sm:w-[200px] lg:w-auto h-[200px] lg:h-[355px] lg:mx-0'/>

                <img src='/img/team-aliens/Ivana.png' alt="" className='col-span-1 z-30 mx-auto w-[173px] sm:w-[200px] lg:w-auto lg:w-auto h-[200px] lg:h-[355px] lg:mx-0' />

                <img src='/img/team-aliens/Eli.png' alt="" className='col-span-1 z-30 mx-auto w-[173px] sm:w-[200px] lg:w-auto sm:h-[200px] lg:h-[355px] h-[200px] lg:h-[355px] md:ml-auto lg:ml-0 lg:mx-0' />

            </div>

            <div className="flex overflow-x-auto scrollbar sm:overflow-hidden flex-row items-center gap-4">

                <img src='/img/team-aliens/Jasu-y-Flor.png' alt="" className='col-span-1 z-30 mx-auto w-[173px] sm:w-[200px] lg:w-auto h-[200px] lg:h-[276px] lg:mx-0 lg:w-auto' />

                <img src='/img/team-aliens/Flor.png' alt="" className='col-span-1 z-30 mx-auto w-[173px] h-[200px] lg:h-[276px] lg:mx-0' />

                <img src='/img/team-aliens/Tite.png' alt="" className='col-span-1 z-30 mx-auto w-[250px] sm:w-[200px] md:w-[269px] lg:w-auto h-[200px] lg:h-[276px] lg:mx-0' />

            </div>
        
        </div>

        <div className="flex flex-col mx-auto sm:flex-row gap-3 lg:h-[250px] mb-[60px] md:mb-0">

            <img src="/img/team-fotos/Jasu-y-luis.png" alt="" className='z-30 hidden lg:block'/>

            <div className="bg-[url(/img/Fondo.png)] mb-[30px] md:mb-[40px] bg-cover w-full p-[4%] relative z-30 h-full">
                <div className="flex gap-8 flex-col md:flex-row items-center">

                    <img src="/img/team-fotos/Jasu-y-luis.png" alt="" className='z-30 block lg:hidden h-[150px] sm:h-[200px] md:h-[225px]'/>

                    <div className="">
                        <h2 className='font-bold text-[#211539] text-xl uppercase tracking-wide text-center md:text-left font-roboto'>¿Por qué se fundó launchy?</h2><br />
                        <p className='text-[#211539] text-left'>Existen 2 factores claves para tener una empresa de exito: <br /> 1&#41; Tener un buen equipo. <br /> 2&#41; Tener una buena idea. <br /><br /> Launchy es la unión de un grupo increible de profesionales con el plan de llevar la mayor cantidad de grandes ideas a otra galaxia </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Together