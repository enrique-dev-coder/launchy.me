import React from 'react';
import ContactForm from '../../components/ContactPage/ContactForm';
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss';
import FaqContact from '../../components/ContactPage/FaqContact';
import SubscribeForm from '../../components/SubscribeForm';
import Footer from '../../components/Footer';
const index = () => {
  return (
    <StarBackgroundCss>
      {/*div vacio solo para dejar espacio en el section container porque me da hueva acomodorlao para casos  donde se incie con una seccion*/}
      <div className="w-full h-[100px]"></div>
      <ContactForm />
      <FaqContact />
      <SubscribeForm />
      <Footer />
    </StarBackgroundCss>
  );
};

export default index;
