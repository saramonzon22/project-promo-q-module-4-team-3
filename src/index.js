const express = require("express");
const cors = require("cors");
const Database = require('better-sqlite3');
const { restart } = require("nodemon");
const { v4: uuidv4 } = require("uuid");
const saveCard = [];

const server = express();
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

server.set("view engine", "ejs");

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost${serverPort}`);
});

// database

const db = new Database('./src/data/database.db', { verbose: console.log, });
//endpoints
//fetch tipo POST (enviar datos usuaria)
server.post("/card", (req, resp) => {
  if (
    req.body.palette === "" ||
    req.body.name === "" ||
    req.body.job === "" ||
    req.body.phone === "" ||
    req.body.email === "" ||
    req.body.linkedin === "" ||
    req.body.github === "" ||
    req.body.photo === ""
  ) {
    const responseError = {
      success: false,
      error: "Es necesario rellenar todos los campos",
    };
    resp.json(responseError);
  } else {
    const newCard = {
      id: uuidv4(),
      ...req.body,
    };
    saveCard.push(newCard);

    //enviar la respuesta
    const respSuccess = {
      cardURL: `http://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    resp.json(respSuccess);
  }
});

//fetch tipo GET (devolver url de tarjeta)

server.get("/card/:id", (req, resp) => {
  const idParams = req.query.id;
  console.log(req.query.id);
  const query = db.prepare(`SELECT * FROM card WHERE id = ?`);
  const cardQuery = query.get(idParams);
  console.log(cardQuery);
  /* const tarjetaEncontrada = saveCard.find(
    (oneCard) => oneCard.id === req.params.id
  );
  console.log(saveCard);
  console.log(tarjetaEncontrada); */

  resp.render("finalCard", cardQuery);
});

//Servidor de ficheros estáticos
const staticServer = "./src/public-react/";
server.use(express.static(staticServer));

const staticCss = './src/public-css/';
server.use(express.static(staticCss));
