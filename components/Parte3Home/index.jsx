import { useState } from 'react';
import Title1Home from '../Title1Home';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import HomeButton from '../HomeButton';
import Scrollable from './Scrollable';
import Link from 'next/link';
import TranslatedParagraph from '../TranslatedParagraph';
const index = () => {
  const [actual, setActual] = useState(1);

  const data = [
    {
      id: 1,
      title: 'research',
      titleEng: 'research',
      options: [
        'UX Research',
        'Benchmarking',
        <span>
          MVP testing y <span className="underline">Más</span>
        </span>,
      ],
      optionsEng: [
        'UX Research',
        'Benchmarking',
        <span>
          MVP testing and <span className="underline">More</span>
        </span>,
      ],
      link: '/',
    },
    {
      id: 2,
      title: 'diseño',
      titleEng: 'design',
      options: [
        'UI - UX',
        'Estrategia de Marca',
        'Diseño de Producto',
        <span>
          Animación y <span className="underline">Más</span>
        </span>,
      ],
      optionsEng: [
        'UI - UX',
        'Brand Strategy',
        'Product Design',
        <span>
          Animation and <span className="underline">More</span>
        </span>,
      ],
      link: '/',
    },
    {
      id: 3,
      title: 'Desarrollo',
      titleEng: 'Develop',
      options: [
        'Desarrollo Web',
        'Desarrollo de Software',
        <span>
          IT Staffing y <span className="underline">Más</span>
        </span>,
      ],
      optionsEng: [
        'Web Development',
        'Software Development',
        <span>
          IT Staffing and<span className="underline">More</span>
        </span>,
      ],
      link: '/',
    },
    {
      id: 4,
      title: 'Bussiness Consulting',
      titleEng: 'Bussiness Consulting',
      options: [
        'Auditoria de Funnel Comercial',
        'Optimización de CJM',
        <span>
          Estrategias de escalabilidad y <span className="underline">Más</span>
        </span>,
      ],
      optionsEng: [
        'Commercial Funnel Auditory',
        'CJM Optimization',
        <span>
          Scalability strategies and <span className="underline">More</span>
        </span>,
      ],
      link: '/',
    },
  ];

  return (
    <HomeSectionContainer>
      <div className="w-full">
        <Title1Home
          title="ESTAMOS ACÁ PARA SER PARTE DE TU EQUIPO"
          titleENG={'WE ARE HERE TO BE PART OF YOUR TEAM'}
        />
        {/*gradient container*/}
        <div className="w-full flex border-white border border-b-0  border-solid purple_gradient  rounded-tr-md ">
          <img src="/img/lupita.svg" alt="lupa" className="ml-4" />
          <TranslatedParagraph
            textSpanish={
              'Hola! Somos Launchy, un equipo de especialistas en generar valor,investigando , desarrollando y'
            }
            textEnglish={
              'Hello! We are Launchy, a team specialized in generating revenue, researching, developing and'
            }
            classes="text-white text-[14px] md:text-lg roboto_normal   p-2"
          />
        </div>
        <div className="w-full flex border-white border border-t-0 border-solid mb-[40px]  rounded-br-md  ">
          <img src="/img/lupita_dark.svg" alt="lupa" className="ml-4" />
          <TranslatedParagraph
            textSpanish={
              '  transformando , empresas y proyectos con un giro 360 en :'
            }
            textEnglish={
              'transforming companies and proyect with a 360°  spin in :'
            }
            classes={'text-white text-[14px] md:text-lg roboto_normal  p-2'}
          />
        </div>
        {/*scrollable section*/}
        <div className="mb-[40px] flex flex-col md:flex-row">
          <div className="md:w-1/2">
            {data.map((d) => (
              <Scrollable
                key={d.id}
                id={d.id}
                title={d.title}
                titleEng={d.titleEng}
                options={d.options}
                optionsEng={d.optionsEng}
                onClick={() => setActual(d.id)}
                actual={actual}
              />
            ))}
            <a href="/services">
              <HomeButton
                link={'/services'}
                title={'Ir a Servicios'}
                titleEng={'Go to Services'}
              />
            </a>
          </div>
          <div className="md:w-1/2 h-full bg-white mt-[30px] md:mt-0">
            <Link href={'/services'}>
              <video
                src="/img/services.mp4"
                autoPlay
                loop
                playsInline={true}
                muted
                className="w-full h-full cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
