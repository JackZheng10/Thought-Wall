import React from "react";
import { Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";

function TaskList(props) {
  return props.tasks.map((task, index) => {
    return (
      <Grid item>
        <TaskCard
          name={task.name}
          description={task.description}
          index={index}
          deleteTask={props.deleteTask}
        />
      </Grid>
    );
  });
}

export default TaskList;
