var fs = require('fs');


console.log(noOFmatchesVsyear());



function noOFmatchesVsyear(){
    let deliveries = "deliveries.csv";
    let matches = 'matches.csv';
    
    function readfilefunc(data) {
        return fs.readFileSync(data, 'utf8').toString().split('\n');
    };
    
    var matchData = readfilefunc(matches);
    
    var yeararr = [];
    for (let i = 1; i < matchData.length - 1; i++) {
        const tempArr = matchData[i].split(',');
        yeararr.push(tempArr[1]);
    }
    	if(yeararr === null || yeararr === undefined) return {};
    var arrayresult1 =  yeararr.reduce(function (allNames, name) { 
		if(name === undefined || name === null) return allNames;
        if (name in allNames) {
          allNames[name]++;
        }
        else {
          allNames[name] = 1;
        }
        return allNames;
      }, {});
	  if(yeararr == undefined  ) return arrayresult1;
	   return arrayresult1;
	   
    }

//--------------------question no 2------------------------------------

function perYearWinningPerTeam(){
    let deliveries = "deliveries.csv";
    let matches = 'matches.csv';
    
    function readfilefunc(data) {
        return fs.readFileSync(data, 'utf8').toString().split('\n');
    };
    
    var matchData = readfilefunc(matches);
    
    var yeararr = [];
    for (let i = 1; i < matchData.length - 1; i++) {
        const tempArr = matchData[i].split(',');
        yeararr.push(tempArr[1]);

       
    }




 }

// console.log(getTotalMatchPerYear());
// function getTotalMatchPerYear() {
//     var fs = require('fs');
//     var csv = require('fast-csv');
//    var map;
//     var totalMatchPerYear = [];
//     fs.createReadStream('matches.csv').pipe(csv()).on('data', function (data) {
//         if (Number(data[1])) {
//             totalMatchPerYear.push(data[1]);
//         }
//     }).on('end', function () {
//              map = totalMatchPerYear.reduce(noOfMatchesPerYear, {});
//             function noOfMatchesPerYear(counter, year) {
//                 counter[year] = ++counter[year] || 1;
//                 return counter;
//             }
//             return JSON.stringify(map);
//         });
//         // return JSON.stringify(map);
        
//  }


 //-------------------------question no 2 ---------------------------------------------
