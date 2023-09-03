import React from 'react';

// eslint-disable-next-line react/prop-types
export const Button = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
);


