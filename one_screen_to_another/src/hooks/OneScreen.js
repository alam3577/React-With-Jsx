import React from "react";
import { useHistory } from "react-router-dom";

function OneScreen() {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/screen2/111?qty=20");
  };
  return (
    <>
      <h1>This is screen one</h1>
      <button onClick={handleSubmit}>Click Me Screen2</button>
    </>
  );
}

export default OneScreen;
