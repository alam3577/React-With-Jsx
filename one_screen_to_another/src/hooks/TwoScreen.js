import React from "react";
import { useLocation, useParams, useHistory } from "react-router-dom";

function TwoScreen() {
  const history = useHistory();
  const { id } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  return (
    // hooks

    // <div>
    //   <h1>This is screen 2</h1>
    //   <h1>This is id ;- ${id}</h1>
    //   <h1>This is location :- ${location.pathname}</h1>
    //   <h1>qrty :- ${qty}</h1>
    //   <h1>{JSON.stringify(location)}</h1>
    //   <button
    //     onClick={() => {
    //       return history.push("/");
    //     }}
    //   ></button>
    // </div>

    // class based component
    <>
      
    </>
  );
}

export default TwoScreen;
