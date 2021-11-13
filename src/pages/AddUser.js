import React, { useState } from "react";
import "./AddUser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const { name, email, address, contact } = user;
  return (
    <div className="container">
      <div className="container-row">
        <h2>React CRUD App</h2>
        <h3>Add New User</h3>
        <Box
          className="form-input"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            type="text"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            type="text"
          />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address}
            type="text"
          />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={contact}
            type="text"
          />
          <div className="submit-button">
            <Button
              className="cancel-button"
              color="secondary"
              variant="contained"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
            <Button variant="contained" type="sumit">
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default AddUser;
