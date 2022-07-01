import Card from '../../Parte4Home/Card'

const data = [
    {
        id: 1,
        path: '/img/casos/infuy2.png',
        link: '/infuy',
        video: false,
      },
      {
        id: 2,
        path: '/img/casos/jaakFoto.png',
        link: '/jaak',
        video: false,
      },
      {
        id: 3,
        path: '/img/casos/ligaMX2.png',
        link: '/ligaMX',
        video: false,
      },
];

const OtherCases = () => {
    return (
        <div className='px-[8%]'>

            <div className="flex flex-wrap justify-between">
                {data.map((d, i) => (
                    <Card
                        key={i}
                        link={d.link}
                        path={d.path}
                        video={d.video}
                    />
                ))}
            </div>
        </div>
    )
}

export default OtherCases