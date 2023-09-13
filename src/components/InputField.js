import React from "react";

function InputField({ id, value, onChange, type, placeholder, name, error }) {
  return (
    <div>
      <input
        onChange={onChange}
        value={value}
        id={id}
        className="form-field"
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

export default InputField;