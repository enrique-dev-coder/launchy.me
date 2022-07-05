import Image from 'next/image';

const MissionBox = ({src, title, text}) => {
  return (
    <div className="flex flex-col flex-1 gap-2 text-white border border-white p-[5%]">

            <div className="mr-auto">
                <Image
                  width={30}
                  height={30}
                  alt={'Icon created by Launchy'}
                  src={src}
                />
            </div>

            <h2 className='uppercase text-[18px]'>{title}</h2>

            <p className='text-[14px]'>{text}</p>
    </div>
  )
}

export default MissionBox