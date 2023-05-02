import React, { useState } from "react";
import Inputs from "../Inputs";

const Form = ({ formFields }) => {
  const [formData, setFormData] = useState({});
  const [validation, setValidation] = useState(false);
  const [errors, setErrors] = useState([]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const multipleValidations = (inputErrors) => {
    setErrors([...errors,...inputErrors])
    console.log("Multiple errors ", errors)
    setValidation(false)
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    setValidation(true)
    // Add your form submission logic here using the formData state
    console.log(formData);
  };

//   console.log("formFields ", formFields)

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <Inputs
          index={index}
          field={field}
          value={formData[field.label]}
          handleInputChange={handleInputChange}
          pendingValidation={validation}
          onValidate={multipleValidations}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
