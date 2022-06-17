import "./register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Groupomania</h3>
          <span className="loginDescription">
            Groupomania reseau professionel
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Identifiant" className="loginInput" />
            <input placeholder="Email" className="loginInput" />

            <input placeholder="Nouveau mot de passe" className="loginInput" />
            <button className="loginButton">Créer nouveau compte</button>
            <button className="loginRegisterButton">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
