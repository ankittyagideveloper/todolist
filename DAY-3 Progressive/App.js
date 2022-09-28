import React, { useReducer, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Input, List, ListItem, ListItemText } from "@mui/material";
import { jsPDF } from "jspdf";
import ProgressiveImage from "./ProgressiveImage";
import largeImg from "./Assets/largeImg.jpg";
import tinyImg from "./Assets/tinyImg.jpg";
import "./App.css";

const initialVal = JSON.parse(localStorage.getItem("data") || "[]");
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      localStorage.setItem("data", JSON.stringify([...state, action.payload]));
      return [...state, action.payload];

    case "DELETE_TASK":
      localStorage.setItem("data", JSON.stringify(action.payload.newList));
      return action.payload.newList;
    default:
      break;
  }
};
function App() {
  const doc = new jsPDF();
  const [input, setInput] = useState("");
  const [data, dispatch] = useReducer(reducer, initialVal);

  const SetData = (event) => {
    event.preventDefault();
    let newTask = {
      task: input,
      id: v4(),
    };
    if (input) {
      dispatch({ type: "ADD_TODO", payload: newTask });
      setInput("");
    }
  };
  const deleteTask = (taskid) => {
    let newList = data.filter((task) => {
      return task.id !== taskid;
    });
    dispatch({ type: "DELETE_TASK", payload: { newList } });
  };
  const downloadPdf = () => {
    doc.text("Todo", 10, 10);
    let printData = data.map((task) => task.task);
    doc.text(printData, 20, 20);
    doc.save("TodoList.pdf");
  };
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <ProgressiveImage
        src={largeImg}
        placeholder={tinyImg}
        height={"100%"}
        width={"100%"}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Todo</h1>
        <form onSubmit={SetData}>
          <Input
            style={{ color: "#fff" }}
            list="taskList"
            type="text"
            placeholder="Please add a task"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <datalist id="taskList">
            {data.map(({ task }) => (
              <option value={task} />
            ))}
          </datalist>
          <Button variant="contained" type="submit">
            Go
          </Button>
          <Button
            variant="contained"
            style={{ marginLeft: "5px" }}
            onClick={downloadPdf}
          >
            Export
          </Button>
        </form>
      </div>
      <div>
        <List style={{ display: "flex", justifyContent: "center" }}>
          <ul>
            {data?.map(({ task, id }) => (
              <ListItem key={id}>
                <ListItemText primary={task} style={{ color: "#fff" }} />

                <CancelIcon
                  style={{ color: "darkred" }}
                  onClick={() => deleteTask(id)}
                ></CancelIcon>
                <EditIcon></EditIcon>
              </ListItem>
            ))}
          </ul>
        </List>
      </div>
    </div>
  );
}

export default App;
