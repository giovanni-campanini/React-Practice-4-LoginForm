import React from "react";
import Form from "./Form";

var userNotRegistered = false;

function App() {
  return (
    <div className="container">
      <Form userNotRegistered={userNotRegistered} />
    </div>
  );
}

export default App;
