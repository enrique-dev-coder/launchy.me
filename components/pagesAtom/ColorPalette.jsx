import FadeInElement from "./FadeInElement"

const ColorPalette = ({title = 'PALETA CROMÁTICA', text, children}) => {

  return (
      <FadeInElement>
          <div className="mb-[30px] md:mb-[40px] px-[8%]">
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>{title}</h2>
            <p>{text}</p>
          </div>
          <div className="flex flex-col w-full mb-[30px] md:mb-[40px]">
            {children}
          </div>
      </FadeInElement>
  )
}

export default ColorPalette