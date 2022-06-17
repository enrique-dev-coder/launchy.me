const FAQsingle = ({text, answer, type, show, showDispatch}) => {
  return (
    <div className="flex border w-full py-[.5%] relative items-center mb-[4rem]" onClick={() => {
        showDispatch({
            type
        })
      }}>
      <div className="ml-[2%] transition-all">
        {text}
      </div>

      <div className={`flex border w-full p-[1%] absolute top-[100%] pointer-events-none ${show? 'block' : 'hidden'} bg-black`}>
        {answer}
      </div>

      <div className={`ml-auto w-[.7rem] h-[.7rem] inline-block border-white border-solid border-t-[2px] border-r-[2px] transition-all transform ${show? 'rotate-[320deg] mt-[.3%]' : 'rotate-[136deg] mb-[.3%]'} mr-[5%]`}></div>
    </div>
  )
}

export default FAQsingle