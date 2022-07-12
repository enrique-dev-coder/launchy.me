import FadeInElement from "./FadeInElement"
import Wrapper from "./Wrapper"
import Link from 'next/link';

const Testimonial = ({text, title = 'EL APRENDIZAJE'}) => {
  return (
    <FadeInElement>
      <Wrapper>
      <div className="pb-[60px] md:pb-[80px]">
          <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 rounded-tr-[.2rem] font-roboto text-[16px] lg:text-[22px]'>{title}</h2>
          <p className='roboto_normal text-[14px]'>{text}</p>
          {/* mb-[30px] md:mb-[40px] */}
          {/* <video src="" className='shadow-2xl h-[150px] md:h-[250px] w-full lg:w-1/2 bg-slate-500 mx-auto'></video> */}
          <Link href="/contact">
              <button className="py-2 px-3 uppercase text-sm navbar_button mt-8 w-[134px] h-[38px]">
                Charlemos
              </button>
          </Link>
        </div>
      </Wrapper>
    </FadeInElement>
    
  )
}

export default Testimonial