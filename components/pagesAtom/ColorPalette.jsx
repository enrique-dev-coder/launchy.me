import FadeInElement from "./FadeInElement"
import Wrapper from "./Wrapper"

const ColorPalette = ({title = 'PALETA CROMÁTICA', text, children}) => {

  return (
      <FadeInElement>
        <Wrapper>
          <div className="mb-[30px] md:mb-[40px]">
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 rounded-tr-[.2rem] font-roboto text-[16px] lg:text-[22px]'>{title}</h2>
            <p className="roboto_normal text-[14px]">{text}</p>
          </div>
        </Wrapper>
        <div className="flex flex-col w-full mb-[30px] md:mb-[40px]">
          {children}
        </div>  
      </FadeInElement>
  )
}

export default ColorPalette