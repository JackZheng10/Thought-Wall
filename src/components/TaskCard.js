import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";
import PropTypes from "prop-types";
import styles from "../styles";

class TaskCard extends Component {
  render() {
    const classes = this.props.classes;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.name}
          titleTypographyProps={{ variant: "h5" }}
          className={classes.cardHeader}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1">{this.props.description}</Typography>
        </CardContent>
      </Card>
    );
  }
}

TaskCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TaskCard);
