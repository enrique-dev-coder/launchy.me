import FadeInElement from "./FadeInElement"

const Testimonial = ({text, title = 'EL APRENDIZAJE'}) => {
  return (
    <FadeInElement>
      <div className="pb-[60px] md:pb-[80px] px-[8%]">
        <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>{title}</h2>
        <p className=''>{text}</p>
         {/* mb-[30px] md:mb-[40px] */}
         {/* <video src="" className='shadow-2xl h-[150px] md:h-[250px] w-full lg:w-1/2 bg-slate-500 mx-auto'></video> */}
    </div>
    </FadeInElement>
    
  )
}

export default Testimonial