import React, { useEffect } from "react";

import useValidation from "../../../utils/hooks/useValidation";

const DateInput = ({
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
        type="date"
        name={label}
        placeholder={placeholder}
        value={value || ""}
        onChange={handleInputChange}
        //   min={field.min_date}
        //   max={field.max_date}
        //   required={required ? true : false}
      />
      {errors?.length ? (
        <>
          <br />
          <span style={{ color: "red", fontSize: "10px" }}>
            Enter a valid date
          </span>
        </>
      ) : null}
    </div>
  );
};

export default DateInput;
