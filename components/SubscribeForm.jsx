import HomeSectionContainer from './Wrappers/HomeSectionContainer';

import { useState } from 'react';
import SubscribeModal from '../components/subscribeModal';
import TranslatedParagraph from './TranslatedParagraph';
import { useMenu } from '../context/MenuContext';
const Input = ({ labelName, type, value, onChange }) => {
  return (
    <div className="flex w-full mb-[30px] md:mb-0 md:w-[50%] flex-col">
      <label className="text-white mb-2">
        {labelName} <span className=" text-red-500">*</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="bg-transparent border border-white w-[90%] text-white caret-white px-3 py-2"
      />
    </div>
  );
};

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [form, setFormConfirm] = useState(false);
  const { english } = useMenu();
  const handleSubmit = (e) => {
    e.preventDefault();
    //iniciar peticion de xhr
    let xhr = new XMLHttpRequest();
    //peticion a url  al formulario de hubspot
    let url =
      'https://api.hsforms.com/submissions/v3/integration/submit/21017130/e3742a1d-662b-49a6-a11e-eff333c9a3ca';
    //array con los valores del estado
    let data = {
      fields: [
        {
          name: 'firstname',
          value: name,
        },
        {
          name: 'email',
          value: email,
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
    setEmail('');
    setName('');
  };
  return (
    <HomeSectionContainer>
      <div className="w-full relative ">
        {form && (
          <SubscribeModal
            background={
              'linear-gradient(180deg, rgba(176, 152, 240, 0.59) 100%, rgba(134, 20, 130, 0.2) 100%)'
            }
            closeModal={() => setFormConfirm(false)}
          />
        )}
        <img
          src="/img/planet.png"
          alt="planeta"
          className="absolute right-0 z-0 translate-x-[150px] -translate-y-[110px]  md:-translate-y-[170px]"
        />
        <TranslatedParagraph
          textSpanish={'SUSCRIBITE A NUESTRA NAVE!'}
          textEnglish="RIDE ON OUR SPACE SHIP!"
          classes={
            'uppercase font-bold relative   text-white md:text-[22px] roboto_condesed mb-[30px] md:mb-[40px] '
          }
        />
        <TranslatedParagraph
          textSpanish={
            'Te enviaremos recursos gratuitos y novedades que AMARAS e impulsarán tu empresa. NO SPAM, I SWEAR.'
          }
          textEnglish={
            'We will send you free resources and news taht you will LOVE also the will boost performance of your company. NO SPAM, I SWEAR.'
          }
          classes="text-white text-[14px] relative md:text-base mb-2"
        />

        <form className="relative" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row w-full md:w-[80%]">
            <Input
              labelName={'Name'}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              labelName={'Mail'}
              type="mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white py-2 px-3 uppercase text-sm navbar_button md:mt-[40px]"
          >
            {english ? 'I join the space ship' : 'me uno a la nave'}
          </button>
          {english ? (
            <p className="mt-[20px] text-sm" style={{ color: '#DCDCDC' }}>
              I accept{' '}
              <a href="/privacy">
                <span className="underline cursor-pointer">
                  privacy policies{' '}
                </span>{' '}
              </a>
              in my suscription.
            </p>
          ) : (
            <p className="mt-[20px] text-sm" style={{ color: '#DCDCDC' }}>
              Acepto las{' '}
              <a href="/privacy">
                <span className="underline cursor-pointer">
                  Politicas de Privacidad{' '}
                </span>{' '}
              </a>
              al suscribirme.
            </p>
          )}
        </form>
      </div>
    </HomeSectionContainer>
  );
};

export default SubscribeForm;
