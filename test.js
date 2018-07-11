const expect = require("chai").expect;
const path = require("path");
const app = require("./app")
let dataset4 = path.resolve("data/Testmatches.csv");
let dataset = path.resolve("data/Testmatches1.csv");
let dataset2q = path.resolve("data/Testmatches2.csv");
let dataset3q = path.resolve("data/Testmatches3.csv");
const fileName = path.resolve("app.js");
let dataset2 = path.resolve("data/Testdeliveries.csv");
let dataset5 = path.resolve("data/Testdeliveries5q.csv");
const operations = require(fileName);

describe("testing first question", function () {
  // it("return false", function (done) {
  //   operations.matchesPerYear(dataset).then(function (data) {
  //     try {
  //       expect(data).to.deep.equal(false)
  //       done(); 
  //     } catch (e) {
  //       done(e); 
  //     }
  //   });
  // });
  it("should return total number of matches played per year", function (done) {
    const expectedResult = {
      2009: 2,
      2017: 1,
      2008: 1
    };
    operations.matchesPerYear(dataset).then(function (data) {
      try {
        expect(data).to.deep.equal(expectedResult);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
  it("it should return result object even when any one null or undefined present in data", function (done) {
    const expectedResult = {
      2009: 2,
      2017: 1,
      2008: 1
    };

    operations.matchesPerYear(dataset).then(function (data) {
      try {
        expect(data).to.deep.equal(expectedResult);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
  it("when no data is present in csv file", function (done) {
    const expectedResult = {
    }
    let datasettemp = path.resolve("data/empty.csv");
    operations.matchesPerYear(datasettemp).then(function (data) {
      try {
        expect(data).to.deep.equal(expectedResult);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
});

describe("testing second question", function () {
  it("IT should return empty object", function (done) {
    let datasetem = path.resolve("data/empty.csv");
    operations.seasonPerTeamWinningVar(datasetem).then(function (data) {
      try {
        let expectresult1 = {};
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });

  it("return each year with single match pair", function (done) {
    operations.seasonPerTeamWinningVar(dataset2q).then(function (data) {
      try {
        let expectresult = {
          "2008": [{ "Chennai Super Kings": 1 }],
          "2009": [{ "Royal Challengers Bangalore": 2}],
          "2017": [{ "Sunrisers Hyderabad": 1 }]
        };
        expect(data).deep.equal(expectresult);
        done(); 
      } catch (e) {
        done(e);
      }
    });
  });
});

describe("testing third question", function () {

  it("Get all the Id Of matched played in 2016", function (done) {
    operations.getMatchId(dataset3q, '2016').then(function (data) {
      try {
        let expectresult1 = ["577", "578", "579", "580"];
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
  it("getExtraRunsPerTeam function : extraruns of each team played in 2016", function (done) {
    // let input1 = ["577", "578"];
    dataset3qD=path.resolve("data/Testdeliveries3q.csv")
    operations.getExtraRunsPerTeam(dataset3q,dataset3qD).then(function (data) {
      try {
        let expectresult1 = { "Kolkata Knight Riders": 2, "Mumbai Indians": 3 };
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
});


describe("testing forth question", function () {

  it("checking whether function returns value or not", function (done) {
    operations.getBollsCountAndRunsEachBowler(dataset2, ["577"]).then(function (data) {
      try {
        let expectresult1 = {
          "HH Pandya": {
            "count": 6,
            "totalRuns": 36
          }
        };
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });

  it("get Count of balls and Total runs per player", function (done) {
    let arr = ['577', '578'];
    operations.getBollsCountAndRunsEachBowler(dataset2, arr).then(function (data) {
      try {
        let expectresult1 = {
          'HH Pandya': { count: 6, totalRuns: 36 },
          'AD Russell': { count: 7, totalRuns: 28 }
        };
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
  it("get Economic rate of each player", function (done) {
    // let arr = {
    //   'HH Pandya': { count: 12, totalRuns: 36 },
    //   'AD Russell': { count: 12, totalRuns: 28 }
    // };
    operations.getEconomicRateOfEachBowler(dataset4,dataset2).then(function (data) {
      try {
        let expectresult1 =[{
          "key": "AD Russell",
          "value": 24
        },
      {
        "key": "HH Pandya",
        "value": 36
      }];
        expect(data).to.deep.equal(expectresult1);
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
  it("sort bowler Object based on economy", function () {
    let obj = { 'HH Pandya': 18, 'AD Russell': 14 };
    // operations.sortBowlersWrtEconomy(obj).then(function (data) {
    //   try {
    //     let expectresult1 = [{ key: 'AD Russell', value: 14 },
    //     { key: 'HH Pandya', value: 18 }];
    //     expect(data).to.deep.equal(expectresult1);
    //     done(); 
    //   } catch (e) {
    //     done(e); 
    //   }
    // });
    let res = app.sortBowlersWrtEconomy(obj);
    let expectresult1 = [{ key: 'AD Russell', value: 14 },
        { key: 'HH Pandya', value: 18 }];
    expect(res).to.deep.equal(expectresult1);

  });
});

describe("testing fifth question", function () {
  it("return Top Bats man", function (done) {
    // let idOf2017 = ["577", "578"]
    let expectedResult = [{ "key":'AM Rahane',"value" : 6 }]
    operations.getScoreOfEachBatsman(dataset,dataset5).then(function (data) {
      try {
        expect(data).deep.equal(expectedResult)
        done(); 
      } catch (e) {
        done(e); 
      }
    });
  });
});