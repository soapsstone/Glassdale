import { getWitness, useWitness } from './WitnessProvider.js'

import { Witness } from "./Witness.js";

let witnessContainer = document.querySelector("#witness-card");

export const WitnessList = () => {
    getWitness().then(() => {
        const allWitness = useWitness();
        
        let witnessListHTMLString = "";

        for (const currentWitnessInLoop of allWitness){
            witnessListHTMLString += Witness(currentWitnessInLoop);
        };
        witnessContainer.innerHTML = `<h2>Witness Statements</h2>${witnessListHTMLString}`
        }
    )    
}

document.querySelector("#witness-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    WitnessList()
})