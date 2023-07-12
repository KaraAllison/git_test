// Code your orbitCircumference function here:

function orbitCircumference(radius = 2000) {
    return Math.round(Math.PI*2*radius);
  }
  
  // Code your missionDuration function here:
  
  function missionDuration(orbitCount, radius = 2000, speed = 28000) {
    return Math.round(orbitCount*orbitCircumference(radius)/speed*100)/100
  }
  
  // Copy/paste your selectRandomEntry function here:
  
  function selectRandomEntry(array) {
    return array[Math.floor(Math.random()*array.length)];
  }
  
  function selectLowO2(array) {
    let min = array[0].o2Used(1);
    let object;
    for (item in array) {
      if (array[item].o2Used(1) < min) {
        min = array[item].o2Used(1);
        object = array[item];
      }
    }
    return object;
  }
  
  // Code your oxygenExpended function here:
  
  function oxygenExpended(object, orbitCount, radius = 2000, speed = 28000) {
    let hrs = missionDuration(orbitCount, radius, speed);
    let o2Used = Math.round(object.o2Used(hrs)*1000)/1000;
    return `${object.name} will perform the spacewalk, which will last ${hrs} hours and require ${o2Used} kg of oxygen.`;
  }
  
  
  // Candidate data & crew array.
  let candidateA = {
    'name':'Gordon Shumway',
    'species':'alf',
    'mass':90,
    'o2Used':function(hrs){return 0.035*hrs},
    'astronautID':414
  };
  let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
  };
  let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
  };
  let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
  };
  let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
  };
  let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
  };
  
  let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
  
  console.log(`The mission will travel ${orbitCircumference()} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)
  
  console.log(oxygenExpended(selectRandomEntry(crew),3));
  console.log(oxygenExpended(selectLowO2(crew),3));
  