import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Jelentkezes({ onLoginSuccess }){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const navigate = useNavigate();

async function handleSubmit(event) {
  event.preventDefault();
  setErr(null);

  try{
    const respose = await fetch("http://localhost:3000/login",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({email, password}),
    })

    if(!respose.ok){
      throw new Error("Hibás email vagy jelszó");
    }

    const data = await respose.json();
    localStorage.setItem("token",data.token)
    onLoginSuccess();
    navigate("/");
  }
  catch(err){
    setErr(err.message);
  }
}

return(
  <div>
      <h1>Bejelentkezés</h1>
      {err && <div style={{ color: "red" }}>{err}</div>}
      <form onSubmit={handleSubmit} className="bejelentkezes-form">
        <p>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          Jelszó:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        <button type="submit">Bejelentkezés</button>
      </form>
    </div>
)


}