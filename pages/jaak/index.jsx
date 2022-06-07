import { Fragment } from "react"
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
// import iconPic2 from '../../public/img/carbon_growth.png'
// import iconPic3 from '../../public/img/icon-park-outline_graphic-design.png'
// import iconPic4 from '../../public/img/fluent_calendar-today-28-regular.png'

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
      </Fragment>
  )
}

export default Jaak