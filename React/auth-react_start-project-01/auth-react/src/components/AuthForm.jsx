
import { Form, Link, useSearchParams, useActionData } from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const data = useActionData();


  const [searhParams, setSearchParams] = useSearchParams();
  const isLogin = searhParams.get("mode") == "login";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul style={{color:"red"}}>
            { Object.values(data.errors).map(err => {
              <li key={err}>{err}</li>
            })}
          </ul>
        )
        }
        {data && data.message &&(
          <p style={{color:"red"}}>{data.message}</p>
        )
        }
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? 'signup' : "login"}`}>
          {isLogin ? 'Create new user' : 'Login'}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
