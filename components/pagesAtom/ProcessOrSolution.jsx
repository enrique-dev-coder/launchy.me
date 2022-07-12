import FadeInElement from '../../components/pagesAtom/FadeInElement'
import Wrapper from './Wrapper'

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iusto quia fuga quos libero dolor eaque explicabo sed quasi sint, velit, reiciendis delectus? Reiciendis nemo deserunt enim corporis, cum voluptatem doloremque maiores? Inventore, quaerat dolore. Possimus magnam, adipisci accusamus laborum debitis id aut fugiat non deleniti veritatis eveniet, hic expedita temporibus nemo aspernatur consectetur reprehenderit esse, consequuntur asperiores. Quas temporibus libero, maiores sapiente esse asperiores.'

const ProcessOrSolution = ({title, text = null, children, paragraph = true}) => {
  return (
    <FadeInElement>
      <Wrapper>
        <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 rounded-tr-[.2rem] font-roboto text-[16px] lg:text-[22px]'>{title}</h2>
        {
          paragraph && <p className='mb-[30px] md:mb-[40px] roboto_normal text-[14px]'> {text ? text : defaultText} </p>
        }
        {children}
      </Wrapper>
    </FadeInElement>
    
  )
}

export default ProcessOrSolution