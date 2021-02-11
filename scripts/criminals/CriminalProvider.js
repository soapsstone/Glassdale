let criminals = [];

export const useCriminals = () => {
    return criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals") // < like robbing the bank
        .then(response => response.json()) // < washing the money
        .then( // using the money --the second .then function
            parsedCriminals => {
                //console.table(parsedCriminals) //use this to test printing to console
                criminals = parsedCriminals
            }
        )
}