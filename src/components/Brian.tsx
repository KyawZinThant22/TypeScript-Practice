type brianProps = {
  children: React.ReactNode;
};

const Brian = ({ children }: brianProps) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default Brian;
