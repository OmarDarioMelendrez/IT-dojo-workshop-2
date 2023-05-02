import React, { useEffect } from "react";

import useValidation from "../../../utils/hooks/useValidation";

const TextInput = ({
  field,
  index,
  value,
  handleInputChange,
  pendingValidation,
  onValidate,
}) => {
  const { label, placeholder, validations } = field;
  const [errors, validate] = useValidation(validations, value);
  useEffect(() => {
    if (pendingValidation === true) {
      validate();
      onValidate(errors);
    }
  }, [pendingValidation]);
  //   console.log("Errors ", errors);

  return (
    <div key={index}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleInputChange}
        // pattern={regex}
        // required={required ? true : false}
      />
      {errors?.length ? (
        <>
          <br />
          <span style={{ color: "red", fontSize: "10px" }}>
            Enter a valid text.
          </span>
        </>
      ) : null}
    </div>
  );
};

export default TextInput;
