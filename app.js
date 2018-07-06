var mdata = require('./csvExtract.js');
// var myScript = document.createElement('script'); // Create new script element
// myScript.type = 'text/javascript'; // Set appropriate type
// myScript.src = './csvExtract.js'; // Load javascript file
// mdata.machesPerYear
// var firstChart = {};
// firstChart.title = {
//     text : "Hello"
// }
// $('#container').highcharts(firstChart);

// Highcharts.chart('container', {
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Matches played per year'
//     },
//     subtitle: {
//         text: 'Source: WorldClimate.com'
//     },
//     xAxis: {
//         categories: Object.keys(mdata.matchesPerYear), crosshair: true
//     },
//     yAxis: {
//         min: 0,
//         title: {
//             text: 'Rainfall (mm)'
//         }
//     },
//     tooltip: {
//         headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
//         pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
//             '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
//         footerFormat: '</table>',
//         shared: true,
//         useHTML: true
//     },
//     plotOptions: {
//         column: {
//             pointPadding: 0.2,
//             borderWidth: 0
//         }
//     },
//     series: [{
//         name: Object.keys(mdata.matchesPerYear),
//         data: Object.values(mdata.matchesPerYear)
//     }]
// });







