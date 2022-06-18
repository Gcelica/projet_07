import "./login.css";

export default function Login() {
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
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Mot de passe" className="loginInput" />
            <button className="loginButton">Connexion</button>
            <span className="loginForgot">mot de passe oublié ?</span>
            <button className="loginRegisterButton">
              Créer un nouveau compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
