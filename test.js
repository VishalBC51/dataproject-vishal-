var arryear = [
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017' ];
  
  var arrWithResYear =Array(arryear.length);
  arrWithResYear.fill(0);
  
  var i =arryear.indexOf('2009')
  arrWithResYear[i]= arrWithResYear[i] +1;
  
 var  arrTeamAndWon = [{
    name: 'rcb',
    data :[0,1,0,0,0,0,0,0,0,0,0,0,0]
  },
  {
    name: 'pune',
    data :[0,0,0,0,0,0,0,0,0,0,0,0,0]
  }]
  console.log(arrTeamAndWon);

  for(let j=0; j<arrTeamAndWon.length;j++)
  {
      if(arrTeamAndWon[j].name == "rcb")
      {
          arrTeamAndWon[j].data[i] =  arrTeamAndWon[j].data[i]+1;
      }
  }
 
  console.log(arrTeamAndWon);
  