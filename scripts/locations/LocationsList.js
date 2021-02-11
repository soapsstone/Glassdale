import { getLocation, useLocation } from './LocationProvider.js'

import { Location } from "./Locations.js";

let locationContainer = document.querySelector("#location-card");

export const LocationsList = () => {
    getLocation().then(() => {
        const allLocation = useLocation();
        
        let locationListHTMLString = "";

        for (const currentLocationInLoop of allLocation){
            locationListHTMLString += Location(currentLocationInLoop);
        };
        // Now that you have the data, what component should be rendered?
        locationContainer.innerHTML = `<h2>Facilities</h2>${locationListHTMLString}`
        },
    )    
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    // invoke the function that prints the criminals
    LocationsList()
});