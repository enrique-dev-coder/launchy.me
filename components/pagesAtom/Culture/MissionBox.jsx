import Image from 'next/image';

const MissionBox = ({src, title, text}) => {
  return (
    <div className="flex flex-col flex-1 gap-2 text-white border border-white p-[5%] md:p-[2%]">

            <div className="mr-auto">
                <Image
                  width={30}
                  height={30}
                  alt={'Icon created by Launchy'}
                  src={src}
                />
            </div>

            <h2 className='uppercase'>{title}</h2>

            <p>{text}</p>
    </div>
  )
}

export default MissionBox