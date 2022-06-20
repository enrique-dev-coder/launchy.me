import { useState } from 'react';
import Title1Home from '../Title1Home';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import HomeButton from '../HomeButton';
import Scrollable from './Scrollable';

const index = () => {
  const [actual, setActual] = useState(1);

  const data = [
    {
      id: 1,
      title: 'research',
      options: ['UX Research', 'Benchmarking', 'MVP testing'],
      link: '/',
    },
    {
      id: 2,
      title: 'diseño',
      options: ['Estrategia de Marca', 'Animación'],
      link: '/',
    },
    {
      id: 3,
      title: 'Desarrollo',
      options: ['Desarrollo Web', 'Desarrollo de Software', 'IT Staffing'],
      link: '/',
    },
    {
      id: 4,
      title: 'Bussiness Consulting',
      options: [
        'Auditoria de Funnel Comercial',
        'Optimización de CJM',
        'Estrategias de escalabilidad',
      ],
      link: '/',
    },
  ];

  return (
    <HomeSectionContainer>
      <div className="w-full">
        <Title1Home title="ESTAMOS ACÁ PARA SER PARTE DE TU EQUIPO" />
        {/*gradient container*/}
        <div className="w-full flex border-white border border-b-0  border-solid purple_gradient  rounded-tr-md ">
          <img src="/img/lupita.svg" alt="lupa" className="ml-4" />
          <p className="text-white text-[14px] md:text-lg roboto_normal   p-2">
            Hola! Somos Launchy, un equipo de especialistas en generar valor,
            <span className=" underline"> investigando</span>,
            <span className="underline"> desarrollando</span> y
          </p>
        </div>
        <div className="w-full flex border-white border border-t-0 border-solid mb-[40px]  rounded-br-md  ">
          <img src="/img/lupita_dark.svg" alt="lupa" className="ml-4" />
          <p className="text-white text-[14px] md:text-lg roboto_normal  p-2">
            <span className=" underline"> transformando</span>, empresas y
            proyectos con un giro 360 en :
          </p>
        </div>
        {/*scrollable section*/}
        <div className="mb-[40px] flex flex-col md:flex-row">
          <div className="md:w-1/2">
            {data.map((d) => (
              <Scrollable
                key={d.id}
                id={d.id}
                title={d.title}
                options={d.options}
                onClick={() => setActual(d.id)}
                actual={actual}
              />
            ))}
          </div>
          <div className="md:w-1/2 h-full bg-white">
            <video
              src="/img/services.mp4"
              autoPlay
              loop
              playsInline={true}
              muted
              className="w-full h-full"
            />
          </div>
        </div>
        <HomeButton title={'Ir a Servicios'} />
      </div>
    </HomeSectionContainer>
  );
};

export default index;
