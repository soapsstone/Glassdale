import { getOfficers, useOfficers } from './OfficerProvider.js'

import { Officers } from "./Officer.js";

let officerContainer = document.querySelector("#officer-card");

export const OfficerList = () => {
    getOfficers().then(() => {
        const allOfficers = useOfficers();
        
        let officersListHTMLString = "";

        for (const currentOfficersInLoop of allOfficers){
            officersListHTMLString += Officers(currentOfficersInLoop);
        };
        // Now that you have the data, what component should be rendered?
        officerContainer.innerHTML = `${officersListHTMLString}`
        },
    )    
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    OfficerList()
});