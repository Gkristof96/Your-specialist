import { useState, useEffect } from 'react';

const useInputs = (validate, values, setValues, sendData) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    
  };

  useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        sendData()
      }
      // eslint-disable-next-line
  },[errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useInputs;