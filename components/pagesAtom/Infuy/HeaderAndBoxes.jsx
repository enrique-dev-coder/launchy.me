import {Fragment} from 'react'
import Image from 'next/image';
import InfoTarget from "../InfoTarget"
import Header from '../Header'
import InfuyLogo from '../../../public/img/infuy/Logo Infuy.png'
import iconPic1 from '../../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../../public/img/icons/carbon_growth.svg'
import iconPic3 from '../../../public/img/icons/icon-park-outline_graphic-design.svg'
import iconPic4 from '../../../public/img/icons/fluent_calendar-today-28-regular.svg'

// InfoTarget props
const objetivoTexto = "Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo."

const desafioTexto = {
  one: 'Crear una identidad grafica sólida y consistente  que muestre a INFUY como lider y pionera en desarrollo blockchain.',
  two: 'Generar presentaciones para el área de  GROWTH hablandole gráficamente a dos mercados distintos: empresas sólidas y startups.',
  three: 'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día.'
} 

const imgData = {
  imgURL: {
    one: iconPic1,
    two: iconPic2,
    three: iconPic3,
    four: iconPic4,
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
  color: 'from-indigo-400 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

//Header items
const items = [
    'diseño de manual de marca',
    'banners',
    'feed',
    'presentaciones',
    'aplicaciones de marca',
    'infografías',
    'editables',
]

const HeaderAndBoxes = () => {
  return (
    <Fragment>
            <Header quantity={6} items={items}>
                <Image 
                    src={InfuyLogo} 
                    width={220} height={111} 
                    alt={'Mockup de Infuy creado por Launchy'}
                />
            </Header>
            <InfoTarget 
                objetivoTexto={objetivoTexto}
                desafioTexto={desafioTexto}
                imgData={imgData}
            />
    </Fragment>
  )
}

export default HeaderAndBoxes