import "../styles/layout/Design.scss";

function Design(props) {
  console.log(props);
  const handleClick = () => {
    props.handleDesingCol();
  };

  const handleChange = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;
    props.handleInput(inputValue, inputName);
  };

  return (
    <fieldset className="fieldset__1">
      <legend
        className="js_title_design fieldset__1--legend"
        onClick={handleClick}
      >
        <i className="fa-solid fa-vector-square fieldset__1--iconSquare"></i>
        <h2 className="fieldset__1--title">Diseña</h2>
        <i className="js_arrow_design fa-solid fa-flag fieldset__1--iconArrow arrow-down"></i>
      </legend>
      {props.openDesign && (
        <>
          <section className="js_content_design range">
            <h3 className="range__title">Colores</h3>
            <div className="range__pantone">
              <div className="pantone1">
                <input
                  className="js_radio pantone1__input"
                  type="radio"
                  value="1"
                  id="palette1"
                  name="palette"
                  onChange={handleChange}
                  checked={props.dataCard.palette === "1"}
                />
                <div className="pantone1__first"></div>
                <div className="pantone1__second"></div>
                <div className="pantone1__third"></div>
              </div>
              <div className="pantone2">
                <input
                  className="js_radio pantone1__input"
                  type="radio"
                  value="2"
                  id="palette2"
                  name="palette"
                  onChange={handleChange}
                  checked={props.dataCard.palette === "2"}
                />
                <div className="pantone2__first"></div>
                <div className="pantone2__second"></div>
                <div className="pantone2__third"></div>
              </div>
              <div className="pantone3">
                <input
                  className="js_radio pantone1__input"
                  type="radio"
                  value="3"
                  id="palette3"
                  name="palette"
                  onChange={handleChange}
                  checked={props.dataCard.palette === "3"}
                />
                <div className="pantone3__first"></div>
                <div className="pantone3__second"></div>
                <div className="pantone3__third"></div>
              </div>
              <div className="pantone4">
                <input
                  className="js_radio pantone1__input"
                  type="radio"
                  value="4"
                  id="palette4"
                  name="palette"
                  onChange={handleChange}
                  checked={props.dataCard.palette === "4"}
                />
                <div className="pantone4__first"></div>
                <div className="pantone4__second"></div>
                <div className="pantone4__third"></div>
              </div>
              <div className="pantone5">
                <input
                  className="js_radio pantone1__input"
                  type="radio"
                  value="5"
                  id="palette5"
                  name="palette"
                  onChange={handleChange}
                  checked={props.dataCard.palette === "5"}
                />
                <div className="pantone5__first"></div>
                <div className="pantone5__second"></div>
                <div className="pantone5__third"></div>
              </div>
            </div>
          </section>
        </>
      )}
    </fieldset>
  );
}

export default Design;
