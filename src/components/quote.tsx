import React from 'react';
import { splitByNumWords } from '../utils';

const Quote: React.FC<{ text: string }> = ({ text }) => {
  const textArray = splitByNumWords(text, 5);

  return (
    <p className="text-green text-7xl font-bold my-32">
      <span className="text-green-dark">{textArray[0] + ' '}</span>
      {textArray[1]}
    </p>
  );
};

export default Quote;
