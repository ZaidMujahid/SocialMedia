import { useContext } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
    <ToastContainer position="top-center"
        autoClose={3000}
        newestOnTop={false}
        pauseOnHover={false}
        font={20}
      />
    <BrowserRouter>
      <div>
        <div><Navbar /></div>
        <Routes>
          {/* <Route path="/login" element={<Home/>}/> */}
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to='/login' />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to='/' />}
          />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
