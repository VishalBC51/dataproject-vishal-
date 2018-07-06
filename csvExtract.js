var fs = require('fs');

let deliveries = "deliveries.csv";
let matches = 'matches.csv';

function readfilefunc(data) {
    // console.log(data.toString());
    return fs.readFileSync(data, 'utf8').toString().split('\n');
    //   return data.toString().split('\n');
};

var matchData = readfilefunc(matches);
// console.log(matchData.length)
matchesPerYear = {};
arrOfYears = [];
// eachteamwinnigcount = []
arrOfteams = {};


for (let i = 1; i < matchData.length - 1; i++) {
    const tempArr = matchData[i].split(',');
    if (matchesPerYear[tempArr[1]] == undefined) {
    matchesPerYear[tempArr[1]] = 1;
        // yearwiseWinningPerTeam[tempArr[1]] = 1;
        // eachteamwinnigcount[tempArr[5]] = 1;
        // eachteamwinnigcount[tempArr[6]] = 1;
    }
    else
        matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]] + 1;
    // matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]] ? Number(matchesPerYear[tempArr[1]]) + 1 : 1
    //
    // console.log(tempArr[1]);
    if (arrOfteams[tempArr[5]] == undefined && arrOfteams[tempArr[6]] == undefined) {
        arrOfteams[tempArr[5]] = 1;
        arrOfteams[tempArr[6]] = 1;
    }
}
// console.log(matchesPerYear);


//------------------------------------part 2 ----------------------------------------
//------Array of Years--------------------------
arrOfYears = Object.keys(matchesPerYear);
//------Array of teams--------------------------
// arrOfteams 
module.exports.machesPerYear = matchesPerYear;


//----------it contains both teams and winnig array---------------------------
 var arrTeamAndWinningCount = Array(Object.keys(arrOfteams).length);

 var teamswinningPeryear =  Array(arrOfYears.length);
 teamswinningPeryear.fill(0);

//  for(var w =0 ;w<arrOfYears)
arrTeamAndWinningCount.fill({
    name :"",
    data:teamswinningPeryear
});
console.log(arrTeamAndWinningCount)

//  console.log(arrTeamAndWinningCount);
// eachteamwinnigcount ={}
// let count =0;
// arrTeamAndWinningCount[0][0].name= "pune";
// arrTeamAndWinningCount[0].data= 123123;

// console.log(arrTeamAndWinningCount[1].name)
// console.log(arrTeamAndWinningCount)

for (let i = 1; i < matchData.length - 1; i++) {
    const tempArr1 = matchData[i].split(',');
    var index =  arrOfYears.indexOf(""+tempArr1[1]);
//  console.log(tempArr1[10])
     
    // for(let p=0 ; p<Object.keys(arrOfteams).length ; p++)
    // {  
    //     console.log(arrTeamAndWinningCount[p].name)
    //     if(arrTeamAndWinningCount[p].name === ""){
    //         // arrTeamAndWinningCount[p].name =tempArr1[10];
    //     //   console.log("here")
    //         arrTeamAndWinningCount[p].data[index]= arrTeamAndWinningCount[p].data[index]+1;
    //         break;
    //     }
    // //    else if(arrTeamAndWinningCount[p].name === (tempArr1[10])){
    // //     console.log( arrTeamAndWinningCount[p].name+"    "+tempArr1[10])
    // //         arrTeamAndWinningCount[p].data[index]= arrTeamAndWinningCount[p].data[index]+1;
    // //         break;
    // //     }
    // }
    //  else
    //  matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]]+1;
    // matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]] ? Number(matchesPerYear[tempArr[1]]) + 1 : 1
    //
    // console.log(tempArr[1]);
}
// console.log( arrTeamAndWinningCount);
// console.log(arrTeamAndWinningCount)









