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

export const InputStyle = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  border: 0.15rem solid #87b09a;
  border-radius: 0.6rem;
  font-size: 1rem;
`;

export const TextareaStyle = styled.textarea`
  width: 100%;
  height: 8rem;
  padding: 1rem;
  border: 0.15rem solid #87b09a;
  border-radius: 0.6rem;
  font-size: 1rem;
`;

export const ButtonStyle = styled.button`
  align-items: center;
  background: #96baa7;
  border-radius: 6px;
  border: none;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: Montserrat, Helvetica, sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  line-height: 1.1rem;
  padding: 16px 32px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  &:hover {
    border: 1px solid transparant;
    transform: translateY(-2px);
  }
`;

export const ButtonWrapperStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.4rem;
  margin-bottom: 1.2rem;
`;

export const SmallTextStyle = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0.5rem 0;
`;
