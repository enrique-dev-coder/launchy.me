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

        <div className="bg-[url(/img/Fondo.png)] mb-[30px] md:mb-[40px] bg-cover w-full p-[4%] relative z-30">
            <div className="flex gap-3 flex-col sm:flex-row">
                <div className="bg-slate-500 h-[50px] w-[100px] mr-10"></div>

                <div className="">
                    <h2>¿Por qué se fundó launchy?</h2>
                    <p>Existen 2 factores claves para tener una empresa de exito: <br /> 1&#41; Tener un buen equipo. <br /> 2&#41; Tener una buena idea. <br /><br /> Launchy es la unión de un grupo increible de profesionales con el plan de llevar la mayor cantidad de grandes ideas a otra galaxia </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Together