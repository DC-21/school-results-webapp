import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Landing from "./pages/Landing";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
      <div>
      {isLoggedIn && <Sidebar />}
        <Routes>
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/home" element={<Landing />} />
        </Routes>
      </div>
    </Router>
    </>
  );
};

export default App;
