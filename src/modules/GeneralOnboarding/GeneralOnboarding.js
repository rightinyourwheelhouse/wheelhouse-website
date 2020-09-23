import React, {
  memo, useReducer, useCallback, useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { Onboarding, stages as stageComponents } from '~components/Onboarding';
import stages from '~components/Onboarding/stageData.json';
import { encode } from '~utils/form';

/**
 * We define all of the behaviour in our JSON file for the conversation
 * This requires us to bind the components referred in that JSON to actual ones here
 * The "component" key in the JSON is the key in this mapping, values should be imported components
 * Make sure they can handle all the properties the stage describes!
 */
const componentMapping = {
  FadingText: stageComponents.FadingText,
  Submit: stageComponents.Submit,
  TextInput: stageComponents.TextInput,
};

const GeneralOnboarding = ({
  children,
  hidden,
  showInitialStage,
}) => {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [values, setValues] = useReducer(reducer, {});

  // When the conversation finishes, this triggers
  const onSubmit = useCallback(() => {
    const data = { 'form-name': 'application-form', ...values };
    console.log('%cDEBUG', 'background-color: #1962dd; padding: 5px; border-radius: 3px; font-weight: bold; color: white', data);

    // fetch('/', {
    //   body: encode(data),
    //   method: 'POST',
    // });
  }, [values]);

  // Get all stages from config, but we change the component to an actual React component
  // All the other properties we just pass along
  const bootstrappedStages = useMemo(
    () => stages.map(({
      component: componentName,
      ...stageProperties
    }) => ({
      Component: componentMapping[componentName],
      values,
      ...stageProperties,
    })).concat({
      Component: componentMapping.Submit,
      handleSubmit: onSubmit,
      values,
    }),
    [values]
  );

  // When a user makes an input to the conversation, this triggers
  const onValueChange = useCallback(
    (newValues) => {
      setValues(newValues);
    },
    [values]
  );

  return (
    <Onboarding
      stages={bootstrappedStages}
      onValueChange={onValueChange}
      showInitialStage={showInitialStage}
      hidden={hidden}
    >
      {children}
    </Onboarding>
  );
};

GeneralOnboarding.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf]).isRequired,
  hidden: PropTypes.bool,
  showInitialStage: PropTypes.bool,
};

GeneralOnboarding.defaultProps = {
  hidden: false,
  showInitialStage: true,
};

export default memo(GeneralOnboarding);
