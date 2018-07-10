const fs = require("fs");
const path = require("path");

const dataset = path.resolve("data/matches.csv");
const dataset2 = path.resolve("data/deliveries.csv");
// console.log(dataset);
let matchesPerYear = function (dataset) {
    return new Promise(function (resolve, reject) {
        let matchesPerSeason = {};
        fs.readFile(dataset, function (err, data) {
            if (err) {
                reject(err);
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index !== 0) {
                        const match = line.split(",");
                        const season = match[1];
                        if (season) {

                            if (matchesPerSeason.hasOwnProperty(season)) {
                                matchesPerSeason[season]++;
                            } else {
                                matchesPerSeason[season] = 1;
                            }
                        }
                    }
                });
            }
            // console.log(matchesPerSeason);
            resolve(matchesPerSeason);
        });
    });
};
matchesPerYear(dataset);

let seasonPerTeamWinningVar = function (dataset) {
    return new Promise(function (resolve, reject) {
        let seasonPerTeamWinning = {};
        fs.readFile(dataset, function (err, data) {
            if (err) {
                reject(err);
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {

                    if (index !== 0) {
                        const match = line.split(",");
                        const season = match[1];
                        const team = match[10];
                        if (!(seasonPerTeamWinning[season])) {
                            let arr = [];
                            let obj = {};
                            obj[team] = 1;
                            arr.push(obj);
                            seasonPerTeamWinning[season] = arr;

                        } else {
                            if (!(seasonPerTeamWinning[season][0][team])) {
                                seasonPerTeamWinning[season][0][team] = 1;

                            } else {
                                seasonPerTeamWinning[season][0][team]++;
                            }
                        }
                    }
                });
            }
            // console.log(seasonPerTeamWinning);
            resolve(seasonPerTeamWinning);
        });
    });
};
seasonPerTeamWinningVar(dataset);





function getMatchId(dataset, yearOf) {
    let matchId = [];
    return new Promise(function (resolve, reject) {
        // console.log(matchId2016);
        let count = 0;
        fs.readFile(dataset, function (err, data) {
            if (err)
                reject(err);
            else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");
                        // console.log(matchId2016 + "EEs" + match[1])
                        if (match[1] === yearOf) {
                            matchId.push(match[0]);
                        }
                    }
                })
            }
            // console.log(matchId);

            resolve(matchId);
        })
    })
}
// getMatchId(dataset,"2016")
getMatchId(dataset, "2016").then(function (data) {
    getExtraRunsPerTeam(dataset2, data);
});
let extraRuns = {};
function getExtraRunsPerTeam(dataset2, idArr) {

    //  console.log(ID);
    return new Promise(function (resolve, reject) {
        // console.log(matchId2016);
        // let count = 0;
        fs.readFile(dataset2, function (err, data1) {
            if (err)
                reject(err);
            else {
                data1.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");
                        if (idArr.includes(match[0])) {
                            if (extraRuns.hasOwnProperty(match[3])) {
                                extraRuns[match[3]] += Number(match[16]);
                            } else {
                                extraRuns[match[3]] = Number(match[16]);
                            }
                        }
                    }
                });
            }
            // console.log(extraRuns);
            resolve(extraRuns);
        });
    });
}

function getBollsCountAndRunsEachBowler(dataset2, idOf2015) {
    let bowlerBRuns = {};
    //  console.log(ID);
    return new Promise(function (resolve, reject) {
        // console.log(matchId2016);
        // let count = 0;
        fs.readFile(dataset2, function (err, data1) {
            if (err)
                reject(err);
            else {
                data1.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");

                        if (idOf2015.includes(match[0])) {
                            if (bowlerBRuns.hasOwnProperty(match[8])) {
                                bowlerBRuns[match[8]]["count"]++;
                                bowlerBRuns[match[8]]["totalRuns"] += Number(match[17]);
                            } else {

                                bowlerBRuns[match[8]] = { "count": 1, "totalRuns": Number(match[17]) };
                            }
                        }
                    }
                });
            }
            // console.log(bowlerBRuns);
            resolve(bowlerBRuns);
        });
    });
}
// let arr= ['577','578'];
// let dataset3 = path.resolve("data/Testdeliveries.csv");
// let dataset4 = path.resolve("data/Testmatches.csv");
topEconomicBowler(dataset, dataset2);
function topEconomicBowler(dataset, dataset2) {
    return new Promise(function (resolve, reject) {
        getMatchId(dataset, "2015").then(function (data6) {
            getBollsCountAndRunsEachBowler(dataset2, data6).then(function (data7) {
                getEconomicRateOfEachBowler(data7);
            });
        });
    });
}
// bowlerBRuns = { 'HH Pandya':  { count: 12, totalRuns: 36 } ,
//   'AD Russell':  { count: 12, totalRuns: 28 }  };
//   getEconomicRateOfEachBowler(bowlerBRuns);
function getEconomicRateOfEachBowler(bowlerBRuns) {
    //  console.log(ID);
    return new Promise(function (resolve, reject) {
        // console.log(matchId2016);
        // let count = 0;
        for (let key in bowlerBRuns) {
            // console.log(Number( bowlerBRuns[key]["totalRuns"]));
            bowlerBRuns[key] = ((Number(bowlerBRuns[key]["totalRuns"])) / Number(bowlerBRuns[key]["count"]) * 6);
        }
        //    console.log(bowlerBRuns);
        bowlerBRuns = sortBowlersWrtEconomy(bowlerBRuns);
        // console.log(bowlerBRuns);

        resolve(bowlerBRuns);
    });
}

function sortBowlersWrtEconomy(obj) {
    // return new Promise(function (resolve, reject) {
    var arr1 = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            arr1.push({
                'key': prop,
                'value': obj[prop]
            });
        }
    }
    arr1.sort(function (a, b) { return a.value - b.value; });
    return arr1; // returns array
    // resolve(arr1);
    // });
}






module.exports = {
    matchesPerYear: matchesPerYear,
    seasonPerTeamWinningVar: seasonPerTeamWinningVar,
    getMatchId: getMatchId,
    getExtraRunsPerTeam: getExtraRunsPerTeam,
    getBollsCountAndRunsEachBowler: getBollsCountAndRunsEachBowler,
    getEconomicRateOfEachBowler: getEconomicRateOfEachBowler,
    sortBowlersWrtEconomy: sortBowlersWrtEconomy,
    topEconomicBowler, topEconomicBowler
    // extraRunsScored: extraRunsScored
}