import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <>
      <h1>Hello form parent class</h1>
      <Child arr={"passing props"}>This is childern</Child>
    </>
  );
}

export default Parent;
