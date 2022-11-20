import React from "react";

const Input = ({ name, label, errors, ...rest }) => {
  return (
    <div className="form-group m-2">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control mb-2" />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
