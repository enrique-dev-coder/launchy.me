import React from 'react'

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iusto quia fuga quos libero dolor eaque explicabo sed quasi sint, velit, reiciendis delectus? Reiciendis nemo deserunt enim corporis, cum voluptatem doloremque maiores? Inventore, quaerat dolore. Possimus magnam, adipisci accusamus laborum debitis id aut fugiat non deleniti veritatis eveniet, hic expedita temporibus nemo aspernatur consectetur reprehenderit esse, consequuntur asperiores. Quas temporibus libero, maiores sapiente esse asperiores.'

const ProcessOrSolution = ({title, text = null, children}) => {
  return (
    <div className="px-[8%]">
        <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>{title}</h2>
        <p className='mb-[30px] md:mb-[40px]'>{text? text : defaultText}</p>
        {children}
    </div>
  )
}

export default ProcessOrSolution