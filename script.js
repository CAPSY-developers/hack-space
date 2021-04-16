const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "public")));
app.set("views", "views");
app.set("view engine", "ejs");
app.enable("strict routing");

app.use("/login", (req, res, next) => {
    res.render("login", {
        err: ""
    })

})
app.use("/", (req, res, next) => {
    let message = {},
        err
    res.render('index', {
        messages: message,
        err: err,
        auth: "",
        username: "",
        available: ""
    });
})


app.listen(3000, () => {
    console.log("server live");
})