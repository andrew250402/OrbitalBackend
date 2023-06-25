import { useState } from "react";
import "./Login.css";
import "../images/background.png";
import logo from "../images/Orbital Poster Full Final.png";
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, isLoading, error} = useLogin()

  // Please change this handleSubmit. For now I have made a fake login without the use of authentification. Please change it to the actual code to push(/home) only if the email/pw is in the database. If wrong username or pw, give the error message//
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await login(email, password)
  };

  return (
    <div className="background">
      {error && <div className="alertbox">
        <p className="alert">{error}</p>
      </div>}

      <div className="logincontainer">
        <div className="logincenter">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <h2 className="signin">Sign In</h2>
          <div className="singincontainer">
            <form className='login' onSubmit={handleSubmit}>
              <br />
              <input
                className="email"
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                onChange ={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />

              <input
                className="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange ={(e) => setPassword(e.target.value)}
              />
              <br />
              <br />
              <button disabled={isLoading} className="btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
