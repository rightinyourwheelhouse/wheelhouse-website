import React from 'react';

import * as S from './conversationalButtons.styles';

import Button from '~components/Button';

function ConversationalButtons({
  previousBtn = true,
  nextBtnText,
  onChange,
  value,
  loader,
}) {
  return (
    <S.Wrapper>
      {previousBtn && (
        <S.BackButton
          onClick={() => {
            onChange(value - 1);
            loader();
          }}
        >
          Go back
        </S.BackButton>
      )}
      <Button
        onClick={() => {
          onChange(value + 1);
          loader();
        }}
      >
        {nextBtnText}
      </Button>
    </S.Wrapper>
  );
}

export default ConversationalButtons;
