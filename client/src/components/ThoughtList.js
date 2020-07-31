import React from "react";
import { Grid } from "@material-ui/core";
import ThoughtCard from "./ThoughtCard";

const ThoughtList = (props) => {
  return props.thoughts.map((thought, index) => {
    return (
      <Grid item>
        <ThoughtCard
          name={thought.name}
          description={thought.description}
          index={index}
        />
      </Grid>
    );
  });
};

export default ThoughtList;
