import React from 'react';

const texts = [
  { id: 1, text: 'Me hace mejor cada dia, siento que aprendo mucho con todo el equipo. Los quiero mucho.' },
  { id: 2, text: 'Donde aprendo dia a día con un equipo super talentoso y donde siempre le vemos el lado positivo a todo.' },
  { id: 3, text: 'Equipo muy dinámico y muy preparado para sus funciones, aparte que se genera muy buen ambiente de trabajo' },
  { id: 4, text: 'Launchy representa la unión de personas super talentosas en áreas de la economía digital con el fin  de llevar a las empresas al siguiente nivel' },
  { id: 5, text: 'Launchy es un espacio para trabajar muy amigable y confortable' },
  { id: 6, text: 'Me siento feliz siendo parte de Launchy, siento que aprendí mucho desde el primer día hasta hoy.' },
  { id: 7, text: 'Estoy empezando con el equipo y se me hacen super amigables y con un gran clima.' },
];

const BoxesSlider = () => {
  return (
    <div className='w-full flex items-center overflow-x-auto scrollbar py-[1rem] border border-white mt-[60px] md:mt-[80px]'>
      {
        texts.map(text => <div key={text.id} className='mx-[1rem] text-white border border-white shrink-0 h-[130px] w-[250px] xl:w-[290px] xl:h-[150px] p-[2%] flex items-center'>{text.text}</div>)
      }
    </div>
  )
}

export default BoxesSlider