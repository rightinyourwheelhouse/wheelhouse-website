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

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  border-radius: 0.6rem;
  border: 0.2rem solid #96baa7;
  font-size: 1.4rem;
  padding-left: 1rem;
  color: #999999;
  margin-bottom: 1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 0.6rem;
  border: 0.2rem solid #96baa7;
  font-size: 1.4rem;
  padding-left: 1rem;
  padding-top: 1rem;
  color: #999999;
  margin-bottom: 2rem;
`;

export const ButtonLink = styled.button`
  width: 100%;
  height: 4rem;
  background-color: #96baa7;
  border-radius: 0.6rem;
  text-transform: uppercase;
  border: 0.2rem solid #96baa7;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: white;
  letter-spacing: 0.32em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.2rem);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6.6rem;
`;
