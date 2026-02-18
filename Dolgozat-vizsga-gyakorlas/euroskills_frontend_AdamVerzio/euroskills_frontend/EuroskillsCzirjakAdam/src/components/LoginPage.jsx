import { Form } from "react-router-dom";
import { useActionData } from "react-router-dom";
export default function Login(){
    const actionData = useActionData();
    console.log(actionData);
    return(
        <>
            <main>
                <section>
                    <h1 className="text-center mt-4">Bejelentkezés</h1>
                    <Form method="POST" className="d-flex justify-content-center align-items-center flex-column gap-5 mt-5 gap-5 ">
                        <div className="d-flex flex-column gap-2 ">
                            <label htmlFor="email">Add meg az e-mail címed!</label>
                            <input type="email" className="form-control px-3" placeholder="a te email címed" name="email" id="email" required/>
                        </div>
                        <div className="d-flex flex-column gap-2 ">
                            <label htmlFor="password">Adj meg egy jelszót!</label>
                            <input type="password" className="form-control px-3" placeholder="a te jelszavad" name="password" id="jelszo" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Belépek!</button>
                    </Form>
                {actionData && actionData.errors ( 
                    <ul className="alert alert-danger">
                        {Object.values(actionData.errors).map((err) => {
                    <li key={err}>{err}</li>;
                    })}
                </ul>
                )}
                {actionData && actionData.message && <p style={{ color: "red" }}>{actionData.message}</p>}
                </section>
            </main>
        </>
    );
};