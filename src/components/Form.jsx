import React from "react";

const Form = (props) => {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userNotRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.userNotRegistered ? "Register" : "Log in"}
      </button>
    </form>
  );
};

export default Form;
