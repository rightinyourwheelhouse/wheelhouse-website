import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';

import { FileUploadContainer, Caption, Label } from './fileUpload.styles';

import ErrorField from '../_ErrorField';
import { LabelInputContainer } from '../form.styles';

import colors from '~styles/colors';

function FileUpload({ error, name, onChange, valid, value, label, ...props }) {
  const [active, setActive] = useState(value && value.name.length > 0);

  const onFocus = useCallback(() => {
    setActive(true);
  }, []);

  const handleChange = useCallback(
    e => {
      if (onChange) {
        onChange([...e.target.files]);
      }
    },
    [onChange],
  );

  return (
    <FileUploadContainer>
      <Label>{label}</Label>
      <input
        {...props}
        id={name}
        name={name}
        onFocus={onFocus}
        onChange={handleChange}
        type="file"
      />
      <label htmlFor={name}>
        {Boolean(value) && (
          <LabelInputContainer
            color={colors.textPrimary100}
            padding
            className={classnames({
              active,
              error,
              valid,
            })}
            width="100px"
          >
            {value.name}
          </LabelInputContainer>
        )}
        {!value && (
          <LabelInputContainer
            color={colors.textPrimary100}
            padding
            className={classnames({
              active,
              error,
              valid,
            })}
            width="100px"
          >
            Upload
          </LabelInputContainer>
        )}
        <Caption>Max file size is 10MB</Caption>
      </label>
      {error && <ErrorField>{error}</ErrorField>}
    </FileUploadContainer>
  );
}

FileUpload.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  value: PropTypes.shape({ name: PropTypes.string }),
};

export default memo(FileUpload);
