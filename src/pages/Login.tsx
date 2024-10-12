import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";

const Login = () => {
  const [username, setUsername] = useState("karn.yong@melivecode.com");
  const [password, setPassword] = useState("melivecode");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await dispatch(login({ username, password }));
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-white p-8 rounded shadow-md w-80"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input
          className="border p-2 w-full mb-4"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white w-full py-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
