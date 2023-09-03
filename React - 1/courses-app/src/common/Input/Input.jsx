import React from 'react';

// eslint-disable-next-line react/prop-types
function Input({ labelText, placeholderText, onChange }) {
  return (
    <div className="input-container">
      <label>{labelText}</label>
      <input type="text" placeholder={placeholderText} onChange={onChange} />
    </div>
  );
}

export default Input;
