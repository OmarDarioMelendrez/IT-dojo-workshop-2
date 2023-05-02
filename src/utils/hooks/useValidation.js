import { useState } from 'react';

export default function useValidation(validations, value) {
  const [errors, setErrors] = useState([]);
  // console.log("Use validation running hello", validations)
  const validate = () => {
    const errors = validations.reduce((acc, validation) => {
      if (validation.type === 'required' && !value) {
        console.log("Use validation running 2")
        return [...acc, 'This field is required'];
      }
      if (validation.type === 'confirmation' && value !== validation.value) {
        return [...acc, 'The confirmation value does not match'];
      }
      if (validation.type === 'regex' && !new RegExp(validation.value).test(value)) {
        return [...acc, 'Invalid format'];
      }
      if (validation.type === 'minDate' && new Date(value) < new Date(validation.value)) {
        return [...acc, 'Min date should be bigger.'];
      }
      if (validation.type === 'maxDate' && new Date(value) > new Date(validation.value)) {
        return [...acc, 'Max date should be smaller.'];
      }
      return acc;
    }, []);
    setErrors(errors);
    return errors;
  };

  return [errors, validate];
}