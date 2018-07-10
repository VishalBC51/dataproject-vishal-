const expect = require("chai").expect;
const path = require("path");
let dataset = path.resolve("data/Testmatches.csv");
const fileName = path.resolve("app.js");
let dataset2 = path.resolve("data/Testdeliveries.csv");
const operations = require(fileName);

xdescribe("testing first question", function () {
  xit("return false", function (done) {
    operations.matchesPerYear(dataset).then(function (data) {
      try {
        expect(data).to.deep.equal(false)
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
  it("should return total number of matches played per year", function (done) {
    const expectedResult = {
      2009: 2,
      2017: 1,
      2008: 1
    };

    operations.matchesPerYear(dataset).then(function (data) {
      try {
        expect(data).to.deep.equal(expectedResult);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
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
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
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
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
});

xdescribe("testing second question", function () {
  it("IT should return empty object", function (done) {
    operations.seasonPerTeamWinningVar(dataset).then(function (data) {
      try {
        let expectresult1 = {};
        expect({}).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });

  it("return each year with single match pair", function (done) {
    operations.seasonPerTeamWinningVar(dataset).then(function (data) {
      try {
        let expectresult = {
          "2008": [{ "Chennai Super Kings": 1 }],
          "2009": [{ "Royal Challengers Bangalore": 1, "Deccan Chargers": 1 }],
          "2017": [{ "Sunrisers Hyderabad": 1 }]
        };
        expect(data).deep.equal(expectresult);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
});

describe("testing third question", function () {

  it("Get all the Id Of matched played in 2016", function (done) {
    operations.getMatchId(dataset, '2016').then(function (data) {
      try {
        let expectresult1 = ["577", "578", "579", "580"];
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
  it("getExtraRunsPerTeam function : extraruns of each team played in 2016", function (done) {
    let input1 = ["577", "578"];
    operations.getExtraRunsPerTeam(dataset2, input1).then(function (data) {
      try {
        let expectresult1 = { "Kolkata Knight Riders": 3, "Mumbai Indians": 2 };
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
});


describe("testing forth question", function () {

  xit("checking whether function returns value or not", function (done) {
    operations.getBollsCountAndRunsEachBowler(dataset2, ["1"]).then(function (data) {
      try {
        let expectresult1 = ["1"];
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });

  xit("get Count of balls and Total runs per player", function (done) {
    let arr = ['577', '578'];
    operations.getBollsCountAndRunsEachBowler(dataset2, arr).then(function (data) {
      try {
        let expectresult1 = {
          'HH Pandya': { count: 6, totalRuns: 36 },
          'AD Russell': { count: 7, totalRuns: 28 }
        };
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
  xit("get Economic rate of each player", function (done) {
    let arr = {
      'HH Pandya': { count: 12, totalRuns: 36 },
      'AD Russell': { count: 12, totalRuns: 28 }
    };
    operations.getEconomicRateOfEachBowler(arr).then(function (data) {
      try {
        let expectresult1 = { 'HH Pandya': 18, 'AD Russell': 14 };
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
  it("sort bowler Object based on economy", function (done) {
    let obj = { 'HH Pandya': 18, 'AD Russell': 14 };
    operations.sortBowlersWrtEconomy(obj).then(function (data) {
      try {
        let expectresult1 = [{ key: 'AD Russell', value: 14 },
        { key: 'HH Pandya', value: 18 }];
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    });
  });
  // it("integrating all function", function () {
  //   var t1 = topEconomicBowler(dataset, dataset2) 

  //     let res = [{ key: 'AD Russell', value: 24 },
  //     { key: 'HH Pandya', value: 36 }]
  //       expect(t1).deep.equal(res);
  
  // });
  // it("integrating all function", function (done) {
  //   let obj = { 'HH Pandya': 18, 'AD Russell': 14 };
  //   operations.sortBowlersWrtEconomy(obj).then(function (data) {
  //     try {
  //       let expectresult1 = [{ key: 'AD Russell', value: 14 },
  //       { key: 'HH Pandya', value: 18 }];
  //       // console.log(data)
  //       expect(data).to.deep.equal(expectresult1);
  //       done(); // success: call done with no parameter to indicate that it() is done()
  //     } catch (e) {
  //       done(e); // failure: call done with an error Object to indicate that it() failed
  //     }
  //   });
  // });
})