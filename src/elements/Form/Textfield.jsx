import React from "react";

const Textfield = ({ label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={rest.type || "text"}
        name={rest.name || label}
        id={rest.id || label}
        placeholder={rest.placeholder || label}
        className={rest.className || "form-control"}
        {...rest}
      />
    </div>
  );
};

export default Textfield;
