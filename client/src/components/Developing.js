import { Grid, Typography } from "@material-ui/core";
import React from "react";

function Developing() {
  return (
    <div>
      <Grid container justify="space-around" style={{ height: "100vh" }}>
        <Grid container direction="column" alignItems="center">
          <Typography variant="h3" color="secondary">
            The Site in under Development
          </Typography>
          <Typography variant="body1">
            The Service will soon be Functioning
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Developing;
