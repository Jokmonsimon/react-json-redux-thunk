import "./Home.css";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/action";
import { useNavigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector((state) => state.usersData);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete the user?")) {
      dispatch(deleteUser(id));
    }
  };
  return (
    <div className="home">
      <div className="home-row">
        <div className="add-user-button">
          <Button variant="contained" onClick={() => navigate("/addUser")}>
            Add User
          </Button>
        </div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Address</TableCell>
                  <TableCell align="center">Contact</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((user) => (
                    <TableRow
                      key={user.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {user.name}
                      </TableCell>
                      <TableCell align="left">{user.email}</TableCell>
                      <TableCell align="left">{user.address}</TableCell>
                      <TableCell align="center">{user.contact}</TableCell>
                      <TableCell align="center">
                        <ButtonGroup
                          variant="contained"
                          aria-label="outlined primary button group"
                        >
                          <Button
                            style={{ marginRight: 5 }}
                            color="secondary"
                            onClick={() => handleDelete(user.id)}
                          >
                            Delete
                          </Button>
                          <Button>Edit</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
