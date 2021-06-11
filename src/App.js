import "./styles.css";
import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      background: "#F8F8F8",
      margin: theme.spacing(1)
    }
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  const [inputFields, setInputFields] = useState([
    { firstName: "", lastName: "" }
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { firstName: "", lastName: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);

    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Add new member</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstname"
              label="First Name"
              value={inputField.firstName}
              type="text"
              variant="filled"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <TextField
              name="lastname"
              label="Lirst Name"
              value={inputField.lastName}
              type="text"
              variant="filled"
              onChange={(event) => handleChangeInput(index, event)}
            />
            <IconButton onClick={() => handleAddFields()}>
              <AddIcon />
            </IconButton>
            <IconButton onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
          </div>
        ))}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Send &gt;&gt;
        </Button>
      </form>
    </Container>
  );
}
