import React from 'react';

import { Input, Textarea } from './conversationalInput.styles';

function ConversationalInput({ type, placeholder, value, onChange }) {
  if (type === 'input') {
    return (
      <Input
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    );
  }

  if (type === 'textarea') {
    return (
      <Textarea
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      />
    );
  }

  return null;
}

export default ConversationalInput;
