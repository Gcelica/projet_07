import "./signup.css";
import React, { useState } from "react";
import AuthService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(email, password, username).then(
        (response) => {
          // verification que le token existe avec une repoonse 200
          console.log("Sign up successfully", response);
          navigate("/Login");
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
        <form onSubmit={handleSignup}>
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
                placeholder="Identifiant"
                className="loginInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="Email"
                className="loginInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                placeholder="Nouveau mot de passe"
                type="password"
                className="loginInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="loginButton" type="submit">
                Créer nouveau compte
              </button>
              <nav>
                <Link to="/Login">
                  <button className="loginRegisterButton">Se connecter</button>
                </Link>
              </nav>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
