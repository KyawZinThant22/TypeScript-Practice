import React from "react";

type buttonProps = {
  handleClicked: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = (props: buttonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClicked(event, 2)}>Click</button>
    </div>
  );
};

export default Button;
