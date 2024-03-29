import React from 'react';
import { splitByNumWords } from '../utils';

const Quote: React.FC<{ text: string }> = ({ text }) => {
  const textArray = splitByNumWords(text, 5);

  return (
    <p className="text-green text-4xl md:text-7xl font-bold mb-16 md:mb-32">
      <span className="text-green-dark">{textArray[0] + ' '}</span>
      {textArray[1]}
    </p>
  );
};

export default Quote;
