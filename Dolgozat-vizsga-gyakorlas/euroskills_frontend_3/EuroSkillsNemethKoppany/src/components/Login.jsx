import { useState } from "react"
import { UNSAFE_ErrorResponseImpl, useNavigate } from "react-router-dom"


export default function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();


async function  handleSubmit(e) {
    
            e.preventDefault();
    try{
        const resposne = await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email: email,
                password:password
            })
        })

        if(resposne.ok){
            console.log("ok");
        }

        const resData = await resposne.json();
        localStorage.setItem("token",resData.token);
        navigate("/");
    }
    catch(err){
        console.log(err);
    }
}
    return(
      <>
      <div>
        <h2>Bejelentkezés</h2>

        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Jelszó:</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button>Bejelentkezés</button>
        </form>
        </div></>
    )
}