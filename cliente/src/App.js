import "./App.css";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Mynav from "./components/Navbar/Navbar";
import MyFooter from "../src/components/Footer/Footer";
import Home from "../src/pages/Home";
import Matchdata from "../src/pages/Matchdata";
import List from "../src/pages/Lista";
import Edit from "../src/pages/Edit";
import Create from "../src/pages/Create";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";

const App = () => {
  const { isAuthenticated } = useAuth0();

  isAuthenticated ? (
    <>
      <Logout />
    </>
  ) : (
    <Login />
  );

  return (
    <BrowserRouter>
      <Mynav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Matchdata" element={<Matchdata />} />
        <Route path="List" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
};
export default App;
