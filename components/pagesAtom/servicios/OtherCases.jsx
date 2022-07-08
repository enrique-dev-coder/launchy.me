import Card from './Card';
import Wrapper from '../Wrapper';

const data = [
    {
        id: 1,
        path: '/img/casos/infuy2.png',
        link: '/infuy',
    },
    {
        id: 2,
        path: '/img/casos/jaakFoto.png',
        link: '/jaak',
    },
    {
        id: 3,
        path: '/img/casos/ligaMX2.png',
        link: '/ligaMX',
    },
];

const OtherCases = () => {
    return (
        <Wrapper>
            <div className='px-[2%]'>

                <div className="flex flex-wrap justify-between">
                    {data.map((d, i) => (
                        <Card
                        key={i}
                        link={d.link}
                        path={d.path}
                    />
                    ))}
                </div>
            </div>
        </Wrapper>
    )
}

export default OtherCases