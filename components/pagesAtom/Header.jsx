import HeaderSlider from "./HeaderSlider"

const Header = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full overflow-hidden relative'>
        <div className="bg-[url(/img/Fondo.png)] bg-cover w-full h-[416px] absolute z-0">
        </div>
        <div className="flex flex-col mt-12 mb-16 pt-14">
            {children}
        </div>
        <HeaderSlider />
    </div>
  )
}

export default Header