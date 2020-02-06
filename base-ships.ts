class Spacecraft {
    
    constructor(public propulsor: string) {

    }

    // MÉTODO = Não precisa utilizar a palavra function na frente
    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

interface Containership {

    cargoContainers: number

}

export {Spacecraft, Containership}