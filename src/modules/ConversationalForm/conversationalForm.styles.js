import styled from 'styled-components';

export const ConversationTitle = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3.4rem;
  line-height: 2.98rem;
  word-break: break-word;
`;

export const ConversationSection = styled.div`
  margin: 15.5rem 2rem 0 2rem;
`;

export const HiddenTitle = styled.h2`
  display: none;
`;

export const QuestionSection = styled.section`
  margin: 10rem 2rem 6rem 2rem;
`;

export const BackBtn = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-weight: 600;
  border: none;
  background-color: white;
  padding: 1rem;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: start;
  margin-top: 2rem;
`;

export const AddBtn = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #87b09a;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: white;
  border: none;
  border-radius: 0.6rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;
