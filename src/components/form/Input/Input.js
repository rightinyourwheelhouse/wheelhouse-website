import React, { memo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { LabelInput, Label, InputField } from './input.styles';
import { LabelInputContainer } from '../form.styles';
import ErrorField from '../_ErrorField';

const Input = ({
  error,
  id,
  label,
  type,
  className,
  onBlur,
  value,
  valid,
  width,
  ...props
}) => {
  const [active, setActive] = useState(value && value.length > 0);

  const onFocus = useCallback(() => {
    setActive(true);
  }, []);

  const handleBlur = useCallback((event) => {
    setActive(event.target.value.length !== 0);

    if (onBlur) {
      onBlur(event);
    }
  }, []);

  return (
    <div>
      <LabelInput width={width}>
        <LabelInputContainer
          className={classnames(className, {
            active,
            error,
            valid,
          })}
        >
          <Label className={className} htmlFor={id} active={active}>
            {label}
          </Label>
          <InputField
            {...props}
            active={active}
            className={className}
            id={id}
            onBlur={handleBlur}
            onFocus={onFocus}
            type={type}
          />
        </LabelInputContainer>
      </LabelInput>
      {error && <ErrorField>{error}</ErrorField>}
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  valid: PropTypes.bool,
  value: PropTypes.string,
  width: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  disabled: false,
  error: null,
  onBlur: null,
  onChange: null,
  placeholder: null,
  type: 'text',
  valid: false,
  value: undefined,
  width: '100%',
};

export default memo(Input);
