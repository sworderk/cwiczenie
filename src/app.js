const express = require("express");
const app = express();

app.get("/test", (_req, res) => {

        res.status(200).send("Dawid Uzarek")

});

module.exports = app;
