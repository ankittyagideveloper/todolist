import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "./Analysis.css";
import { useSelector } from "react-redux";

function Analysis() {
  const data = useSelector((state) => state.todo);
  const priority = data.filter((task) => task.priority);
  const noPriority = data.filter((task) => !task.priority);
  return (
    <div className="container">
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          md={6}
          style={{ background: "red" }}
          sx={{
            margin: "auto",
            maxWidth: 500,
            height: 500,
          }}
        >
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              height: 400,

              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "gray",
            }}
          >
            {priority.map((prioritytask) => (
              <Grid
                backgroundColor="white"
                margin="5px"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {prioritytask.task}
              </Grid>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} style={{ background: "blue" }}>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              height: 400,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "gray",
            }}
          >
            {noPriority.map((prioritytask) => (
              <Grid
                backgroundColor="white"
                margin="5px"
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                {prioritytask.task}
              </Grid>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Analysis;
