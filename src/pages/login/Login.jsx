import "./login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await AuthService.login(email, password).then(
        () => {
          navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <form onSubmit={handleLogin}>
          <div className="loginLeft">
            <img
              src="/assets/logo/icon-left-font-monochrome-black.png"
              alt="Logo Groupomania"
              className="loginLogo"
            />
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input
                placeholder="Email"
                className="loginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Mot de passe"
                className="loginInput"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginButton" type="submit">
                Connexion
              </button>
              <span className="loginForgot">mot de passe oublié ?</span>
              <nav>
                <Link to="/Signup">
                  <button className="loginRegisterButton">
                    Créer un nouveau compte
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
