import "../styles/layout/Share.scss";
import Twitter from "./Twitter";
import getData from "../services/fetch.js";

function Share(props) {


  const handleClick = () => {
    props.handleShareCol()
  }

  const handleCreateCard = (ev) => {
    ev.preventDefault();
    props.handleShare();

  };
  return (
    <fieldset className="fieldset-3">
      <legend className="js_title_share fieldset-3__legend" onClick={handleClick}>
        <i className="fa-solid fa-share-nodes"></i>
        <h2 className="fieldset-3__legend--title">comparte</h2>
        <i className="js_arrow_share fa-solid fa-rocket fieldset__2--iconArrow"></i>
      </legend>
      {props.openShare && (
        <>
          <button
            className="js_content_share fieldset-3__button"
            onClick={handleCreateCard}
          >
            <i className="fa-solid fa-address-card"></i>crear tarjeta
          </button>
          <article className="fieldset-4__article js_twitter">
            <h2 className="js_error_msg fieldset-4___article--title">
              La tarjeta ha sido creada:
            </h2>

            <div className="js_div_share">
              <p className="js_paragraph fieldset-4__article--paragraph">
                {props.resultCard.success === true
                  ? props.resultCard.cardURL
                  : props.resultCard.error}
              </p>
            </div>

            <a
              className="js_share_twitter fieldset-4__article--button"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>Compartir en Twitter
            </a>

          </article>
        </>)}

      {/*<Twitter resultCard={props.resultCard} /> */}
    </fieldset>
  );
}

export default Share;
