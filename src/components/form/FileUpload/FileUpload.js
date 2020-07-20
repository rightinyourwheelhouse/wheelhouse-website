import React, { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { LabelInputContainer } from '../form.styles';
import { FileUploadContainer, Caption } from './fileUpload.styles';

const FileUpload = ({
  error, name, onChange, valid, value, ...props
}) => {
  const [active, setActive] = useState(value && value.length > 0);

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
    </FileUploadContainer>
  );
};

FileUpload.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  valid: PropTypes.bool,
  value: PropTypes.shape({ name: PropTypes.string }),
};

FileUpload.defaultProps = {
  error: null,
  onChange: null,
  valid: false,
  value: null,
};

export default memo(FileUpload);
