import { getOfficers, useOfficers } from "./OfficerProvider.js";

import { CriminalList } from "../criminals/CriminalList.js";

const contentTarget = document.querySelector("#filter__officer")
// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector("nav")

export const arrestingOfficer = () => {
    // Get all convictions from application state
        getOfficers().then(() => {
        const allOfficers = useOfficers()
        //console.log(allOfficers);
        render(allOfficers)        
    });
};

const render = officersCollection => {
    /*
        Use interpolation to invoke the map() method
    */
    contentTarget.innerHTML = `
    <option value="0">Please select an officer...</option>
    ${officersCollection.map(officerObject => {
        const officer = officerObject.name
        return `<option>${officer}</option>`
     }).join("")//changes array to string
    }
    `
}


eventHub.addEventListener("change", (eventObject) => {
    //console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    //console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id === "filter__officer"){
        //console.log("You selected something from the crime dropdown")
        //console.log("This is the officer selected: ", eventObject.target.value)
        // Your code goes here!
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in (parameters and arguments) information about the crime that was chosen
        */
        CriminalList(null, eventObject.target.value)
    }
})

