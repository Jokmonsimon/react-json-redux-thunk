import React, { useState } from "react";
import "./AddUser.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { red } from "@mui/material/colors";

const AddUser = () => {
  const [error, setError] = useState("");
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });

  const { name, email, address, contact } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address || !contact) {
      setError("Please enter value in all Fields");
    } else {
      dispatch(addUser(state));
      navigate("/");
      setError("");
    }
  };
  return (
    <div className="container">
      <div className="container-row">
        <div className="go-back-button">
          <Button
            color="secondary"
            variant="contained"
            onClick={() => navigate("/")}
          >
            Go Back
          </Button>
        </div>
        <h3>Add New User</h3>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
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
            Value={name}
            name="name"
            type="text"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            Value={email}
            name="email"
            type="email"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            Value={address}
            name="address"
            type="text"
            onChange={handleInputChange}
          />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            Value={contact}
            name="contact"
            type="number"
            onChange={handleInputChange}
          />
          <div className="submit-button">
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
