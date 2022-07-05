import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  function handleClick(e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    console.log(email);
    const password = document.getElementById("loginPassword").value;
    console.log(password);
    console.log("Le lien a été cliqué.");

    const data = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "content-Type": "application/json" },
    };
    console.log(data);
    fetch("http://localhost:5500/api/users/login", data)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.userId);
        //document.location.href = "/?id=" + data.userId;
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
            <input placeholder="Email" className="loginInput" id="loginEmail" />
            <input
              placeholder="Mot de passe"
              className="loginInput"
              type="password"
              id="loginPassword"
            />
            <button className="loginButton" onClick={handleClick}>
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
      </div>
    </div>
  );
}

export default Login;
