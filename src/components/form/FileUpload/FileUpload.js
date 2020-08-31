import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { LabelInputContainer } from '../form.styles';
import { FileUploadContainer, Caption, Label } from './fileUpload.styles';

import ErrorField from '../_ErrorField';

const FileUpload = ({
  error, name, onChange, valid, value, label, ...props
}) => {
  const [active, setActive] = useState(value && value.name.length > 0);

  const onFocus = useCallback(() => {
    setActive(true);
  }, []);

  const handleChange = useCallback((e) => {
    if (onChange) {
      onChange([...e.target.files]);
    }
  }, []);

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
};

FileUpload.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  value: PropTypes.shape({ name: PropTypes.string }),
};

FileUpload.defaultProps = {
  error: null,
  label: 'upload file',
  onChange: null,
  valid: false,
  value: null,
};

export default memo(FileUpload);
