import React from 'react';

import { InputStyle } from './input.styles';

function Input({ type = 'text', placeholder, value, onChange, style }) {
  return (
    <InputStyle
      style={style}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
}

export default Input;
