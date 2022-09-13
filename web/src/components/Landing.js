import Logo from "../images/logo-tech.png";
import { Link } from "react-router-dom";
import "../styles/layout/Landing.scss";

function Landing() {
  return (
    <main className="main__landing">
      <figure className="landing__logo">
        <img
          className="landing__logo--img"
          src={Logo}
          alt="logo"
          title="logo"
        />
      </figure>
      <article className="landing__article">
        <h1 className="landing__article--title">Crea tu tarjeta de visita</h1>
        <p className="landing__article--parragraph">
          Para dar voz a las minorías en el mundo tecnológico
        </p>
      </article>
      <section className="landing__section">
        <div className="landing__wrapper">
          <i className="fa-solid fa-vector-square landing__icon"></i>
          <h2 className="landing__section--description">Diseña</h2>
        </div>
        <div className="landing__wrapper">
          <i className="fa-solid fa-keyboard landing__icon"></i>
          <h2 className="landing__section--description">Rellena</h2>
        </div>
        <div className="landing__wrapper">
          <i className="fa-solid fa-share-nodes landing__icon"></i>
          <h2 className="landing__section--description">Comparte</h2>
        </div>
      </section>
      <Link to="/card" className="landing__button">
        Comenzar
      </Link>
    </main>
  );
}

export default Landing;
