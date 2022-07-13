import MissionBox from "./MissionBox"

const Mission = () => {
  return (
    <div className="mt-[60px] md:mt-[80px] flex flex-col">

        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
            <MissionBox
                src="/img/icons/Mision.svg"
                title='Misión'
                text='Impulsar empresas desarrollando un know how que permita crecimiento en las empresas de manera digital, sostenible y escalable.'
            />
            <MissionBox
                src="/img/icons/Ojo.svg"
                title='Visión'
                text='Ser la empresa líder en Latinoamérica en impulsar sistemas de aceleración digital basadas en la digitalización de procesos como motor de las empresas a través de nuestros pilares base.'
            />
        </div>
        
    </div>
  )
}

export default Mission