let getExtraRunsPerTeam = (window.data);
let extraRun = [];
let matche = [];
extraRun =  Object.values(getExtraRunsPerTeam);
matche = Object.keys(getExtraRunsPerTeam);
// console.log(years);
// console.log(matches);


// for (let i=0 ; i < years.length; i++) {
//     if (years[i] !== 'undefined') {
//         // years.push(value);
//         matches.push(matchesPerYear[years[i]]);
//     }
// }

let container1 = document.createElement("div");
document.body.appendChild(container1);
window.chart = new Highcharts.Chart({
    chart: {
        renderTo: container1,
        height: 400,
        type: "column"
    },
    title: {
        text: "IPL Extra runs Per Team"
    },
    xAxis: {
        categories: matche
    },
    yAxis: {
        text: "extraRun",
        data: extraRun
    },
    series: [{
        text: "extraRun",
        data: extraRun
    }]
});