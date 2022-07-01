import React from 'react'

const Together = () => {
  return (
    <div className="px-[13%]">
        <h2 className='my-[30px] md:my-[40px] border border-white p-2 pl-6 uppercase text-white'>juntos cada día</h2>

        <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">

            <div className="row-span-1 col-span-1 h-[150px] relative z-30 bg-slate-500"></div>

            <div className="row-span-2 col-span-1 h-[300px] relative z-30 bg-slate-500"></div>

            <div className="row-span-2 col-span-1 h-[300px] relative z-30 bg-slate-500 self-end"></div>

            <div className="row-span-1 col-span-1 h-[150px] relative z-30 bg-slate-500"></div>

        </div>

        <div className="bg-[url(/img/Fondo.png)] my-[30px] md:my-[40px] bg-cover w-full p-[4%] relative z-30">
            <div className="flex gap-3 flex-col sm:flex-row">
                <div className="bg-slate-500 h-[50px] w-[80px]"></div>

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