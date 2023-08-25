import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../images/login.jpeg";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [regnoValue, setRegnoValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleLogin = async (regno, password) => {
    try {
      const response = await axios.post("http://localhost:3000/student-login", {
        regno,
        password,
      });

      if (response.data.message === "student logged in successfully") {
        setIsLoggedIn(true);
        localStorage.setItem("token", regno);
        navigate("/home");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Error response:", error.response);
      console.error("An error occurred:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex w-full h-screen justify-center items-center opacity-100 "
    >
      <div className="w-[340px] flex flex-col h-[400px] bg-[#cbb89c] justify-center items-center border-2 border-gray-600 rounded shadow-lg shadow-gray-600">
        <p className="flex text-center text-xl">Login</p>
        <div className="w-full flex flex-col items-center mt-4 px-4">
          <label>Register Number</label>
          <input
            style={{ textAlign: "center" }}
            type="number"
            value={regnoValue}
            onChange={(e) => setRegnoValue(e.target.value)}
            placeholder="register number"
            className="border border-blue-950 rounded h-10 md:w-[250px] w-full mt-4"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-2 px-4">
          <label>Password</label>
          <input
            style={{ textAlign: "center" }}
            type="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="password"
            className="border border-blue-950 rounded h-10 md:w-[250px] w-full mt-4"
          />
        </div>
        <div className="w-full flex flex-col items-center mt-2 px-4">
          <button
            onClick={() => handleLogin(regnoValue, passwordValue)}
            className="text-white cursor-pointer mt-4 rounded py-2 px-2 bg-gray-800 hover:bg-gray-600 md:w-[100px] w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
