import { Routes, Route } from "react-router-dom";
import "./App.css";
import AddUser from "./pages/AddUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
