/**
 * VARIÁVEIS
 */
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message)

let episode: number = 4
console.log("This is episode " + 4)
episode += 1
console.log("Next episode is " + 5)

// Tipo ANY
let favoriteDroid
favoriteDroid = 'BB-8'
console.log("My favorite droid is " + favoriteDroid)

/**
 * FUNÇÕES
 */

// NOME             ||            PARÂMETROS   || TIPO DO RETORNO DA FUNÇÃO
let isEnoughToBeatMT = function(parsecs: number): boolean {
    return parsecs < 12
}

let distance = 11
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMT(distance) ? 'YES': 'NO'}`)

// Arrow function
// NOME || PARÂMETROS    || CORPO DA FUNÇÃO
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

// Parâmetros padrões em Typescript
function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc(5, 1) = ${inc(5, 1)}`)
console.log(`inc(5) = ${inc(5)}`)

console.log("===========================================================")

/**
 * CLASSES
 */
class Spacecraft {
    
    constructor(public propulsor: string) {

    }

    // MÉTODO = Não precisa utilizar a palavra function na frente
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number

    constructor() {
        super('hyperdrive')
        this.cargoContainers = 2
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }

}

let falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();

interface Containership {

    cargoContainers: number

}


let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'YES': 'NO'}`)