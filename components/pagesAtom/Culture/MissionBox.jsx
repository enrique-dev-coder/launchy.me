import Image from 'next/image';

const MissionBox = ({src, title, text}) => {
  return (
    <div className="flex flex-col flex-1 gap-2 text-white border border-white px-[5%] py-[5%] lg:py-[2%]">

            <div className="mr-auto">
                <Image
                  width={30}
                  height={30}
                  alt={'Icon created by Launchy'}
                  src={src}
                />
            </div>

            <h2 className='uppercase text-[18px] font-roboto'>{title}</h2>

            <p className='text-[14px] roboto_normal'>{text}</p>
    </div>
  )
}

export default MissionBox