import "./signup.css";

import { Link } from "react-router-dom";

function Signup() {
  function handleClick(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    console.log(username);
    const email = document.getElementById("email").value;
    console.log(email);
    const password = document.getElementById("password").value;
    console.log(password);
    console.log("Le lien a été cliqué.");

    const data = {
      method: "POST",
      body: JSON.stringify({ email, password, username }),
      headers: { "content-Type": "application/json" },
    };
    console.log(data);

    fetch("http://localhost:5500/api/users/signup", data)
      .then((response) => response.json())
      .then((test) => {
        console.log(test);
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
            />
            <input placeholder="Email" className="loginInput" id="email" />

            <input
              placeholder="Nouveau mot de passe"
              type="password"
              className="loginInput"
              id="password"
            />
            <button className="loginButton" type="submit" onClick={handleClick}>
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
