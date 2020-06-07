import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import TaskCard from "./TaskCard";

class List extends Component {
  renderTasks = () => {
    return this.props.tasks.map((task) => {
      return (
        <Grid item>
          <TaskCard name={task.name} description={task.description} />
        </Grid>
      );
    });
  };

  render() {
    return <React.Fragment>{this.renderTasks()}</React.Fragment>;
  }
}

export default List;
