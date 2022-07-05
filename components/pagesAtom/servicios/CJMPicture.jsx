import React from 'react'

const CJMPicture = () => {
  return (
    <div className='mb-[40px] md:mb-[60px] px-[8%]'>
        <div className="bg-[url(/img/Fondo.png)] bg-cover flex flex-col p-[4%] gap-4 max-w-full">
                <img src="/img/atomos.png" alt="" className="w-[150px] h-[150px] sm:w-[290px] sm:h-[290px] mx-auto" />

                <div className="mt-[1rem]">
                    <p className="text-center text-[#211539]">Es por eso que desde Launchy identificamos cada aspecto de tu CJM (Customer Journey Map). Involucrando desde tu propuesta de valor, buyer persona, competencias, partners, marketing inbound area, marketing outbound area, area comercial y el area mas Underrated “Customer success area”. Con el fin de encontrar esos accionables, tácticas o estrategias que puedan dar un giro 180° a tus indicadores de Revenue &amp; Profit.</p> <br /> 
                    <h2 className="font-bold text-2xl text-center text-[#211539]">Nuestras consultorias principales son:</h2><br />
                    <ul className="flex flex-col sm:items-center">
                        <li className="text-[#211539]">- Auditoria Customer Journey Map</li><br />
                        <li className="text-[#211539]">- Optimization B2B Outbound marketing Funnels</li><br />
                        <li className="text-[#211539]">- Optimization B2B Inbound Marketing Funnels</li><br />
                        <li className="text-[#211539]">- Optimization B2B Sales Funnels</li><br />
                        <li className="text-[#211539]">- Optimization B2B Partners Funnels</li><br />
                        <li className="text-[#211539]">- Optimization B2B Customer Success Funnel</li><br />
                        <li className="text-[#211539]">- Optimization Semantic y Technical SEO</li><br />
                        <li className="text-[#211539]">- Website Optimization Conversion Rate</li><br />
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default CJMPicture