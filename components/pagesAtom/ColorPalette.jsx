import { Fragment } from "react"

const ColorPalette = ({children}) => {

  return (
      <Fragment>
          <div className="mb-[30px] md:mb-[40px] px-[8%]">
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>PALETA CROMÁTICA</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, voluptatum voluptates eum laboriosam facere officiis possimus dolores nulla, aut quas, laudantium dolorem provident. Doloribus possimus delectus aut aliquid voluptas cum nulla facere qui, rerum sunt officia voluptates nobis maxime provident dolores laboriosam neque quis distinctio consequuntur voluptatibus ad? A, eum.</p>
          </div>
          <div className="flex flex-col w-full mb-[30px] md:mb-[40px]">
            {children}
          </div>
      </Fragment>
  )
}

export default ColorPalette