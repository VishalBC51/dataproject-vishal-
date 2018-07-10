let getScoreOfEachBatsman = (window.data);
let  BatsName = [];
let runs= [];
let obj ={};
let l =getScoreOfEachBatsman.length;
for(let i=l-1;i>l-10;i--){
    obj[getScoreOfEachBatsman[i]['key']] = getScoreOfEachBatsman[i]['value'];
}
// console.log(obj+"JJ");
runs =  Object.values(obj);
BatsName = Object.keys(obj);
// console.log(years);
// console.log(matches);


// for (let i=0 ; i < years.length; i++) {
//     if (years[i] !== 'undefined') {
//         // years.push(value);
//         matches.push(matchesPerYear[years[i]]);
//     }
// }

let container2 = document.createElement("div");
document.body.appendChild(container2);
window.chart = new Highcharts.Chart({
    chart: {
        renderTo: container2,
        height: 400,
        type: "column"
    },
    title: {
        text: "IPL highest scored batsmen in 2017"
    },
    xAxis: {
        categories: BatsName
    },
    yAxis: {
        text: "runs",
        data: runs
    },
    series: [{
        text: "runs",
        data: runs
    }]
});