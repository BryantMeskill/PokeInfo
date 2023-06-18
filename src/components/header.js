import logo from "../img/logo.png";
import ballLogo from "../img/ball.svg";

function Header() {
  return (
    <div class="HeaderContainer">
      <div className="Header">
        <img src={ballLogo} alt="PokeBall" className="ballLeft" />
        <img src={logo} className="logo" alt="logo" />
        <img src={ballLogo} alt="PokeBall" className="ballRight" />
      </div>
      <div class="Subheader">
        <i>Search your favorite Pokemon and see their base stats!</i>
      </div>
    </div>
  );
}

export default Header;
