import styled from 'styled-components';

export const ConversationTitle = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3.4rem;
  line-height: 2.98rem;
  word-break: break-word;
`;

export const QuestionWrapper = styled.div`
  margin: 10rem 2rem 6.6rem 2rem;
`;

export const QuestionNextButton = styled.button`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  border-radius: 0.6rem;
  background-color: #51b47e;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.4rem);
  }
`;

export const QuestionPreviousButton = styled.button`
  width: 100%;
  height: 4rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.32em;
  color: black;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background-color: white;
`;

export const QuestionInput = styled.input`
  width: 100%;
  height: 4rem;
  border-radius: 0.6rem;
  border: 0.2rem solid #96baa7;
  font-size: 1rem;
  padding-left: 1rem;
  color: #999999;
`;

export const QuestionTextarea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 0.6rem;
  border: 0.2rem solid #96baa7;
  font-size: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  color: #999999;
`;
