import React, { Component } from "react";
import {
  Grid,
  Typography,
  Button,
  withStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "./styles";
import TaskList from "./components/TaskList";

class ToDo extends Component {
  state = { addTask: false, tasks: [], name: "", description: "" };

  toggleForm = () => {
    this.setState({ addTask: !this.state.addTask }, () => {
      //if form closed, clear the text fields
      if (!this.state.addTask) {
        this.setState({ name: "", description: "" });
      }
    });
  };

  handleChange = (event) => {
    let value = event.target.value;
    let property = event.target.name;

    this.setState({
      [property]: value,
    });
  };

  addTask = () => {
    console.log(1);
    let task = {
      name: this.state.name,
      description: this.state.description,
    };

    this.setState({ tasks: [...this.state.tasks, task] }, () => {
      this.toggleForm();
    });
  };

  render() {
    const classes = this.props.classes;

    return (
      <React.Fragment>
        {/*add item dialog*/}
        <Dialog open={this.state.addTask} onClose={this.toggleForm}>
          <DialogTitle>Add a Task</DialogTitle>
          <DialogContent>
            <Grid
              container
              justify="flex-start"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="outlined"
                  label="Name"
                  size="small"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  variant="outlined"
                  label="Description"
                  size="small"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.toggleForm}
              className={classes.button}
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.addTask}
              className={classes.button}
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        {/*top bar*/}
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{
            backgroundImage:
              "linear-gradient(to right, #8a2387, #e94057, #f27121)",
          }}
        >
          <Grid item>
            <Typography variant="h3" className={classes.name}>
              To-Do
            </Typography>
          </Grid>
          <Grid item>
            <Button
              size="small"
              variant="contained"
              className={classes.button}
              onClick={this.toggleForm}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
        {/*items*/}
        <br />
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center" /*main page column*/
        >
          <TaskList tasks={this.state.tasks} />
        </Grid>
      </React.Fragment>
    );
  }
}

ToDo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToDo);
