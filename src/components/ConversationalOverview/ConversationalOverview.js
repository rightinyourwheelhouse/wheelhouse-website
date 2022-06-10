import { ArrowDownIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';

import * as S from './conversationalOverview.styles';

function ConversationalOverview({
  name,
  expectations,
  hobbies,
  cv,
  phone,
  mail,
  portfolioLink1,
  portfolioLink2,
  portfolioLink3,
}) {
  const [overview, setOverwiew] = useState(false);

  return (
    <>
      <S.OverviewButton
        onClick={() => {
          setOverwiew(!overview);
        }}
        type="button"
      >
        <span style={{ fontSize: '18px', fontFamily: 'Montserrat' }}>
          See my anwsers
        </span>
        <div
          style={
            overview
              ? {
                  transform: 'rotate(180deg)',
                }
              : {
                  transform: 'rotate(0deg)',
                }
          }
        >
          <ArrowDownIcon width="24" />
        </div>
      </S.OverviewButton>
      <div
        style={
          overview
            ? {
                display: 'inline',
                backgroundColor: 'gray',
              }
            : {
                display: 'none',
                backgroundColor: 'gray',
              }
        }
      >
        <S.OverviewWrapper>
          <div>
            <S.OverviewLabel>Name:</S.OverviewLabel>
            <S.OverviewText>{name}</S.OverviewText>
          </div>
          <div>
            <S.OverviewLabel>Expectations:</S.OverviewLabel>
            <S.OverviewText>{expectations}</S.OverviewText>
          </div>
          <div>
            <S.OverviewLabel>Hobbies:</S.OverviewLabel>
            <S.OverviewText>{hobbies}</S.OverviewText>
          </div>
          <div>
            <S.OverviewLabel>Cv:</S.OverviewLabel>
            <S.OverviewText>{cv}</S.OverviewText>
          </div>
          <div>
            <S.OverviewLabel>Contact:</S.OverviewLabel>
            <S.OverviewText>{phone}</S.OverviewText>
            <S.OverviewText>{mail}</S.OverviewText>
          </div>

          <div>
            <S.OverviewLabel>Portfolio:</S.OverviewLabel>
            <S.OverviewText>{portfolioLink1 || ''}</S.OverviewText>
            <S.OverviewText>{portfolioLink2 || ''}</S.OverviewText>
            <S.OverviewText>{portfolioLink3 || ''}</S.OverviewText>
          </div>
        </S.OverviewWrapper>
      </div>
    </>
  );
}

export default ConversationalOverview;
