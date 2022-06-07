import { Fragment } from "react"
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import iconPic1 from '../../public/img/Group.png'
import iconPic2 from '../../public/img/carbon_growth.png'
import iconPic3 from '../../public/img/icon-park-outline_graphic-design.png'
import iconPic4 from '../../public/img/fluent_calendar-today-28-regular.png'

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
    one: 17,
    two: 30,
    three: 31,
    four: 28
  },
  width: {
    one: 26,
    two: 30,
    three: 31,
    four: 28
  },
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

const Infuy = () => {
  return (
      <Fragment>
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />
      </Fragment>
  )
}

export default Infuy