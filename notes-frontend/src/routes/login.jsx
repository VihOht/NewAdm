import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../src/services/auth"
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        const response = await login({ username, password });
        localStorage.setItem("token", response.token);
        navigate("/dashboard");
    } catch (error) {
        setError("Invalid username or password");
    }
  };
  
  return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
                <label>Username</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
  );
}