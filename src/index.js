const express = require("express");
const cors = require("cors");
const { restart } = require("nodemon");

const server = express();
server.use(cors());
server.use(express.json());

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost${serverPort}`);
});

//endpoints
//fetch tipo POST (enviar datos usuaria)
server.post("/card", (req, resp) => {
  //req necesita el body

  const respSuccess = {
    cardURL:
      "https://awesome-profile-cards.herokuapp.com/card/1781662374214368",
    success: true,
  };

  const respError = {
    success: false,
    error: "A param is missing",
  };

  resp.json(respError);
});

//fetch tipo GET (devolver url de tarjeta)

server.get("/card/:id", (req, resp) => {
  resp.json({
    url: "https://awesome-profile-cards.herokuapp.com/card/1781662374214368",
  });
});
