const express = require("express");
const app = express()
const hbs = require('express-handlebars');
const path = require("path");
const db = require("./db");

app.get("/", (req, res) => {
    res.render("pages/index", { author: "Arash Arora" });
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/', partialsDir: __dirname + '/views/partials/' }))

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
