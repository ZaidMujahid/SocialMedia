import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
        <div>
          <div><Navbar /></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile/:username" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
