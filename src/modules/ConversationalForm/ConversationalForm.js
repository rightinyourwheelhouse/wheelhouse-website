import { Link } from 'gatsby';
import React from 'react';

import {
  ConversationTitle,
  ConversationSection,
} from './conversationalForm.styles';

import Button from '~components/Button';

function ConversationalForm({ questions }) {
  return (
    <div>
      {questions.map(
        ({
          question,
          title,
          textItems,
          nextButtonText,
          previousButtonText,
        }) => {
          return (
            <ConversationSection key={question}>
              {title && <ConversationTitle>{title}</ConversationTitle>}
              {textItems.map(item => {
                return <p key={item.text}>{item.text}</p>;
              })}
              {nextButtonText && (
                <Button as={Link} to="/careers">
                  {nextButtonText}
                </Button>
              )}
              {previousButtonText && (
                <Button as={Link} to="/careers" color="000" background="000">
                  {previousButtonText}
                </Button>
              )}
            </ConversationSection>
          );
        },
      )}
    </div>
  );
}

export default ConversationalForm;
