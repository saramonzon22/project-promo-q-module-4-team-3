import "../styles/layout/Preview.scss";
import defaultAvatar from "../images/astronaut2.png";

function CardPreview(props) {
  const handleReset = (ev) => {
    ev.preventDefault();
    props.setDataCard({
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    });
  };

  const avatar = props.dataCard.photo === "" ? defaultAvatar : props.dataCard.photo;

  return (
    <section className="preview">
      <div className="wrapper">
        <button
          className="preview__button js-reset-button"
          onClick={handleReset}
        >
          <i className="fa-regular fa-trash-can"></i>Reset
        </button>

        <article
          className={`card js_cardPreview palette${props.dataCard.palette}`}
        >
          <div className="card__rectangle"></div>
          <div className="card__info">
            <h3 className="card__name js_cardname">
              {props.dataCard.name || `Nombre y Apellidos`}
            </h3>
            <p className="card__job js_cardjob">
              {props.dataCard.job || `Front-end developer`}
            </p>
          </div>
          <div className="card__photo">
            <div className="profile">
              <div
                className="profile__image js__profile-image"
                style={{ backgroundImage: `url(${avatar})` }}
              ></div>
            </div>
            <nav className="card__footer">
              <ul className="socialmedia">
                <li>
                  <a
                    className="js_cardtel"
                    href={`tel:${props.dataCard.phone}`}
                    title="Teléfono"
                  >
                    <i className="socialmedia__icon fa-solid fa-mobile-screen-button"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js_cardemail"
                    href={`mailto:${props.dataCard.email}`}
                    title="Correo"
                    target="_blank"
                  >
                    <i className="socialmedia__icon fa-regular fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js_cardlinkedin"
                    href={props.dataCard.linkedin}
                    title="LinkedIn"
                    target="_blank"
                  >
                    <i className="socialmedia__icon fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="js_cardgithub"
                    href={props.dataCard.github}
                    title="GitHub"
                    target="_blank"
                  >
                    <i className="socialmedia__icon fa-brands fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </article>
      </div>
    </section>
  );
}

export default CardPreview;
