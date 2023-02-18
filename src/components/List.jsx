import React from "react";
import "../App.css";

function List({title,description,handleDelete,index}) {
  return (
    
    <div id="list">
      <div>
      <p>{title}</p>
      <span>
        {description}
      </span>
      </div>
      
      <button onClick={ () => handleDelete(index)}>-</button>
    </div>
  );
}

export default List;
