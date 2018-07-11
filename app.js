const fs = require("fs");
const path = require("path");
const dataset = path.resolve("data/matches.csv");
const dataset2 = path.resolve("data/deliveries.csv");


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
            resolve(matchesPerSeason);
        });
    });
};
matchesPerYear(dataset);

//-------------------------------question2--------------------------------------------------


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
            resolve(seasonPerTeamWinning);
        });
    });
};
seasonPerTeamWinningVar(dataset);



//----------------------------question3------------------------------------

//this function is used for question no.3,4,5
function getMatchId(dataset, yearOf) {
    let matchId = [];
    return new Promise(function (resolve, reject) {
        fs.readFile(dataset, function (err, data) {
            if (err)
                reject(err);
            else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");
                        if (match[1] === yearOf) {
                            matchId.push(match[0]);
                        }
                    }
                })
            }
            resolve(matchId);
        })
    })
}

getExtraRunsPerTeam(dataset, dataset2).then(function (result) {
});
// getExtraRunsPerTeam(dataset, dataset2)
function getExtraRunsPerTeam(dataset, dataset2) {
    let extraRuns = {};
    return new Promise(async function (resolve, reject) {
        let idArr = await getMatchId(dataset, '2016');
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

// ---------------------------------question 4----------------------------------------

function getBollsCountAndRunsEachBowler(dataset2, idOf2015) {
    let bowlerBRuns = {};

    return new Promise(function (resolve, reject) {
        fs.readFile(dataset2, function (err, data1) {
            if (err)
                reject(err);
            else {
                data1.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");
                        if (idOf2015.includes(match[0])) {
                            if (bowlerBRuns.hasOwnProperty(match[8])) {
                                // console.log('hello')
                                bowlerBRuns[match[8]]["count"]++;
                                bowlerBRuns[match[8]]["totalRuns"] += Number(match[17]);
                                if(match[10] != 0 || match[13] != 0) {
                                     bowlerBRuns[match[8]]["count"]--;
                                    //  console.log("this")
                                }
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

//to resolve promise function
getEconomicRateOfEachBowler(dataset,dataset2).then(function (result) {
});

async function getEconomicRateOfEachBowler(dataset,dataset2) {
    let idOf2015 = await getMatchId(dataset, "2015");
    // console.log(idOf2015)
    let bowlerBRuns = await getBollsCountAndRunsEachBowler(dataset2, idOf2015)
    return new Promise(function (resolve, reject) {
        for (let key in bowlerBRuns) {
            bowlerBRuns[key] = ((Number(bowlerBRuns[key]["totalRuns"])) / Number(bowlerBRuns[key]["count"]) * 6);
        }
        bowlerBRuns = sortBowlersWrtEconomy(bowlerBRuns);
        // console.log(bowlerBRuns);
        
        resolve(bowlerBRuns);
    });
}

function sortBowlersWrtEconomy(obj) {
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
}


//------------------------- Question no. 5 -------------------------------------
// Most scored bats man of season 2017


getScoreOfEachBatsman(dataset,dataset2).then(function (result) {
});

async function getScoreOfEachBatsman(dataset,dataset2) {
    let batsManRuns = {};
    let idOf2017 = await getMatchId(dataset, '2017');
    return new Promise(function (resolve, reject) {
        fs.readFile(dataset2, function (err, data1) {
            if (err)
                reject(err);
            else {
                data1.toString().split("\n").forEach(function (line, index, arr) {
                    if (index != 0) {
                        let match = line.split(",");
                        if (idOf2017.includes(match[0])) {

                            if (batsManRuns.hasOwnProperty(match[6])) {
                                batsManRuns[match[6]] += Number(match[15]);
                            } else {
                                batsManRuns[match[6]] = Number(match[15]);
                            }
                        }
                    }
                });
            }
            batsManRuns = sortBowlersWrtEconomy(batsManRuns);
            resolve(batsManRuns);
        });
    });
}

module.exports = {
    matchesPerYear: matchesPerYear,
    seasonPerTeamWinningVar: seasonPerTeamWinningVar,
    getMatchId: getMatchId,
    getExtraRunsPerTeam: getExtraRunsPerTeam,
    getBollsCountAndRunsEachBowler: getBollsCountAndRunsEachBowler,
    getEconomicRateOfEachBowler: getEconomicRateOfEachBowler,
    sortBowlersWrtEconomy: sortBowlersWrtEconomy,
    getScoreOfEachBatsman: getScoreOfEachBatsman
}