import React, { useState } from 'react';
import HomeSectionContainer from '../../components/Wrappers/HomeSectionContainer';
import SubscribeModal from '../subscribeModal';
import { useMenu } from '../../context/MenuContext';
const InputContactForm = ({
  title,
  titleEng,
  type,
  placeholder,
  name,
  onChangeFunction,
}) => {
  const { english } = useMenu();
  return (
    <div className="flex flex-col w-full md:w-[45%] mb-[20px]">
      <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
        {english ? titleEng : title}
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
  const { english } = useMenu();
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
      'https://api.hsforms.com/submissions/v3/integration/submit/21017130/aa0166ec-2aea-4752-9d8e-d09d5ae316f0';
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
      <div className="w-full relative">
        <img
          src="/img/Nave.png"
          alt="nave contacto"
          className="fixed  z-30 hidden lg:block animate-pulse alien_position "
        />
        <div className=" w-full max-w-[550px] relative">
          {formConfirmation && (
            <SubscribeModal
              background={
                'linear-gradient(180deg, rgba(176, 152, 240, 0.59) 100%, rgba(134, 20, 130, 0.2) 100%)'
              }
              closeModal={() => setFormConfirm(false)}
            />
          )}
          <h1 className=" text-white font-medium uppercase text-[28px] mb-[30px]">
            Ready to Launch?
          </h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between">
              <InputContactForm
                type={'text'}
                title={'¿Cómo te llamas? *'}
                titleEng={'What’s your name? *'}
                placeholder="Nicolas Tesla"
                name="name"
                value={name}
                onChangeFunction={handleInputChange}
              />
              <InputContactForm
                type={'mail'}
                title={'Tu Mail *'}
                titleEng={'What’s your name? *'}
                placeholder="nicolas@empresacool.com"
                name="mail"
                value={mail}
                onChangeFunction={handleInputChange}
              />
            </div>
            {/*select*/}
            <div className="flex justify-between mb-[20px]  flex-col ">
              <div className="flex flex-col w-full  mb-[20px]">
                <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
                  {english ? 'Your Situation:' : 'Quisieras:'}
                </label>
                <select
                  name="select1"
                  value={select1}
                  onChange={handleInputChange}
                  className=" bg-black border border-white   rounded text-white/70 roboto_normal p-2 "
                >
                  <option value="Agendar una reunión de diagnóstico y roadmap con nosotros">
                    {english
                      ? 'Schedule a business meeting'
                      : ' Agendar una reunión de diagnóstico y roadmap con nosotros'}
                  </option>
                  <option value="Que me contacten para evaluar su propuesta">
                    {english
                      ? 'Evaluate a business proposal'
                      : 'Que me contacten para evaluar su propuesta'}
                  </option>
                  <option value="Ser partners">
                    {english ? 'Become partners' : 'Ser partners'}
                  </option>
                  <option value="Ser un Launcher">
                    {english ? 'Become a Launcher' : 'Ser un Launcher'}
                  </option>
                  <option value="Otros">{english ? 'Other' : 'Otros'}</option>
                </select>
              </div>
              <div className="flex flex-col w-full ">
                <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
                  {english
                    ? 'What solution did you find interesting?'
                    : '   ¿Qué solución te interesó?'}
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
                    {english
                      ? 'Design (UI-UX, Branding Strategy...)'
                      : 'Diseño (UI-UX, Estrategia de Marca...)'}
                  </option>
                  <option value="Desarrollo (Desarrollo web, IT Staffing...)">
                    {english
                      ? 'Development (UI-UX, Branding Strategy...)'
                      : 'Desarrollo (Desarrollo web, IT Staffing...)'}
                  </option>
                  <option value="Bussiness Consulting (Funnels comerciales, CJM...)">
                    Bussiness Consulting (Funnels comerciales, CJM...)
                  </option>
                  <option value="Otras soluciones">
                    {english ? 'Other Solutions' : '      Otras soluciones '}
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
                {english
                  ? 'Tell us how we can boost you...'
                  : ' Cuéntanos cómo podemos impulsarte...'}
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
              {english ? 'Let´s Talk' : 'Charlemos'}
            </button>
          </form>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default ContactForm;
