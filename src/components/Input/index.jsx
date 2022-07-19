import React from 'react';
import P from 'prop-types';

import './styles.css';

function Input({ name, label, value, placeholder, onChange }) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        className="input"
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

Input.propTypes = {
  name: P.string.isRequired,
  label: P.string.isRequired,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
  placeholder: P.string,
};

export default Input;
