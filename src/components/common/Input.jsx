import React from "react";

const Input = ({ name, label, value, onChange, errors }) => {
  return (
    <div className="form-group m-2">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        type="text"
        className="form-control mb-2"
      />

      {errors && <div className="alert alert-danger">{errors}</div>}
    </div>
  );
};

export default Input;
