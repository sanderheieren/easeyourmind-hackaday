const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const apiKey = "api_key=uvfsJMXzgPemnIz8wI2REdMIQ57SeotMi2rid3dr";
const url = "https://api.nasa.gov/planetary/apod?";

app.get("/api/nasa/:date", (req, res) => {
  const date = req.params.date;
  fetch(`${url}date=${date}&${apiKey}`)
    .then((resp) => resp.json())
    .then((data) => {
      res.send(data);
    });
});

app.get("/api/nasa", (req, res) => {
  fetch(url + apiKey)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      return res.send(data);
    });
});

app.get("/api/quote", (req, res) => {
  fetch("https://type.fit/api/quotes")
    .then((resp) => resp.json())
    .then((data) => {
      res.send(data);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
