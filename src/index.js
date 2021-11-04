const express = require("express")
const app = express()
const eta = require("eta")

app.engine("eta", eta.renderFile)

app.set("view engine", "eta")

app.set("views", "./views")

app.get("/", function (req, res) {
    res.render("template", {
        favorite: "Eta",
        name: "Ben",
        reasons: ["fast", "lightweight", "simple"]
    })
})

app.get("/about", function (req, res) {
    res.render("about", {
        favorite: "Eta",
        name: "Juss",
        reasons: ["fast", "lightweight", "simple"]
    })
})

app.listen(8000, function () {
    console.log("listening to requests on port 8000")
})