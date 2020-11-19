import { useState, useEffect } from 'react';

const useAuth = (validateLogin, handleLogin) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
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

    setErrors(validateLogin(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
      // bejelentkeztetés ha nincs error
      if (Object.keys(errors).length === 0 && isSubmitting) {
        handleLogin();
      }
      // eslint-disable-next-line
},[errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useAuth;