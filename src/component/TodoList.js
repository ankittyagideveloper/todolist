import React, { useEffect, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Input,
  List,
  ListItem,
  ListItemText,
  Switch,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editTodo, deleteTodo } from "../reducer/todoSlice";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";

function TodoList({ task }) {
  const data = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [editInput, setEditInput] = useState(task.task);
  const [priority, setPriority] = useState(false);
  const deleteTask = (taskId) => {
    let newList = data.filter((task) => {
      return task.id !== taskId;
    });
    localStorage.setItem("data", JSON.stringify(newList));
    dispatch(deleteTodo(newList));
  };
  const SetData = (event) => {
    event.preventDefault();
    let newTask = data.map((taskList) => {
      if (taskList.id === task.id) {
        return { task: editInput, id: taskList.id, priority: priority };
      } else return taskList;
    });
    console.log(newTask);

    dispatch(editTodo(newTask));
    setIsEdit(false);
    // dispatch(addTodo(newTask));

    // if (editInput) {
    //   dispatch(addTodo(newTask));
    // }
  };
  return (
    <List>
      <ListItem
        key={task.id}
        style={{
          background: "white",
          margin: "5px",
          borderRadius: "10px",
          fontWeight: "bold",
        }}
      >
        {isEdit ? (
          <form onSubmit={SetData}>
            <Input
              list="taskList"
              type="text"
              placeholder="Please add a task"
              value={editInput}
              onChange={(event) => setEditInput(event.target.value)}
            />
            <Switch
              checked={priority}
              onChange={() => setPriority((state) => !state)}
            />
            <Button variant="contained" type="submit">
              update
            </Button>
          </form>
        ) : (
          <ListItemText primary={task.task} />
        )}
        {task.priority && <GppMaybeIcon style={{ color: "darkred" }} />}

        <EditIcon
          onClick={() => setIsEdit((state) => !state)}
          style={{ color: "green" }}
        ></EditIcon>
        <CancelIcon
          style={{ color: "black" }}
          onClick={() => deleteTask(task.id)}
        ></CancelIcon>
      </ListItem>
    </List>
  );
}

export default TodoList;
