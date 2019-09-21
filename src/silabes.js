'use strict';

const find       = require('array-prefix');
var palabrasCast = require('dictionaries-in-array')('es')
var silabs       = require('silabify');
var random       = require('math-random')


var randW=palabrasCast[parseInt(random() * (palabrasCast.length-1))];
console.log("Palabra aleatoria elegida",randW);
var targetS=silabs(randW)[silabs(randW).length-1];
console.log("La palabra elegida tiene que empezar por",targetS);
var candidates=find(targetS,palabrasCast);
for (var i=0; i<candidates.length; i++){
  if(silabs(candidates[i])[0] == targetS){
    console.log(candidates[i]);
  }
}
//console.log(silabs(process.argv[2]))
//console.log(process.argv[2])
