import { Fragment } from "react"
import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
import JaakHome from '../../public/img/jaak/jaak home.png'
import JaakStatistics1 from '../../public/img/jaak/JaakStatistics1.png'
import JaakStatistics2 from '../../public/img/jaak/JaakStatistics2.png'

const objetivoTexto = "Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo."

const desafioTexto = {
  one: 'Crear un espacio virtual de concentracion para los living labs de Galicia - España.',
  two: 'Transmitir',
  three: 'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día.'
} 

const imgData = {
  imgURL: {
    one: iconPic1,
    two: iconPic1,
    three: iconPic1,
    four: iconPic1,
  },
  height: {
    one: 32,
    two: 32,
    three: 32,
    four: 32
  },
  width: {
    one: 32,
    two: 32,
    three: 32,
    four: 32
  },
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

const Jaak = () => {
  return (
      <Fragment>
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/* Paleta crómatica */}
          <ColorPalette>
            <div className="grid grid-cols-2 md:flex w-full">
              <div className='bg-[#4239A7] col-span-1 md:w-1/6 h-16'></div>
              <div className='bg-[#212A45] col-span-1 md:w-1/6 h-16'></div>
              <div className='bg-[#3BBBC9] col-span-1 md:w-1/6 h-16'></div>
              <div className="bg-[#5C5BA5] col-span-1 md:w-1/6 h-16"></div>
              <div className="bg-[#655DC6] col-span-1 md:w-1/6 h-16"></div>
              <div className="bg-[#00829B] col-span-1 md:w-1/6 h-16"></div>
            </div>
          </ColorPalette>

          {/* Solution */}
          <div className="px-[8%] mt-[60px] md:mt-[80px]">
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>SOLUCIÓN</h2>
            <p className='mb-[30px] md:mb-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iusto quia fuga quos libero dolor eaque explicabo sed quasi sint, velit, reiciendis delectus? Reiciendis nemo deserunt enim corporis, cum voluptatem doloremque maiores? Inventore, quaerat dolore. Possimus magnam, adipisci accusamus laborum debitis id aut fugiat non deleniti veritatis eveniet, hic expedita temporibus nemo aspernatur consectetur reprehenderit esse, consequuntur asperiores. Quas temporibus libero, maiores sapiente esse asperiores.</p>
          </div>

          <div className="flex md:justify-center mb-[30px] md:mb-[40px] bg-[#606B9D] py-6">
            <Image 
              src={JaakHome} 
              width={822} height={510} 
              alt={'Mockup de Jaak creado por Launchy'}
              className='w-full'
            />
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-[30px] md:mb-[40px] bg-slate-200 gap-8 px-[8%]">

            <div className="w-[555px] h-[267px]">
              <Image 
                src={JaakStatistics1} 
                width={555} height={267} 
                alt={'Mockup de Jaak creado por Launchy'}
              />
            </div>

            <div className="w-[555px] h-[267px]">
              <Image 
                src={JaakStatistics2} 
                width={555} height={267} 
                alt={'Mockup de Jaak creado por Launchy'}
              />
            </div>

          </div>

          <Testimonial />
      </Fragment>
  )
}

export default Jaak