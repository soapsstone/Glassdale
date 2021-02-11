import { getConvictions, useConvictions } from "./ConvictionProvider.js";

import { CriminalList } from "../criminals/CriminalList.js";

const contentTarget = document.querySelector("#filters__crime")
// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector("nav")

export const ConvictionList = () => {
    // Get all convictions from application state
        getConvictions().then(() => {
        const allConvictions = useConvictions()
        //console.log(allConvictions);
        render(allConvictions)        
    });
};

const render = convictionsCollection => {
    /*
        Use interpolation to invoke the map() method
    */
    contentTarget.innerHTML = `
    <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(crimeObject => {
        const crime = crimeObject.name
        return `<option>${crime}</option>`
     }).join("")//changes array to string
    }
    `
}


eventHub.addEventListener("change", (eventObject) => {
    //console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    //console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id === "filters__crime"){
        //console.log("You selected something from the crime dropdown")
        //console.log("This is the crime that was selected: ", eventObject.target.value)
        // Your code goes here!
        /*
        - When we select a crime, we need to filter the criminals in CriminalList.
        - Start by importing the CriminalList component at the top of this file.
        - Then call CriminalList, and pass in information about the crime that was chosen
        */
        CriminalList(eventObject.target.value)
    }
})

