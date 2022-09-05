import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import getData from "../services/fetch";
//Componentes
import GetAvatar from "./GetAvatar";
import Header from "./Header";
import CardPreview from "./CardPreview";
import Footer from "./Footer";
import Card from "./Card";
import Landing from "./Landing";

//LS
import localStorage from "../services/localStorage";

function App() {
  const [dataCard, setDataCard] = useState(
    localStorage.get("userData", {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",
    })
  );

  const [resultCard, setResultCard] = useState({});
  const [openDesign, setOpenDesign] = useState(true);
  const [openFill, setOpenFill] = useState(false);
  const [openShare, setOpenShare] = useState(false);

  //Avatar
  const updateAvatar = (avatar) => {
    console.log(avatar);
    setDataCard({ ...dataCard, photo: avatar });
  };
  //Manejadoras

  const handleInput = (inputValue, inputName) => {
    setDataCard({ ...dataCard, [inputName]: inputValue });
  };


  // collapsable
  const handleDesingCol = () => {
    setOpenDesign(!openDesign)
    setOpenFill(false)
    setOpenShare(false)
  };
  const handleFillCol = () => {
    setOpenDesign(false)
    setOpenFill(!openFill)
    setOpenShare(false)
  };
  const handleShareCol = () => {
    setOpenDesign(false)
    setOpenFill(false)
    setOpenShare(!openShare)
  };


  // localStorage
  useEffect(() => {
    localStorage.set("userData", dataCard);
  }, [dataCard]);

  //fetch
  /*useEffect(() => {
    getData().then((dataFromApi) => {
      setResultCard(dataFromApi);
    });
  }, []);*/

  const handleShare = (dataFromApi) => {
    getData(dataCard).then((dataFromApi) => {
      setResultCard(dataFromApi);
    })
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Landing />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/card"
          element={
            <>
              <Header />

              <Card
                updateAvatar={updateAvatar}
                dataCard={dataCard}
                handleCreateCard={setResultCard}
                handleInput={handleInput}
                resultCard={resultCard}
                setDataCard={setDataCard}
                handleShare={handleShare}
                openDesign={openDesign} setOpenDesign={setOpenDesign}
                openFill={openFill} setOpenFill={setOpenFill}
                openShare={openShare} setOpenShare={setOpenShare}
                handleDesingCol={handleDesingCol}
                handleFillCol={handleFillCol}
                handleShareCol={handleShareCol}
              />

              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
