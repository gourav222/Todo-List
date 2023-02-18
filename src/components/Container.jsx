import React, { useState } from "react";
import List from "./List";
import "../App.css";
const Container = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);
  const handleDelete = (indx) => {
    const filterArray = task.filter((ele, i) => {
      return i != indx;
    });
    setTask(filterArray);
  };
  return (
    <div id="container">
      <h1 id="heading">Daily Goals</h1>
      <div id="task">
        <input
          type="text"
          placeholder="Title"
          className="taskBar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          rows="9"
          cols="70"
          name="comment"
          id="textArea"
          placeholder="Descriptionc"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          id="submitButton"
          onClick={() => {
            setTask([...task, { title, description }]);
          }}
        >
          Add
        </button>
      </div>
      <div id="box">
        {task.map((ele, indx) => (
          <List
            key={indx}
            title={ele.title}
            description={ele.description}
            handleDelete={handleDelete}
            index={indx}
          />
        ))}
      </div>
    </div>
  );
};

export default Container;
