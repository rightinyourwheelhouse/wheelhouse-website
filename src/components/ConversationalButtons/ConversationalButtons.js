import React from 'react';

import Button from '~components/Button';

import * as S from './conversationalButtons.styles';

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
          type="button"
        >
          Go back
        </S.BackButton>
      )}
      <Button
        onClick={() => {
          onChange(value + 1);
          loader();
        }}
        type="button"
      >
        {nextBtnText}
      </Button>
    </S.Wrapper>
  );
}

export default ConversationalButtons;
