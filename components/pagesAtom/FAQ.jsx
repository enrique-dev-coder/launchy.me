import {useReducer} from "react"
import FAQsingle from "./FAQsingle"

const types = {
  porque: 'porque',
  proyectos: 'proyectos',
  especialidad:'especialidad',
  aliens: 'aliens',
  partners: 'partners',
  referidos: 'referidos'
}

const initialState = {
  porque: false,
  proyectos: false,
  especialidad: false,
  aliens: false,
  partners: false,
  referidos: false,
}

const reducer = (state, action) => {
  switch (action.type) {

    case types.porque:
      return {porque: state.porque? false : true, proyectos: false, especialidad: false,aliens: false,partners: false, referidos: false}

    case types.proyectos:
      return {proyectos: state.proyectos? false : true, porque: false, especialidad: false, aliens: false, partners: false, referidos: false}

    case types.especialidad:
      return {especialidad: state.especialidad? false : true, porque: false, proyectos: false, aliens: false, partners: false, referidos: false}
  
    case types.aliens:
      return {aliens: state.aliens? false : true, porque: false, proyectos: false, especialidad: false, partners: false, referidos: false}
     
    case types.partners:
      return {partners: state.partners? false : true, porque: false, especialidad: false, aliens: false, proyectos: false, referidos: false}  

    case types.referidos:
      return {referidos: state.referidos? false : true, porque: false, especialidad: false, aliens: false, proyectos: false, partners: false}  

    default:
      return state;
  }
}

const FAQ = () => {

  const [show, showDispatch] = useReducer(reducer, initialState)

  const {porque, proyectos, especialidad, aliens, partners, referidos} = show
  
  return (
    <div className='flex flex-col bg-black text-white gap-6 p-[8%]'>
      <h2 className="">NOS SUELEN PREGUNTAR...</h2>

      <FAQsingle 
        text='¿Por qué elegir Launchy?'
        answer='Somos rápidos, seguros, adaptativos y disruptivos lo cual es el resultado de creer en la especialización de cada uno. Al formar un grupo multidisciplinarios conseguimos evitar sesgos y  perdidas de tiempo innecesarias.'
        type={types.porque}
        show={porque}
        showDispatch={showDispatch}
      />

        <FAQsingle 
          text='¿Trabajan por proyectos unicamente o también como parte del equipo? '
          answer='Tomamos tanto proyectos a medidas como actividades que necesiten complementar en conjunto con un equipo interno. Indiferentemente de ambos escenarios somos conscientes que adaptarnos y colaborar con el equipo interno de cada empresa es de vital para el desarrollo de cada proyecto. '
          type={types.proyectos}
          show={proyectos}
          showDispatch={showDispatch}
        />

        <FAQsingle 
          text='¿Cuál es su especialidad?'
          answer='Enfocamos nuestras multiples disciplinas al Customer Journey Map de cada empresa con una matriz Impacto/Esfuerzo. Encontrar mejoras y aplicarlas es nuestro main thing'
          type={types.especialidad}
          show={especialidad}
          showDispatch={showDispatch}
        />

        <FAQsingle 
          text='¿Son aliens realmente?'
          answer='Depende desde que planeta nos hables. Just kidding, es info clasificada, pero si trabajas con nosotros capaz lo descubras'
          type={types.aliens}
          show={aliens}
          showDispatch={showDispatch}
        />

        <FAQsingle 
          text='¿Tienen un canal de Partners?'
          answer='Siii, al estar en el mundo del emprendimiento conoces muchas necesidades y gente excelente para resolverla, si vos crees que eres de ese grupo contáctanos y hablemos '
          type={types.partners}
          show={partners}
          showDispatch={showDispatch}
        />

        <FAQsingle 
          text='¿Tienen programa de referidos?'
          answer='Efectivamente, cada proyecto referido da al referenciador un 15% de su valor.'
          type={types.referidos}
          show={referidos}
          showDispatch={showDispatch}
        />
    </div>
  )
}

export default FAQ