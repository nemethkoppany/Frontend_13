import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [jelszo, setJelszo] = useState("");
  const [hiba, setHiba] = useState(null);
  const navigate = useNavigate();

  function handleBejelentkezes() {
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: jelszo }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Hiba: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => setHiba(err.message));
  }

  return (
    <div className="container my-4">
      <div className="border p-4">
        <h2 className="text-center fw-bold mb-4">Bejelentkezés</h2>

        {hiba && (
          <div className="alert alert-danger">
            <strong>Hiba történt:</strong> {hiba}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">E-mail cím</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Jelszó</label>
          <input
            type="password"
            className="form-control"
            value={jelszo}
            onChange={(e) => setJelszo(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleBejelentkezes}>
          Bejelentkezés
        </button>
      </div>
    </div>
  );
}
