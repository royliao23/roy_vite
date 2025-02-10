import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { loggedin } from "../state/counter/counterSlice";

// interface LoginProps {
//   onLoginSuccess: (username: string) => void;
// }

const Login: React.FC= () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

//   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/login`,
        { username: username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
    //   onLoginSuccess(username);
    //   dispatch(loggedin(true));
      navigate("/sales");
    } catch (err: any) {
      setError(err.response?.data?.message || "Invalid login credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login_form">
          <label htmlFor="username" className="login_label">
            Username or Email
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            aria-label="Username or Email"
            className="login_box"
            required
          />

          <label htmlFor="password" className="login_label">
            Password
          </label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
              className="login_box"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
              }}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <p style={{ marginTop: "10px" }}>
            <Link to="/forgot-password" style={{ color: "blue", textDecoration: "underline" }}>
              Forgot Password?
            </Link>
          </p>

          <p style={{ margin: "10px 0" }}>
            Not registered yet?{" "}
            <Link to="/signup" style={{ color: "blue", textDecoration: "underline" }}>
              Sign up here
            </Link>
          </p>

          <button type="submit" disabled={isLoading} className="login_button">
            {isLoading ? "Logging in..." : "Log In"}
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;