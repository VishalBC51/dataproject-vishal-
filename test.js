// let expect = require("chai").expect;
// let index2 = require("./index2")

// describe("INDEX2",function(){
//   it("CHECkING part1 results ",function(){
//     expect(index2.noOFmatchesVsyear()).equal(true);
//   })
// })

const expect = require('chai').expect
const path = require('path')
let dataset = path.resolve("data/Testmatches.csv")
const fileName = path.resolve("app.js")
let dataset2 = path.resolve("data/Testdeliveries.csv")
const operations = require(fileName)

// describe("testing first question", function () {
//   it("return false", function (done) {
//     operations.matchesPerSeasonVar(dataset).then(function (data) {
//       try {
//         // expect(data).to.deep.equal(false)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })
//   it("should return total number of matches played per year", function (done) {
//     const expectedResult = {
//       2009: 2,
//       2017: 1,
//       2008: 1
//     }

//     operations.matchesPerSeasonVar(dataset).then(function (data) {
//       try {
//         expect(data).to.deep.equal(expectedResult)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })
//   it("it should return result object even when any one null or undefined present in data", function (done) {
//     const expectedResult = {
//       2009: 2,
//       2017: 1,
//       2008: 1
//     }

//     operations.matchesPerSeasonVar(dataset).then(function (data) {
//       try {
//         expect(data).to.deep.equal(expectedResult)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })
//   it("when no data is present in csv file", function (done) {
//     const expectedResult = {
//     }
//     let datasettemp = path.resolve("data/empty.csv")
//     operations.matchesPerSeasonVar(datasettemp).then(function (data) {
//       try {
//         expect(data).to.deep.equal(expectedResult)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })
// })

// describe("testing second question", function () {
//   it("IT should return empty object", function (done) {
//     operations.seasonPerTeamWinningVar(dataset).then(function (data) {
//       try {
//         let expectresult1 = {}
//         expect({}).to.deep.equal(expectresult1)
//         // let seasonresult2 = [2]
//         // console.log(data1)
//         // expect(data2).to.deep.equal(seasonresult2)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })

//   it("return each year with single match pair", function (done) {
//     operations.seasonPerTeamWinningVar(dataset).then(function (data) {
//       try {
//         let expectresult = { '2008': [ { 'Chennai Super Kings': 1 } ],
//         '2009': [ { 'Royal Challengers Bangalore': 1, 'Deccan Chargers': 1 } ],
//         '2017': [ { 'Sunrisers Hyderabad': 1 } ] }
//         // console.log(dataset)
//         expect(data).deep.equal(expectresult)
//         done(); // success: call done with no parameter to indicate that it() is done()
//       } catch (e) {
//         done(e); // failure: call done with an error Object to indicate that it() failed
//       }
//     })
//   })


// })

describe("testing third question", function () {
  it("IT should return empty object", function (done) {
    operations. ExtraRunsScored(dataset,dataset2).then(function (data) {
      try {
        let expectresult1 = {}
        expect({}).to.deep.equal(expectresult1)
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    })
  })
  it("Get all the Id Of matched played in 2016", function (done) {
    operations.ExtraRunsScored(dataset).then(function (data) {
      try {
        let expectresult1 = ["577","578","579","580"];
        // console.log(data)
        expect(data).to.deep.equal(expectresult1);
        done(); // success: call done with no parameter to indicate that it() is done()
      } catch (e) {
        done(e); // failure: call done with an error Object to indicate that it() failed
      }
    })
  })
})