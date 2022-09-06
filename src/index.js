const express = require("express");
const cors = require("cors");
const { restart } = require("nodemon");
const { v4: uuidv4 } = require('uuid');
const saveCard = [];

const server = express();
server.use(cors());
server.use(express.json({
  limit: "10mb"
}));

const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost${serverPort}`);
});

//endpoints
//fetch tipo POST (enviar datos usuaria)
server.post("/card", (req, resp) => {
  if (req.body.palette === "" || req.body.name === "" || req.body.job === "" || req.body.phone === "" || req.body.email === "" || req.body.linkedin === "" || req.body.github === "" || req.body.photo === ""){
    const responseError = {
      success: false,
      error: "Es necesario rellenar todos los campos"
    }
    resp.json(responseError);
  } else {
    const newCard = {
      id: uuidv4(),
      ...req.body
    }
    saveCard.push(newCard);

    //enviar la respuesta
    const respSuccess = {
      cardURL:
        `http://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    resp.json(respSuccess);
  }
  
});

//fetch tipo GET (devolver url de tarjeta)

server.get("/card/:id", (req, resp) => {
  const tarjetaEncontrada = saveCard.find( (oneCard) => oneCard.id === req.params.id);

  
  resp.send(`
  <html>
    <head></head>
    <body>
    Datos de la tarjeta con el id: ${req.params.id}
      <section class="preview"><div class="wrapper"><button class="preview__button js-reset-button"><i class="fa-regular fa-trash-can"></i>Reset</button><article class="card js_cardPreview palette1"><div class="card__rectangle"></div><div class="card__info"><h3 class="card__name js_cardname">${tarjetaEncontrada.name}</h3><p class="card__job js_cardjob">dsfsdfsd</p></div><div class="card__photo"><div class="profile"><div class="profile__image js__profile-image" style="background-image: url(base64:IMAGEN);"></div></div><nav class="card__footer"><ul class="socialmedia"><li><a class="js_cardtel" href="tel:555555" title="Teléfono"><i class="socialmedia__icon fa-solid fa-mobile-screen-button"></i></a></li><li><a class="js_cardemail" href="mailto:aacchhss@hotmail.com" title="Correo" target="_blank"><i class="socialmedia__icon fa-regular fa-envelope"></i></a></li><li><a class="js_cardlinkedin" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Ffeed%2F&amp;trk=login_reg_redirect" title="LinkedIn" target="_blank"><i class="socialmedia__icon fa-brands fa-linkedin-in"></i></a></li><li><a class="js_cardgithub" href="https://github.com/Adalab/project-promo-q-module-2-team-5/projects/1" title="GitHub" target="_blank"><i class="socialmedia__icon fa-brands fa-github-alt"></i></a></li></ul></nav></div></article></div></section>
    </body>
  </html>`);
  /*resp.json({
   url: `http://localhost:4000/card/${newCard.id}`,
  });*/
});

//Servidor de ficheros estáticos
const staticServer = './src/public-react/';
server.use(express.static(staticServer));
