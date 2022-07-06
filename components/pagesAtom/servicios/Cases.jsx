import Card from '../../Parte4Home/Card'
import Wrapper from '../Wrapper';

const data = [
    {
      id: 1,
      path: '/img/casos/ITGALL2.mp4',
      desc: 'DESARROLLAMOS EL PUNTO DE ENCUENTRO VIRTUAL DE LOS LIVING LABS EN GALICIA',
      link: '/itgall',
      video: true,
    },
    {
      id: 2,
      path: '/img/casos/app_deportiva.png',
      desc: 'DISEÑAMOS LA EXPERIENCIA EN ESTADIOS DEPORTIVOS CON EL DISEÑO DE UNA APP',
      link: '/ligaMX',
      video: false,
    },
    {
      id: 3,
      path: '/img/casos/fichap.png',
      desc: 'REORGANIZAMOS EL SITE DE FICHAP PARA UNA MEJOR PERFORMANCE ',
      link: '/fichap',
      video: false,
    },
];

const Cases = () => {
    return (
        <Wrapper>
            <div className='px-[2%]'>
                <h2 className='text-white text-3xl mb-[30px] uppercase'>Algunos de nuestros casos</h2>

                <div className="flex flex-wrap justify-between">
                    {data.map((d, i) => (
                    <Card
                        key={i}
                        link={d.link}
                        path={d.path}
                        desc={d.desc}
                        video={d.video}
                    />
                    ))}
                </div>
            </div>
        </Wrapper>  
    )
}

export default Cases