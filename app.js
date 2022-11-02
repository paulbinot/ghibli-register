require('dotenv').config();
const express = require('express');
const films = require('./films.json');

const mainRouter = require('./routers/mainRouter');

const app = express();
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

// journalisation
// app.use((req, res, next) => {
//   console.log(`${clc.magentaBright("[")}${clc.yellow(new Date().toUTCString())} ${clc.bgCyan(req.ip)}${clc.magentaBright("]")} path : ${clc.bold(req.url)}`);
//   next();
// });

app.use((req, res, next) => {
  res.locals.films = films;
  next();
});

app.use(mainRouter);

// 404
app.use((req, res) => {
  res.statusCode = 404;
  res.send("Erreur 404 : page non trouvée");
});

app.listen(process.env.PORT);
