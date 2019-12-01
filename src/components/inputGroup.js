import React from "react";

const InputGroup = inputName => {
  return (
    <div>
      <div>{inputName.name}</div>
      <input />
    </div>
  );
};

export default InputGroup;
