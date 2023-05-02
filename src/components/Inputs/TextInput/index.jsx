import React from "react";

const index = ({ field, index, value, handleInputChange }) => {
    const { label, placeholder } = field;
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
    </div>
  );
};

export default index;
