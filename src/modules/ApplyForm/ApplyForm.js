import React, { memo, useState, useCallback } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';

import Stack from '~components/Stack';
import Button from '~components/Button';
import Input from '~components/form/Input';
import FileUpload from '~components/form/FileUpload';

import { encode } from '~utils/form';

import validationSchema from './validationSchema';

import { Fieldset, Disclaimer } from './applyForm.styles';

const ERROR = 'ERROR';
const SUBMITTED = 'SUBMITTED';

const ApplyForm = ({ vacancy }) => {
  const [formState, setFormState] = useState(null);

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: '',
      file: null,
      name: '',
      phone: '',
    },
    onSubmit: async (submittedValues, actions) => {
      try {
        const data = { 'form-name': 'application-form', ...submittedValues, vacancy };

        fetch('/', {
          body: encode(data),
          method: 'POST',
        });

        setFormState(SUBMITTED);
        actions.resetForm();
      } catch (error) {
        setFormState(ERROR);
      } finally {
        actions.setSubmitting(false);
      }
    },
    validationSchema,
  });

  const setFile = useCallback(
    (files) => {
      setFieldValue('file', files[0]);
    },
    [setFieldValue]
  );

  return (
    <form
      name="application-form"
      method="post"
      onSubmit={handleSubmit}
      data-netlify="true"
      style={{ paddingTop: '24px' }}
    >
      {formState !== SUBMITTED && (
      <div>
        <Fieldset>
          <Stack>
            <Input
              error={touched.name && errors.name}
              name="name"
              id="name"
              label="Your full name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              valid={touched.name && !errors.name}
            />
            <Input
              error={touched.email && errors.email}
              name="email"
              id="email"
              label="Your email address"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              valid={touched.email && !errors.email}
            />
            <Input
              error={touched.phone && errors.phone}
              name="phone"
              id="phone"
              label="Your phone number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              valid={touched.phone && !errors.phone}
            />
            <FileUpload
              error={touched.file && errors.file}
              name="file"
              id="file"
              label="Your resume"
              onChange={setFile}
              onBlur={handleBlur}
              value={values.file}
              valid={touched.file && !errors.file}
            />
          </Stack>
        </Fieldset>

        <Button disabled={isSubmitting} type="submit">Submit</Button>
      </div>
      )}
      {formState === ERROR && (
        <div>
          <p>Something went wrong in submitting the form. Please try again.</p>
        </div>
      )}
      {formState === SUBMITTED && (
        <div>
          <p>
            Your application has been submitted. We'll get in touch with you
            soon.
          </p>
        </div>
      )}
      <Disclaimer>Your data will be used to get in touch with you.</Disclaimer>
    </form>
  );
};

ApplyForm.propTypes = {
  vacancy: PropTypes.string,
};

ApplyForm.defaultProps = {
  vacancy: null,
};

export default memo(ApplyForm);
