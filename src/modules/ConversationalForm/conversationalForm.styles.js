import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const Container = styled.section`
  margin: 4rem 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin: 10rem 0 6rem 0;
  }
`;

export const Title = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3.4rem;
  line-height: 2.98rem;
  word-break: break-word;
`;

export const Text = styled.p`
  max-width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 50%;
  }
`;

export const ErrorText = styled.p`
  max-width: 100%;
  color: red;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: 50%;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding-left: 1rem;
  border: 0.15rem solid #87b09a;
  border-radius: 0.6rem;
  font-size: 1rem;

  @media screen and (min-width: ${breakpoints.tiny}) {
    width: 25rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 30rem;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: 0.6rem;
  border: 0.2rem solid #96baa7;
  font-size: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  color: #000000;

  @media screen and (min-width: ${breakpoints.tiny}) {
    width: 25rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 30rem;
  }
`;

export const Button = styled.button`
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

export const BackButton = styled.button`
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-weight: 600;
  border: none;
  background-color: white;
  padding: 1rem;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.4rem;
  margin-bottom: 1.2rem;

  width: 100%;
  @media screen and (min-width: ${breakpoints.tiny}) {
    width: 25rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 30rem;
  }
`;

export const TextSM = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const OverviewButton = styled.button`
  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  background-color: #58bd86;
  border-radius: 0.4rem;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  color: white;
  font-weight: 500;

  &:hover {
    opacity: 0.4;
  }
`;

export const OverviewLabel = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  padding: 1rem;
`;

export const OverviewText = styled.p`
  margin: 0;
  padding: 1rem;
`;

export const OverviewWrapper = styled.div`
  word-break: break-word;
  display: grid;
  grid-template-columns: 1fr;

  width: 100%;

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.tiny}) {
    grid-template-columns: 1fr 1fr;
  }

  border-radius: 0.4rem;
  background-color: #58bd8610;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const RafCartoon = styled.img`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 20rem;
    position: absolute;
    top: -20rem;
    right: 0;
  }
`;

export const RoelCartoon = styled.img`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 23rem;
    position: absolute;
    top: -24rem;
    right: 0;
  }
`;

export const AagjeCartoon = styled.img`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 28rem;
    position: absolute;
    top: -18rem;
    right: 4rem;
  }
`;

export const WardCartoon = styled.img`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 23rem;
    position: absolute;
    top: -24rem;
    right: 6rem;
  }
`;

export const OlivierCartoon = styled.img`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 23rem;
    position: absolute;
    top: -24rem;
    right: 6rem;
  }
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    transform: translateX(-2rem) rotate(-5deg);
  }
`;
