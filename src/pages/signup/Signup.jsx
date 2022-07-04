import "./signup.css";

import { Link } from "react-router-dom";

function Signup() {
  function handleClick(e) {
    e.preventDefault();

    const userName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    console.log(password);
    console.log("Le lien a été cliqué.");

    const data = {
      method: "POST",
      body: JSON.stringify({ email, password, userName }),
      headers: { "content-Type": "application/json" },
    };
    console.log(data);
    fetch("http://localhost:5500/api/users/signup", data).then((result) => {
      console.log(result);
    });
  }

  return (
    <div className="login">
      <div className="loginWrapper">
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
              id="username"
              type="text"
            />
            <input placeholder="Email" className="loginInput" id="email" />

            <input
              placeholder="Nouveau mot de passe"
              className="loginInput"
              id="password"
            />
            <button className="loginButton" onClick={handleClick}>
              Créer nouveau compte
            </button>
            <nav>
              <Link to="/Login">
                <button className="loginRegisterButton">Se connecter</button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
