import React from "react";

type InputProps = {
  vlaue: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input type="text" value={props.vlaue} onChange={props.handleChange} />
    </div>
  );
};

export default Input;
