import "../styles/layout/Fill.scss";
import GetAvatar from "./GetAvatar";
import Profile from "./Profile";

function Fill(props) {

  /* const toggle = () => {
    props.setOpenFill(!props.openFill);
    props.collapsable();
  } */
  const handleClick = () => {
    props.handleFillCol()
  }
  const handleChange = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handleInput(inputValue, inputName);
  };

  return (
    <fieldset className="fieldset__2">
      <legend className="js_title_fill fieldset__2--legend" onClick={handleClick}>
        <i className="fa-solid fa-keyboard fieldset__2--iconKeyboard"></i>
        <h2 className="fieldset__2--title">Rellena</h2>
        <i className="js_arrow_fill fa-solid fa-rocket fieldset__2--iconArrow"></i>
      </legend>
      {props.openFill && (
        <>
          <div className="js_content_fill fieldset__2--div">
            <label className="label" htmlFor="firstAndSecondName">
              Nombre completo
            </label>
            <input
              placeholder="Ej: Sally Jill"
              type="text"
              name="name"
              id="name"
              className="fieldset__2--input js_name"
              value={props.dataCard.name}
              onChange={handleChange}
            />
            <label className="label" htmlFor="work">
              Puesto
            </label>
            <input
              placeholder="Ej: Front-end unicorns"
              type="text"
              name="job"
              id="job"
              className="fieldset__2--input js_job"
              value={props.dataCard.job}
              onChange={handleChange}
            />
            {/*Imagen*/}
            <GetAvatar
              updateAvatar={props.updateAvatar}
              avatar={props.dataCard.photo}
            />
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Ej: sallyhill@gmail.com"
              type="email"
              name="email"
              id="email"
              className="fieldset__2--input js_email"
              value={props.dataCard.email}
              onChange={handleChange}
            />
            <label className="label" htmlFor="tel">
              Teléfono
            </label>
            <input
              placeholder="Ej. 555-55-55-55"
              type="tel"
              name="phone"
              id="phone"
              className="fieldset__2--input js_tlf"
              value={props.dataCard.phone}
              onChange={handleChange}
            />
            <label className="label" htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              placeholder="Ej: https://linkedin.com/sally.hill"
              type="url"
              name="linkedin"
              id="linkedin"
              className="fieldset__2--input js_linkedin"
              value={props.dataCard.linkedin}
              onChange={handleChange}
            />
            <label className="label" htmlFor="github">
              Github
            </label>
            <input
              placeholder="Ej: https://github.com/sally-hill"
              type="url"
              name="github"
              id="github"
              className="fieldset__2--input js_github"
              value={props.dataCard.github}
              onChange={handleChange}
            />
          </div>
        </>)}
    </fieldset>
  );
}

export default Fill;
