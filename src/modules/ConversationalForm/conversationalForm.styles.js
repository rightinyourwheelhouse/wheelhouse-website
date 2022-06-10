import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

import breakpoints from '~styles/breakpoints';

export const Container = styled.section``;

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

export const Input = styled.input``;

export const Textarea = styled.textarea`
  width: 100%;
  height: 10rem;
  border-radius: var(--rounded-corners);
  border: 2px solid var(--color-text-primary-900);
  font-size: 1rem;
  padding-left: 1rem;
  padding-top: 1rem;
  color: #000000;
  font-family: var(--font-family);

  @media screen and (min-width: ${breakpoints.tiny}) {
    width: 25rem;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    width: 30rem;
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
  margin-bottom: 1.2rem;

  width: 11rem;
`;

export const TextSM = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const RafCartoon = styled(GatsbyImage)`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 15rem;
    position: absolute;
    top: -22rem;
    right: 0;
  }
`;

export const RoelCartoon = styled(GatsbyImage)`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 15rem;
    position: absolute;
    top: -30rem;
    right: 0;
  }
`;

export const AagjeCartoon = styled(GatsbyImage)`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 28rem;
    position: absolute;
    top: -24rem;
    right: 0rem;
  }
`;

export const WardCartoon = styled(GatsbyImage)`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 19rem;
    position: absolute;
    top: -28rem;
    right: 0rem;
  }
`;

export const OlivierCartoon = styled(GatsbyImage)`
  display: none;

  @media screen and (min-width: 1156px) {
    display: inline;
    width: 18rem;
    position: absolute;
    top: -24rem;
    right: 4rem;
  }
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &:hover {
    transform: translateX(-2rem) rotate(-5deg);
  }
`;
