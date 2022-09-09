const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const { restart } = require("nodemon");
const { v4: uuidv4 } = require("uuid");
const path = require("path"); //viene con NodeJS, es para que las rutas sean robustas

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
  console.log(
    `Server listening at https://promo-q-module-4-team-3.herokuapp.com/`
  );
});

// database

const db = new Database("./src/data/database.db", { verbose: console.log });
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

    //insertar en db
    const query = db.prepare(
      `INSERT INTO card (id, palette, name, job, phone, email, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const results = query.run(
      newCard.id,
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.photo
    );
    if (results !== undefined) {
      //enviar la resp
      const respSuccess = {
        cardURL: `https://promo-q-module-4-team-3.herokuapp.com/card/${newCard.id}`,
        success: true,
      };
      resp.json(respSuccess);
    }
  }
});

//endpoint tipo GET (devolver url de tarjeta)

server.get("/card/:id", (req, resp) => {
  const query = db.prepare(`SELECT * FROM card WHERE id = ?`);
  const cardUrlParams = query.get(req.params.id);

  resp.render("finalCard", cardUrlParams);
});

server.get("/card", (req, res) => {
  res.sendFile(path.join(__dirname, "/public-react/index.html"));
});

//Servidor de ficheros estáticos
const staticServer = "./src/public-react/";
server.use(express.static(staticServer));

const staticCss = "./src/public-css/";
server.use(express.static(staticCss));
