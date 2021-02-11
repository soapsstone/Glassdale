let location = []

export const useLocation = () => {
    return location.slice()
}

export const getLocation = () => {
    return fetch("https://criminals.glassdale.us/facilities")
        .then(response => response.json())
        .then(
            parsedLocation => {
                // console.table(parsedLocation) //check to see if printing to the console
                location = parsedLocation
            }
        )
}