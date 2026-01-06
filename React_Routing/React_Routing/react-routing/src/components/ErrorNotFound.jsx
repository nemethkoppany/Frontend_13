import { Link, useNavigate } from "react-router-dom"

export default function ErrorNotFound(){
    const navigate = useNavigate();

    function goHome(){
        navigate("/");
    }

    return(
        <div>
            <h1 style={{color: "red"}}>404 Not found</h1>
            
                <Link to="/">
                
                <h2>Back to Home page</h2>
            </Link>
            <button onClick={goHome}>Go home</button>
        </div>
    )
}