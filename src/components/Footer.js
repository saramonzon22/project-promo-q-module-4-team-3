import adalab from "../images/logo-adalab.png";
import '../styles/layout/Footer.scss';

function Footer() {
    return (<footer className="footer">
        <p className="footer__copyright">Commit Land Cards ©2022</p>
        <figure className="footer__logo">
            <img
                className="footer__image"
                src={adalab}
                alt="Logo de Adalab"
                title="Adalab"
                width="100%"
            />
        </figure>
    </footer >)
};

export default Footer;