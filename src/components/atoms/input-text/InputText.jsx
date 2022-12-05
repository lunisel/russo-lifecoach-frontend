import React from "react";
import "./styles.css";

const InputText = ({
  containerStyle,
  placeholder,
  inputStyle,
  name,
  onChangeFunction,
}) => {
  return (
    <div className={`input-container ${containerStyle}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`input-style ${inputStyle}`}
        name={name}
        onChange={(value) => onChangeFunction(name, value)}
      />
    </div>
  );
};

export default InputText;
