import { useState } from "react";
import { toast } from "react-toastify";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all fields");
    return;
  }

  localStorage.setItem("isLoggedIn", true);

  toast.success("Login Successful");
};

  return (
    <div className="page">

      <h1>Login</h1>

      <form className="form" onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>

      </form>

    </div>
  );
}

export default Login;