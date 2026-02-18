import { redirect } from "react-router-dom";

export default async function loginAction({request}){
    const formData = await request.formData();

    const loginObj = {
        email: formData.get("email"),
        password: formData.get("password")
    };
  try{
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers:{
                'Content-Type': "application/json"
            },
            body: JSON.stringify(loginObj)
        });

        const respData = await response.json();

        if(!response.ok){
            throw new Error("Hiba a bejelentkezés közben!")
        }

        localStorage.setItem("token", respData.token);
       return redirect("/");
  }
  catch(error){
    console.log(error);
    throw new Error("Hiba a bejelentkezés során!")
  }
    
}