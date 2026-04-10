import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hiba, setHiba] = useState(null);
  const navigate = useNavigate();

  function login() {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.message);
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        setHiba(err.message);
      });
  }

  return (
    <div>
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="password">Jelszó: </label>
      <input
        type="password"
        value={password}
        onChange={(p) => {
          setPassword(p.target.value);
        }}
      />

      <button className="btn btn-success" onClick={login}>
        Bejelentkezés
      </button>
    </div>
  );
}
