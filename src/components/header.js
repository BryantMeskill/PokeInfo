import logo from "../img/logo.png";
import ballLogo from "../img/ball.svg";

function Header() {
  return (
    <div className="Header">
      <img src={ballLogo} alt="PokeBall" className="ballLeft" />
      <img src={logo} className="logo" alt="logo" />
      <img src={ballLogo} alt="PokeBall" className="ballRight" />
    </div>
  );
}

export default Header;
