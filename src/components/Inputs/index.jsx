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
          value={value}
          handleInputChange={handleInputChange}
          field={field}
          index={index}
          pendingValidation={pendingValidation}
          onValidate={onValidate}
        />
      );
    case "date":
      return (
        <DateInput
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
