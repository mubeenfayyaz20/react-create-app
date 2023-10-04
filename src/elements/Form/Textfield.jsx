import React from "react";

const Textfield = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={rest.type || "text"}
        placeholder={rest.placeholder || label}
        className={rest.className || "form-control"}
        {...rest}
      />
    </div>
  );
};

export default Textfield;
