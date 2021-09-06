import React, { FormEvent, useState, ChangeEvent } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { withStyles, Theme } from "@material-ui/core/styles";

import * as api from "./api";

const styles = (theme: Theme) => ({
  paper: {
    width: theme.spacing(40)
  }
});

interface Props {
  classes: {
    paper: string
  }
}

const Register: React.SFC<Props> = ({ classes }) => {
  const [name, setName] = useState("");
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name) {
      api.registerUser({ name });
    }
  };

  return (
    <Paper className={classes.paper}>
      <Box p={3}>
        <Typography align="center" color="secondary" variant="h5">
          Register user
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              id='name'
              name='name'
              label="Name"
              fullWidth
              value={name}
              onChange={handleNameChange}
            />
          </Box>
          <Button data-testid='button' fullWidth type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(Register);
