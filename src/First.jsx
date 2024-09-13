import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";

const First = () => {
  const [thing, setthing] = useState("buy shit");
  const [list, setList] = useState([]);

  const livechange = (event) => {
    setthing(event.target.value);
  };

  const updatelist = () => {
    setList((olditems) => {
      return [...olditems, thing];
    });
    setthing("");
  };
  const removelist = (id) => {
    setList((olditems) => {
      return olditems.filter((arr, index) => {
        return index != id;
      });
    });
  };

  const enterkey = (event) => {
    if (event.key === "ArrowDown") {
      updatelist();
    }
  };

  return (
    <>
      <div className="app">
        <div className="center__div">
          <br />
          <h1>ToDoList</h1>
          <br />
          <input
            type="text"
            placeholder="Enter Your Items"
            onChange={livechange}
            value={thing}
            onKeyDown={enterkey}
          />
          <button onClick={updatelist}>+</button>
          <ol>
            {list.map((cvalue, index) => {
              return (
                <ToDoList value={cvalue} id={index} deleteval={removelist} />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default First;
