import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Input, List, ListItem, ListItemText } from "@mui/material";
import { jsPDF } from "jspdf";
import largeImg from "../Assets/largeImg.jpg";
import tinyImg from "../Assets/tinyImg.jpg";
import ProgressiveImage from "../ProgressiveImage";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../reducer/todoSlice";
import TodoList from "./TodoList";

function Todo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo);

  const doc = new jsPDF();
  const [input, setInput] = useState("");

  const SetData = (event) => {
    event.preventDefault();
    let newTask = {
      task: input,
      id: v4(),
    };
    if (input) {
      dispatch(addTodo(newTask));
      setInput("");
    }
  };

  const downloadPdf = () => {
    doc.text("Todo", 10, 10);
    let printData = data.map((task) => task.task);
    doc.text(printData, 20, 20);
    doc.save("TodoList.pdf");
  };
  return (
    <>
      <ProgressiveImage
        src={largeImg}
        placeholder={tinyImg}
        height={"653px"}
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
            style={{ color: "white" }}
            list="taskList"
            type="text"
            placeholder="Please add a task"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

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
            {data &&
              data?.map((task) => {
                console.log(task, "hello");
                return <TodoList task={task} />;
              })}
          </ul>
        </List>
      </div>
    </>
  );
}

export default Todo;
