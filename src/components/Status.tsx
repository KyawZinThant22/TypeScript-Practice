type statusProps = {
  status: "loading" | "error" | "success";
};

const Status = ({ status }: statusProps) => {
  let message;
  if (status === "loading") {
    message = "loading";
  } else if (status === "error") {
    message = "error";
  } else if (status === "success") {
    message = "success";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
