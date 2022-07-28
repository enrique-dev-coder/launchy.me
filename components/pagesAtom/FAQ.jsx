import { useReducer } from 'react';
import FAQsingle from './FAQsingle';
import TranslatedParagraph from '../TranslatedParagraph';
const types = {
  porque: 'porque',
  proyectos: 'proyectos',
  especialidad: 'especialidad',
  aliens: 'aliens',
  partners: 'partners',
  referidos: 'referidos',
};

const initialState = {
  porque: false,
  proyectos: false,
  especialidad: false,
  aliens: false,
  partners: false,
  referidos: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.porque:
      return {
        porque: state.porque ? false : true,
        proyectos: false,
        especialidad: false,
        aliens: false,
        partners: false,
        referidos: false,
      };

    case types.proyectos:
      return {
        proyectos: state.proyectos ? false : true,
        porque: false,
        especialidad: false,
        aliens: false,
        partners: false,
        referidos: false,
      };

    case types.especialidad:
      return {
        especialidad: state.especialidad ? false : true,
        porque: false,
        proyectos: false,
        aliens: false,
        partners: false,
        referidos: false,
      };

    case types.aliens:
      return {
        aliens: state.aliens ? false : true,
        porque: false,
        proyectos: false,
        especialidad: false,
        partners: false,
        referidos: false,
      };

    case types.partners:
      return {
        partners: state.partners ? false : true,
        porque: false,
        especialidad: false,
        aliens: false,
        proyectos: false,
        referidos: false,
      };

    case types.referidos:
      return {
        referidos: state.referidos ? false : true,
        porque: false,
        especialidad: false,
        aliens: false,
        proyectos: false,
        partners: false,
      };

    default:
      return state;
  }
};

const FAQ = () => {
  const [show, showDispatch] = useReducer(reducer, initialState);

  const { porque, proyectos, especialidad, aliens, partners, referidos } = show;

  return (
    <div className="flex flex-col  text-white gap-6 w-full max-w-[550px] ">
      <TranslatedParagraph
        textEnglish={'WE ARE USUALLY ASKED...'}
        textSpanish="        NOS SUELEN PREGUNTAR..."
        classes={'text-white font-medium uppercase text-[28px]   mb-[30px]'}
      />
      <FAQsingle
        text="¿Por qué elegir Launchy?"
        textEng={'Why Launchy?'}
        answer="Somos rápidos, seguros, adaptativos y disruptivos lo cual es el resultado de creer en la especialización de cada uno. Al formar un grupo multidisciplinarios conseguimos evitar sesgos y  perdidas de tiempo innecesarias."
        answerEng={
          'We are fast,efficient,adpatative and disruptive which is a result for believing in the specialized skills of every member. '
        }
        type={types.porque}
        show={porque}
        showDispatch={showDispatch}
      />

      <FAQsingle
        text="¿Trabajan por proyectos unicamente o también como parte del equipo? "
        textEng={'Do you work only by projects or also as part of the team? '}
        answer="Tomamos tanto proyectos a medidas como actividades que necesiten complementar en conjunto con un equipo interno. Indiferentemente de ambos escenarios somos conscientes que adaptarnos y colaborar con el equipo interno de cada empresa es de vital para el desarrollo de cada proyecto. "
        answerEng={
          'We take projects from start or we can also join to the core team of your company. In both cases we know that team work is something vital for every project development.'
        }
        type={types.proyectos}
        show={proyectos}
        showDispatch={showDispatch}
      />

      <FAQsingle
        text="¿Cuál es su especialidad?"
        textEng={'What’s your specialty?'}
        answer="Enfocamos nuestras multiples disciplinas al Customer Journey Map de cada empresa con una matriz Impacto/Esfuerzo. Encontrar mejoras y aplicarlas es nuestro main thing"
        answerEng={
          "We focus our multiple disciplines at the companie's customer Journey Map with an impact/performance matrix.To find imrpovements and made them is our priority"
        }
        type={types.especialidad}
        show={especialidad}
        showDispatch={showDispatch}
      />

      <FAQsingle
        text="¿Son aliens realmente?"
        textEng={'Are you really aliens?'}
        answer="Depende desde que planeta nos hables. Just kidding, es info clasificada, pero si trabajas con nosotros capaz lo descubras"
        answerEng={'Work with us to find it out...'}
        type={types.aliens}
        show={aliens}
        showDispatch={showDispatch}
      />

      <FAQsingle
        text="¿Tienen un canal de Partners?"
        textEng={'Do you have a partner program?'}
        answer="Siii, al estar en el mundo del emprendimiento conoces muchas necesidades y gente excelente para resolverla, si vos crees que eres de ese grupo contáctanos y hablemos "
        answerEng={
          'Yeees, being in the entrepreneurship world gives us the skill to know peoples need and solve them! '
        }
        type={types.partners}
        show={partners}
        showDispatch={showDispatch}
      />

      <FAQsingle
        text="¿Tienen programa de referidos?"
        textEng={'Do you have a referral program?'}
        answer="Efectivamente, cada proyecto referido da al referenciador un 15% de su valor."
        answerEng={
          'Surely, every referred project gives the originator a 15% value'
        }
        type={types.referidos}
        show={referidos}
        showDispatch={showDispatch}
      />
    </div>
  );
};

export default FAQ;
