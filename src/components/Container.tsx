import React from "react";

type styleProps = {
  style: React.CSSProperties;
};

const Container = (props: styleProps) => {
  return (
    <div style={props.style}>
      <h2>Text Content goes herr</h2>
    </div>
  );
};

export default Container;
