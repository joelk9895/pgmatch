import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import AddForm from "./pages/AddForm";
import { AuthProvider } from "./Authcheck"; // Corrected import

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
        <Route path="/add" element={<AddForm />} />
        <Route path="/*" element={<h1>Not Found</h1>} /> {/* Corrected path */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
