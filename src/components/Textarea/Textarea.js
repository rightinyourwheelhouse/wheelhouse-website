import React from 'react';

import { TextareaStyle } from './textarea.styles';

function Textarea({ placeholder, value, onChange }) {
  return (
    <TextareaStyle
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    />
  );
}

export default Textarea;
