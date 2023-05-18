import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import { AuthProvider } from "./Authcheck";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Login />} />
        <Route
          path="/feed"
          element={
            <AuthProvider>
              <Feed />
            </AuthProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
