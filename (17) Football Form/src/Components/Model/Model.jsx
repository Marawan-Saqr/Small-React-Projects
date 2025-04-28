import { Alert } from "react-bootstrap";

const Model = ({ successMessage }) => {
  return (
    <div className="model">
      {successMessage ? (
        <Alert variant={"success"}>Success Form Thank You</Alert>
      ) : (
        <Alert variant={"danger"}>Error Try Again</Alert>
      )}
    </div>
  );
};

export default Model;
