import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Register from "./Register";

const App = () => {
  return (
    <Container maxWidth='xs'>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2} direction="column">
          <Grid item>
            <Register />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
