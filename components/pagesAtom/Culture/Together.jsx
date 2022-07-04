import React from 'react'

const Together = () => {
  return (
    <div className="px-[8%]">
        <h2 className='my-[30px] md:my-[40px] border border-white p-2 pl-6 uppercase text-white'>juntos cada día</h2>

        <div className="flex flex-col gap-y-6 w-full mb-[60px] md:mb-[80px]">

            <div className="flex flex-col sm:flex-row justify-center gap-6">

                <img src='/img/team aliens/Luis (1).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]'/>

                <img src='/img/team aliens/Ivana (2).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]' />

                <img src='/img/team aliens/Eli (3).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]' />

            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
                
                <img src='/img/team aliens/Jasu y Flor (4).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]' />

                <img src='/img/team aliens/Flor (5).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]' />

                <img src='/img/team aliens/Tite (6).png' alt="" className='sm:w-1/3 lg:w-full max-h-[300px]' />
            
            </div>

        </div>

        <div className="flex flex-col sm:flex-row gap-3 lg:h-[250px] mb-[60px] md:mb-0">

            <img src="/img/team fotos/WhatsApp Image 2022-07-03 at 2.58 2.png" alt="" className='z-30 hidden lg:block'/>

            <div className="bg-[url(/img/Fondo.png)] mb-[30px] md:mb-[40px] bg-cover w-full p-[4%] relative z-30 h-full">
                <div className="flex gap-8 flex-col md:flex-row items-center">

                    <img src="/img/team fotos/WhatsApp Image 2022-07-03 at 2.58 2.png" alt="" className='z-30 block lg:hidden h-[150px] sm:h-[200px] md:h-[225px] rounded-full md:rounded-none'/>

                    <div className="">
                        <h2 className='font-bold text-[#211539] text-xl uppercase tracking-wide text-center md:text-left'>¿Por qué se fundó launchy?</h2><br />
                        <p className='text-[#211539] text-center md:text-left'>Existen 2 factores claves para tener una empresa de exito: <br /> 1&#41; Tener un buen equipo. <br /> 2&#41; Tener una buena idea. <br /><br /> Launchy es la unión de un grupo increible de profesionales con el plan de llevar la mayor cantidad de grandes ideas a otra galaxia </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Together