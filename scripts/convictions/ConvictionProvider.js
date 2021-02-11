let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes") // < like robbing the bank
        .then(response => response.json()) // < washing the money
        .then( // using the money --the second .then function
            parsedConvictions => {
                //console.table(parsedConvictions) // use this to test printing to console
                convictions = parsedConvictions
            }
        )
}