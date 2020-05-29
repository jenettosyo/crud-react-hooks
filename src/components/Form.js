import React, { useState, useContext } from "react";
import { ADD_TODO } from "../actions/index";
import AppContexts from "../contexts";

const Form = () => {
  const [todo, setTodo] = useState("");

  const { dispatch } = useContext(AppContexts);

  const addSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_TODO,
      todo,
    });
  };

  return (
    <div>
      <form className="form-container">
        <input
          type="text"
          className="input-field"
          placeholder="Your todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="add-btn" onClick={addSubmit}>
          ADD
        </button>
      </form>
    </div>
  );
};

export default Form;
