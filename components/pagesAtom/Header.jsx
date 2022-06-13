import React from 'react'

const Header = ({children}) => {
  return (
    <div className='flex justify-center w-full bg-[#4239A7]'>
        <div className="flex flex-col mt-12 mb-16">
            {children}
        </div>
    </div>
  )
}

export default Header