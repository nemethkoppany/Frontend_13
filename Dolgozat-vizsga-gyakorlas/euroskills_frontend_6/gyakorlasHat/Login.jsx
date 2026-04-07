import { useState,useEffect } from "react"
import { useNavigate } from "react-router";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const [hiba,setHiba] = useState(null);
    const navigate = useNavigate();


    function login(){
        fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:email,password:password})
        })
        .then((res)=>{
            if(!res.ok)throw new Error(`Hiba: ${res.status}`);
            return res.json()
        })
        .then((data)=>{
            localStorage.setItem("token",data.token);
            navigate("/");
        }
        )
        .catch((err)=>{setHiba(`Hiba: ${err.message}`)})
    }
    return(
        <div>
            <h2>Bejelentkezés</h2>

            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="password">Jelszó: </label>
                <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>

            <button onClick={login}>Bejelentkezés</button>
            

            {hiba && (
                <div>
                    <strong>Hiba történt: </strong>{hiba}
                </div>
            )}
        </div>

        
    )
}