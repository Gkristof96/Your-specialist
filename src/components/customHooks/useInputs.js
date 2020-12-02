import { useState, useEffect } from 'react';

const useInputs = (validate, values, setValues, handleData) => {
  // állapotok a hibák tárolására és a feliratkozás tényének megállapítására
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // az input mezők változását kezelő függvény
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  // feliratkozást kezelő függvény
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
  // feliratkozás véglegesítése, ha nincs hiba
  useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        handleData();
      }
      // eslint-disable-next-line
  },[errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useInputs;