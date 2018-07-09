const fs = require("fs");
const path = require("path");

const dataset = path.resolve("data/matches.csv");
const dataset2 = path.resolve("data/Testdeliveries.csv");
// console.log(dataset);
let matchesPerSeasonVar = function (dataset) {
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
}
matchesPerSeasonVar(dataset);

let seasonPerTeamWinningVar = function (dataset) {
    return new Promise(function (resolve, reject) {
        let seasonPerTeamWinning = {};
        let flag = true;
        fs.readFile(dataset, function (err, data) {
            if (err) {
                reject(err);
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {

                    if (index !== 0) {
                        const match = line.split(",");
                        const season = match[1];
                        const team = match[10];
                        if (seasonPerTeamWinning[season] === undefined) {
                            let arr = [];
                            let obj = {};
                            obj[team] = 1;
                            arr.push(obj);
                            seasonPerTeamWinning[season] = arr;

                        } else {
                            if (seasonPerTeamWinning[season][0][team] === undefined) {
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
        })
    })
}
seasonPerTeamWinningVar(dataset);




// function extraRunsScored(dataset, dataset2) {
//     let extraRunsResult = {};
//     return new Promise(function (resolve, reject) {
//         let matchId2016 = [];
//         // console.log(matchId2016);
//         let count = 0;
//         fs.readFile(dataset, function (err1, data1) {
//             if (err1)
//                 reject(err1);
//             else {
//                 data1.toString().split("\n").forEach(function (line1, index1, arr1) {
//                     if (index1 != 0) {
//                         let match = line1.split(",");
//                         // console.log(matchId2016 + "EEs" + match[1])
//                         if (match[1] === '2016') {
//                             matchId2016.push(match[0])
//                             fs.readFile(dataset2, function (err2, data2) {
//                                 if (err2)
//                                     reject(err2);
//                                 else {
//                                     data2.toString().split("\n").forEach(function (line2, index2, arr2) {
//                                         if (index2 != 0) {
//                                             let match = line2.split(",");
//                                             const id = match[0];
//                                             // console.log(match[0])
//                                             const teamName = match[3];
//                                             const runs = match[16];
//                                             if (runs && teamName && id && matchId2016.includes(id)) {
//                                                 console.log(matchId2016);
//                                                 if (extraRunsResult.hasOwnProperty(teamName)) {
//                                                     extraRunsResult[teamName] += runs;

//                                                 }
//                                                 else {
//                                                     extraRunsResult[teamName] = runs;
//                                                 }
//                                             }
//                                         }
//                                     })
//                                 }


//                             })
//                         }
//                     }


//                 })
//             }
//             // matchId2016 = [1,2]
//             // console.log(extraRunsResult);
//             resolve(extraRunsResult);
//         })
//     })
// }

// extraRunsScored(dataset, dataset2)


module.exports = {
    matchesPerSeasonVar: matchesPerSeasonVar,
    seasonPerTeamWinningVar: seasonPerTeamWinningVar
    // extraRunsScored: extraRunsScored
}