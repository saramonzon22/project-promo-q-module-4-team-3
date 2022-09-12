import logo from "../images/logo-nombre.png";
import '../styles/layout/Header.scss';

function Header() {
    return (<header className="header">
        <figure className="header__figure">
            <img
                src={logo}
                alt="logo-awesome-profile-cards"
                className="header__figure--logo"
            />
        </figure>
    </header>)
};

export default Header;