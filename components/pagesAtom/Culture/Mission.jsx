import MissionBox from "./MissionBox"
import MisionIcon from '../../../public/img/icons/Mision.svg'
import OjitoIcon from '../../../public/img/icons/Ojo.svg'

const Mission = () => {
  return (
    <div className="px-[8%] mt-[60px] md:mt-[80px] flex flex-col">

        <div className="flex flex-col md:flex-row">
            <MissionBox
                src={MisionIcon}
                title='Misión'
                text='Impulsar empresas desarrollando un know how que permita crecimiento en las empresas de manera digital, sostenible y escalable.'
            />
            <MissionBox
                src={OjitoIcon}
                title='Visión'
                text='Ser la empresa líder en Latinoamérica en impulsar sistemas de aceleración digital basadas en la digitalización de procesos como motor de las empresas a través de nuestros pilares base.'
            />
        </div>
        
    </div>
  )
}

export default Mission