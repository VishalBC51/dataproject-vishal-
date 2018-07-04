var fs = require('fs');

let deliveries = "deliveries.csv";
let matches = 'matches.csv';

// var data = fs.readFile('C2ImportCalEventSample.csv', 'utf8');
// var matchData =


function readfilefunc(data){
    // console.log(data.toString());
  return fs.readFileSync(data, 'utf8').toString().split('\n')
//   return data.toString().split('\n');
};

var matchData=readfilefunc(matches);
// console.log(matchData.length)
matchesPerYear={};

// function makeobject(key,value)
// {
//     this.key = key;
//     this.value = value;
// }
for(let i =1; i < matchData.length -1 ; i++)
{
    const tempArr = matchData[i].split(',');
    if( matchesPerYear[tempArr[1]] == undefined)
     matchesPerYear[tempArr[1]] = 0;
     else
     matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]]+1;
    // matchesPerYear[tempArr[1]] = matchesPerYear[tempArr[1]] ? Number(matchesPerYear[tempArr[1]]) + 1 : 1
    //
    // console.log(tempArr[1]);
    
}
module.exports.machesPerYear=matchesPerYear;
// module.exports.require = require;
// console.log(Object.keys(matchesPerYear));

// var require = (function () {
//     var cache = {};
//     function loadScript(url) {
//         var xhr = new XMLHttpRequest(),
//             fnBody;
//         xhr.open('get', url, false);
//         xhr.send();
//         if (xhr.status === 200 && xhr.getResponseHeader('Content-Type') === 'application/x-javascript') {
//             fnBody = 'var exports = {};\n' + xhr.responseText + '\nreturn exports;';
//             cache[url] = (new Function(fnBody)).call({});
//         }
//     }
//     function resolve(module) {
//         //TODO resolve urls
//         return module;
//     }
//     function require(module) {
//         var url = resolve(module);
//         if (!Object.prototype.hasOwnProperty.call(cache, url)) {
//             loadScript(url);
//         }
//         return cache[url];
//     }
//     require.cache = cache;
//     require.resolve = resolve;
//     return require;
// }());





