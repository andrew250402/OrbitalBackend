import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";
import "../images/background.png";
import logo from "../images/Orbital Poster Full Final.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // Please change this handleSubmit. For now I have made a fake login without the use of authentification. Please change it to the actual code to push(/home) only if the email/pw is in the database. If wrong username or pw, give the error message//
  const handleSubmit = (e) => {
    history.push("/home");
  };

  return (
    <div class="background">
      <div class="alertbox">
        <p class="alert">Error! Wrong email or password!</p>
      </div>

      <div class="logincontainer">
        <div class="logincenter">
          <div class="logo">
            <img src={logo} alt="" />
          </div>
          <h2 class="signin">Sign In</h2>
          <div class="singincontainer">
            <form method="POST" action="/">
              <br />
              <input
                class="email"
                type="email"
                id="email"
                placeholder="Email"
                name="email"
              />
              <br />
              <br />

              <input
                class="password"
                type="password"
                placeholder="Password"
                name="password"
              />
              <br />
              <br />
              <button onClick={handleSubmit} class="btn">
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
