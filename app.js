"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfights_1 = require("./starfights");
/**
 * VARIÁVEIS
 */
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode += 1;
console.log("Next episode is " + 5);
// Tipo ANY
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
/**
 * FUNÇÕES
 */
// NOME             ||            PARÂMETROS   || TIPO DO RETORNO DA FUNÇÃO
var isEnoughToBeatMT = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMT(distance) ? 'YES' : 'NO'));
// Arrow function
// NOME || PARÂMETROS    || CORPO DA FUNÇÃO
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
// Parâmetros padrões em Typescript
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5, 1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
console.log("===========================================================");
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfights_1.MillenniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
