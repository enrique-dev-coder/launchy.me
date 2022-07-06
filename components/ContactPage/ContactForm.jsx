import React, { useState } from 'react';
import HomeSectionContainer from '../../components/Wrappers/HomeSectionContainer';
import SubscribeModal from '../subscribeModal';
const InputContactForm = ({
  title,
  type,
  placeholder,
  name,
  onChangeFunction,
}) => {
  return (
    <div className="flex flex-col w-full md:w-[45%] mb-[20px]">
      <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
        {title}
      </label>
      <input
        type={type}
        className=" focus:outline-none bg-transparent border border-white   rounded text-white/70 roboto_normal p-2"
        placeholder={placeholder}
        required
        name={name}
        onChange={onChangeFunction}
        autoComplete="off"
      />
    </div>
  );
};

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    mail: '',
    select1: '',
    select2: '',
    message: '',
  });
  const { name, mail, select1, select2, message } = formValues;
  const [formConfirmation, setFormConfirm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21108231/c217499f-c774-47a5-ae7c-b16a8201b566';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'firstname',
          value: name,
        },
        {
          name: 'email',
          value: mail,
        },
        {
          name: 'necesidades',
          value: select1,
        },
        {
          name: 'solcuiones2',
          value: select2,
        },
        {
          name: 'message',
          value: message,
        },
      ],
      context: {
        pageUri: 'http://localhost:3000/',
        pageName: 'Launchy',
      },
    };
    //pasamos el dato a JSON para enviar
    let final_data = JSON.stringify(data);
    //metodo de postear  a la url de hubspot
    xhr.open('POST', url);
    //mandar peticion de typo application/json
    xhr.setRequestHeader('Content-Type', 'application/json');
    //funcion que sirce para verificar que se haya mandado el form
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
        setFormConfirm(true);
      } else if (xhr.readyState === 4 && xhr.status === 403) {
        console.log(xhr.responseText);
      }
    };
    //mandar a emailjs
    //el emailjs recibe los datos de la ref del form con los parametros de el servide id y el form id
    //los datos del correo vienen del atributo de name

    //mandar la request final a la api de hubspot
    xhr.send(final_data);
    //dejar vacio el estado que mandael form
    setFormValues({
      name: '',
      mail: '',
      select1: '',
      select2: '',
      message: '',
    });
  };

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <HomeSectionContainer>
      <div className=" w-full max-w-[550px] relative">
        <img
          src="/img/Nave.png"
          alt="nave contacto"
          className="fixed right-0 z-30 hidden lg:block animate-pulse "
        />
        {formConfirmation && (
          <SubscribeModal
            background={
              'linear-gradient(180deg, rgba(176, 152, 240, 0.59) 100%, rgba(134, 20, 130, 0.2) 100%)'
            }
            closeModal={() => setFormConfirm(false)}
          />
        )}
        <h2 className=" text-white font-medium uppercase text-[28px] mb-[30px]">
          Ready to Launch?
        </h2>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-between">
            <InputContactForm
              type={'text'}
              title={'¿Cómo te llamas? *'}
              placeholder="Nicolas Tesla"
              name="name"
              value={name}
              onChangeFunction={handleInputChange}
            />
            <InputContactForm
              type={'mail'}
              title={'Tu Mail *'}
              placeholder="nicolas@empresacool.com"
              name="mail"
              value={mail}
              onChangeFunction={handleInputChange}
            />
          </div>
          {/*select*/}
          <div className="flex justify-between mb-[20px]  flex-col md:flex-row">
            <div className="flex flex-col w-full md:w-[45%] mb-[20px]">
              <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
                Quisieras:
              </label>
              <select
                name="select1"
                value={select1}
                onChange={handleInputChange}
                className=" bg-black border border-white   rounded text-white/70 roboto_normal p-2 "
              >
                <option value="Agendar una reunión de diagnóstico y roadmap con nosotros">
                  Agendar una reunión de diagnóstico y roadmap con nosotros
                </option>
                <option value="Que me contacten para evaluar su propuesta">
                  Que me contacten para evaluar su propuesta
                </option>
                <option value="Ser partners">Ser partners</option>
                <option value="Ser un Launcher">Ser un Launcher</option>
                <option value="Otros">Otros</option>
              </select>
            </div>
            <div className="flex flex-col w-full md:w-[45%]">
              <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
                ¿Qué solución te interesó?
              </label>
              <select
                name="select2"
                value={select2}
                onChange={handleInputChange}
                className=" bg-black border border-white   rounded text-white/70 roboto_normal p-2 "
              >
                <option value="Research (Benchmarking, Product Discovery...)">
                  Research (Benchmarking, Product Discovery...)
                </option>
                <option value="Diseño (UI-UX, Estrategia de Marca...)">
                  Diseño (UI-UX, Estrategia de Marca...)
                </option>
                <option value="Desarrollo (Desarrollo web, IT Staffing...)">
                  Desarrollo (Desarrollo web, IT Staffing...)
                </option>
                <option value="Bussiness Consulting (Funnels comerciales, CJM...)">
                  Bussiness Consulting (Funnels comerciales, CJM...)
                </option>
                <option value="Otras soluciones">Otras soluciones </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
              Cuéntanos cómo podemos impulsarte...
            </label>
            <textarea
              name="message"
              value={message}
              onChange={handleInputChange}
              className=" bg-transparent border border-white mb-[20px]   rounded text-white/70 roboto_normal p-2"
              maxLength={300}
              rows={4}
              placeholder="Vamos a romper el hielo empezando por acá"
            />
          </div>
          <button
            type="submit"
            className="roboto_normal text-white  py-2 px-3 uppercase text-sm navbar_button"
          >
            Charlemos
          </button>
        </form>
      </div>
    </HomeSectionContainer>
  );
};

export default ContactForm;
