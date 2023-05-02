import React from "react";
import TextInput from "../Inputs/TextInput";
import DateInput from "../Inputs/DateInput";
import PasswordInput from "../Inputs/PasswordInput";

const Input = ({ field, index, value, handleInputChange, onValidate, pendingValidation }) => {
  const { type } = field;
  switch (type) {
    case "text":
      return (
        <TextInput
          // label={label}
          value={value}
          handleInputChange={handleInputChange}
          field={field}
          index={index}
        />
      );
    case "date":
      return (
        <DateInput
          // label={label}
          value={value}
          handleInputChange={handleInputChange}
          field={field}
          index={index}
          pendingValidation={pendingValidation}
          onValidate={onValidate}
        />
      );
    case "password":
      return (
        <PasswordInput
          // label={label}
          value={value}
          handleInputChange={handleInputChange}
          field={field}
          index={index}
          pendingValidation={pendingValidation}
          onValidate={onValidate}
        />
      );
    default:
      return null;
  }
};

export default Input;
