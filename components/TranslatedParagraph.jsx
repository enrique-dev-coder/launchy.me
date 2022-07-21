import React from 'react';
import { useMenu } from '../context/MenuContext';

const TranslatedParagraph = ({ textSpanish, textEnglish, classes }) => {
  const { english } = useMenu();

  return <p className={classes}>{english ? textEnglish : textSpanish}</p>;
};

export default TranslatedParagraph;
