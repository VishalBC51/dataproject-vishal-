let matchesPerYear = (window.data);
let years = [];
let matches = [];
years =  Object.keys(matchesPerYear);
matches = Object.values(matchesPerYear);

let container = document.createElement("div");
document.body.appendChild(container);
window.chart = new Highcharts.Chart({
    chart: {
        renderTo: container,
        height: 400,
        type: "column"
    },
    title: {
        text: "IPL MATCHES IN YEARS"
    },
    xAxis: {
        categories: years
    },
    yAxis: {
        text: "year",
        data: matches
    },
    series: [{
        text: "Year",
        data: matches
    }]
});