import { useState, useCallback } from 'react';

/**
 * Custom hook for form validation and submission handling
 * Provides real-time validation, error messages, and loading states
 */
export const useFormValidation = (initialValues, onSubmit, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate on blur
    if (validate) {
      const fieldErrors = validate(values);
      if (fieldErrors[name]) {
        setErrors(prev => ({ ...prev, [name]: fieldErrors[name] }));
      }
    }
  }, [validate, values]);

  const handleSubmit = useCallback(async (e) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      // Validate all fields
      if (validate) {
        const allErrors = validate(values);
        if (Object.keys(allErrors).length > 0) {
          setErrors(allErrors);
          setTouched(Object.keys(initialValues).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
          setIsSubmitting(false);
          return;
        }
      }

      // Submit
      await onSubmit(values);
      setSubmitSuccess(true);
      
      // Reset after success
      setTimeout(() => {
        setValues(initialValues);
        setTouched({});
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      setErrors({ submit: error.message || 'Submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [values, validate, onSubmit, initialValues]);

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitSuccess(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitSuccess,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
  };
};
