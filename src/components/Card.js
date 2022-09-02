import CardPreview from "./CardPreview";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import Twitter from "./Twitter";

function Card(props) {
  /*const handleCreateCard = (ev) => {
    ev.preventDefault();
    props.getData(props.dataCard).then((info) => {
      props.setResultCard(info);
      console.log(info);
    });
  };*/

  /*const handleInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    const inputName = ev.currentTarget.name;
    props.handleInput(inputName, inputValue);
  };*/

  return (
    <main className="main">
      <CardPreview setDataCard={props.setDataCard} dataCard={props.dataCard} />
      <form className="form js_all_inputs" action="">
        <Design handleInput={props.handleInput} dataCard={props.dataCard} openDesign={props.openDesign} setOpenDesign={props.setOpenDesign} handleDesingCol={props.handleDesingCol} />
        <Fill
          dataCard={props.dataCard}
          updateAvatar={props.updateAvatar}
          handleInput={props.handleInput}
          openFill={props.openFill} setOpenFill={props.setOpenFill}
          handleFillCol={props.handleFillCol}
        />
        <Share resultCard={props.resultCard} handleShare={props.handleShare} openShare={props.openShare} setOpenShare={props.setOpenShare}
          handleShareCol={props.handleShareCol} />
      </form>
    </main>
  );
}

export default Card;
