import React, { useState } from "react";
import "./AddUser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const { name, email, address, contact } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log(e.target.value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    if (!name || !email || !address || !contact) {
      setError("Please enter value in all Fields");
    }
  };
  return (
    <div className="container">
      <div className="container-row">
        <h3>Add New User</h3>
        <Box
          className="form-input"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            defaultValue={name}
            type="text"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            defaultValue={email}
            type="email"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            defaultValue={address}
            type="text"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            defaultValue={contact}
            type="number"
            onChange={handleInputChange}
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
