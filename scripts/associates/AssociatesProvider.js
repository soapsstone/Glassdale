let associates = []


export const useAssociate = () => {
    return associates.slice()
}

export const getAssociate = () => {
    return fetch("https://criminals.glassdale.us/criminals/")
    .then(response => response.json())
    .then(
        parsedAssociates => {
            associates = parsedAssociates
        }
    )
} 