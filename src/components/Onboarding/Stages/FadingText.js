import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const templateSyntaxRegex = /\${(.*)}/;

const AnimatedFrame = styled.div`
  @keyframes smooth-talking {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  animation: smooth-talking ${({ delay }) => delay / 1000}s forwards;

  h3 {
    font-size: 48px;
    line-height: 42px;
    text-transform: none;
  }

  @media (max-width: 800px) {
    h3 {
      font-size: 30px;
    }
  }
`;

const FadingText = ({
  active,
  onAdvance,
  textItems,
  values,
}) => {
  const [currentFrame, setCurrentFrame] = useState(null);

  // Does what `${var}` template literals does, but manually
  // Because the text items come from a JSON
  const substituteText = useCallback(
    (text) => {
      if (templateSyntaxRegex.test(text)) {
        const dataKey = templateSyntaxRegex.exec(text)[1];
        const substitute = values[dataKey];

        return text.replace(templateSyntaxRegex, substitute);
      }

      return text;
    },
    [values]
  );

  const frames = textItems.map(({
    text,
    timeout,
  }, index) => (
    <AnimatedFrame key={uuid()} delay={timeout} index={index}>
      <h3>{substituteText(text)}</h3>
    </AnimatedFrame>
  ));

  useEffect(() => {
    if (!currentFrame) {
      return setCurrentFrame(frames[0]);
    }

    // Raf turns out to destructure after all
    const {
      props: {
        delay,
        index,
      },
    } = currentFrame;

    // Have you finished the sequence? Then advance to next stage
    if (active && index === frames.length - 1) {
      const timer = setTimeout(() => {
        onAdvance();
      }, delay);
      return () => clearTimeout(timer);
    }

    // If the sequence is not finished, advance frame (text cycle)
    if (active && index < frames.length - 1) {
      const timer = setTimeout(() => {
        setCurrentFrame(frames[index + 1]);
      }, delay);
      return () => clearTimeout(timer);
    }

    return () => {};
  }, [active, currentFrame]);

  const CurrentFrame = useMemo(() => {
    // We don't want to hide the component when we're done since it otherwise causes weird offset
    if (currentFrame && (active || currentFrame.index === frames.length - 1)) {
      return currentFrame;
    }

    return ' ';
  }, [active, currentFrame]);

  return <>{CurrentFrame}</>;
};

FadingText.propTypes = {
  active: PropTypes.bool,
  onAdvance: PropTypes.func,
  textItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.objectOf(PropTypes.string),
};

FadingText.defaultProps = {
  active: false,
  onAdvance: () => {},
  values: {},
};

export default FadingText;
