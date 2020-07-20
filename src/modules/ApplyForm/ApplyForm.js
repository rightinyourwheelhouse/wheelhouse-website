import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import Stack from '~components/Stack';
import Button from '~components/Button';
import Input from '~components/form/Input';
import FileUpload from '~components/form/FileUpload';

import { encode } from '~utils/form';

import validationSchema from './validationSchema';

import { Fieldset, Disclaimer } from './applyForm.styles';

const ApplyForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit, handleChange, values, errors, touched, handleBlur, setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
    },
    onSubmit: async (submittedValues, actions) => {
      console.log('submittedValues', submittedValues);
      await fetch('/', {
        body: encode({ 'form-name': 'quote-form', ...submittedValues }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        method: 'POST',
      });

      setSubmitted(true);
      actions.resetForm();
      actions.setSubmitting(false);
    },
    validationSchema,
  });

  return (
    <form
      name="application-form"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify
    >
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
            error={touched.resume && errors.resume}
            name="resume"
            id="resume"
            label="Resume"
            onChange={(files) => {
              setFieldValue('resume', files[0]);
            }}
            onBlur={handleBlur}
            value={values.resume}
            valid={touched.resume && !errors.resume}
          />
        </Stack>
      </Fieldset>
      <Button type="submit">Submit</Button>
      <Disclaimer>Your data will be used to get in touch with you.</Disclaimer>
    </form>
  );
};

ApplyForm.propTypes = {};

export default memo(ApplyForm);
