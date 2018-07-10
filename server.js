let express = require("express");
let app = express();
let appValues = require("./app.js");
app.set("view engine", "ejs");
app.use(express.static("public"));
const path = require("path");
const dataset1 = path.resolve("data/matches.csv");
const dataset2 = path.resolve("data/deliveries.csv");

appValues.matchesPerYear(dataset1).then(function (data) {
    matchesPerYear = data;
    
});

app.get("/1", function (req, res) {
    res.render("index1", { matchesPerYear: JSON.stringify(matchesPerYear) });
    // console.log(matchesPerYear);
});

appValues.getExtraRunsPerTeam(dataset1, dataset2).then(function (data) {
    getExtraRunsPerTeam = data;
    // console.log(getExtraRunsPerTeam);
});

app.get("/2", function (req, res) {
    res.render("index2", { getExtraRunsPerTeam: JSON.stringify(getExtraRunsPerTeam) });
    // console.log(getExtraRunsPerTeam);
});

appValues.getEconomicRateOfEachBowler().then(function (data) {
    getEconomicRateOfEachBowler = data;
    // console.log(getExtraRunsPerTeam);
});

app.get("/3", function (req, res) {
    res.render("index3", { getEconomicRateOfEachBowler: JSON.stringify(getEconomicRateOfEachBowler) });
    // console.log(getExtraRunsPerTeam);
});

appValues.getScoreOfEachBatsman().then(function (data) {
    getScoreOfEachBatsman = data;
    // console.log(getExtraRunsPerTeam);
});

app.get("/4", function (req, res) {
    res.render("index4", { getScoreOfEachBatsman: JSON.stringify(getScoreOfEachBatsman) });
    // console.log(getExtraRunsPerTeam);
});

appValues.seasonPerTeamWinningVar(dataset1).then(function (data) {
    seasonPerTeamWinningVar = data;
    // console.log(getExtraRunsPerTeam);
});

app.get("/5", function (req, res) {
    res.render("index5", { seasonPerTeamWinningVar: JSON.stringify(seasonPerTeamWinningVar) });
});
app.listen(3000);