import React from 'react'

const Together = () => {
  return (
    <div className="">
        <h2 className='my-[30px] md:my-[40px] border border-white pl-6 uppercase text-white tracking-widest text-[18px] lg:text-[22px] font-roboto h-[40px] flex items-center'>juntos cada día</h2>

        <div className="flex flex-col gap-4 my-[30px] md:my-[40px]">

            <div className="flex justify-between overflow-x-auto scrollbar gap-4">
                <img src='/img/team-aliens/Luis.png' alt="" className='relative z-30'/>
                <img src='/img/team-aliens/Ivana.png' alt="" className='relative z-30' />
                <img src='/img/team-aliens/Eli.png' alt="" className='relative z-30' />
            </div>

            <div className="flex justify-between overflow-x-auto scrollbar gap-4">
                <img src='/img/team-aliens/Jasu-y-Flor.png' alt="" className='relative z-30' />
                <img src='/img/team-aliens/Flor.png' alt="" className='relative z-30' />
                <img src='/img/team-aliens/Tite.png' alt="" className='relative z-30' />
            </div>
        
        </div>

        <div className="flex flex-col mx-auto sm:flex-row gap-3 lg:h-[250px] mb-[60px] md:mb-0 relative">

            <img src="/img/team-fotos/Jasu-y-luis.png" alt="" className='z-30 hidden lg:block'/>

            <div className="bg-[url(/img/Fondo.png)] mb-[30px] md:mb-[40px] bg-cover w-full p-[4%] relative z-0 h-full">
                <div className="team-background w-full h-full absolute z-10 top-0 left-0 bottom-0"></div>
                <div className="flex gap-8 flex-col md:flex-row items-center">

                    <img src="/img/team-fotos/Jasu-y-luis.png" alt="" className='z-30 block lg:hidden h-[150px] sm:h-[200px] md:h-[225px]'/>

                    <div className="relative z-20">
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