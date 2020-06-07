import React from "react";
import { Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";

function TaskList(props) {
  return props.tasks.map((task) => {
    return (
      <Grid item>
        <TaskCard name={task.name} description={task.description} />
      </Grid>
    );
  });
}

export default TaskList;
