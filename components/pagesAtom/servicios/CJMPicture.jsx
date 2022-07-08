import React from 'react'
import Wrapper from '../Wrapper'

const CJMPicture = () => {
  return (
    <Wrapper>
      <div className='mb-[40px] md:mb-[60px] relative '>
          <div className="bg-[url(/img/Fondo.png)] bg-cover flex flex-col lg:flex-row lg:items-center p-[18px] gap-4 max-w-full">
                  <img src="/img/atomos.png" alt="" className="w-[150px] h-[150px] sm:w-[290px] sm:h-[290px] lg:mr-[1rem] mx-auto relative z-20" />

                  <div className="">
                      <p className="text-center text-[#211539] lg:text-left relative z-20 text-[12px] font-medium">Es por eso que desde Launchy identificamos cada aspecto de tu CJM (Customer Journey Map). Involucrando desde tu propuesta de valor, buyer persona, competencias, partners, marketing inbound area, marketing outbound area, area comercial y el area mas Underrated “Customer success area”. Con el fin de encontrar esos accionables, tácticas o estrategias que puedan dar un giro 180° a tus indicadores de Revenue &amp; Profit.</p> <br /> 
                      <h2 className="font-bold text-2xl text-center lg:text-left text-[#211539] relative z-20 lg:text-[18px]">Nuestras consultorias principales son:</h2><br />
                      <ul className="flex flex-col sm:items-center lg:items-start relative z-20">
                          <li className="text-[#211539] text-[12px] font-medium">- Auditoria Customer Journey Map</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization B2B Outbound marketing Funnels</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization B2B Inbound Marketing Funnels</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization B2B Sales Funnels</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization B2B Partners Funnels</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization B2B Customer Success Funnel</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Optimization Semantic y Technical SEO</li>
                          <li className="text-[#211539] text-[12px] font-medium">- Website Optimization Conversion Rate</li>
                      </ul>
                  </div>
          </div>
          <div className="team-background w-full h-full absolute z-10 top-0 left-0 bottom-0"></div>
      </div>
    </Wrapper>
  )
}

export default CJMPicture