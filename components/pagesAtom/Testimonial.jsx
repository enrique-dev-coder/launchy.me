import FadeInElement from "./FadeInElement"
import Wrapper from "./Wrapper"

const Testimonial = ({text, title = 'EL APRENDIZAJE'}) => {
  return (
    <FadeInElement>
      <Wrapper>
      <div className="pb-[60px] md:pb-[80px]">
          <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>{title}</h2>
          <p className=''>{text}</p>
          {/* mb-[30px] md:mb-[40px] */}
          {/* <video src="" className='shadow-2xl h-[150px] md:h-[250px] w-full lg:w-1/2 bg-slate-500 mx-auto'></video> */}
        </div>
      </Wrapper>
    </FadeInElement>
    
  )
}

export default Testimonial