let express = require("express");
let app = express();
let appValues = require("./app.js");
app.set("view engine", "ejs");
app.use(express.static("public"));
const path = require("path");
const dataset1 = path.resolve("data/matches.csv");
const dataset2 = path.resolve("data/deliveries.csv");

appValues.matchesPerYear(dataset1).then(function(data) {
    matchesPerYear = data;
});
app.get("/1", function(req, res) {
    res.render("index1", { matchesPerYear: JSON.stringify(matchesPerYear) });
});

app.listen(3000);