let notes = []

export const useNotes = () => notes.slice()



export const getNotes = () => {
    return fetch('http://localhost:8088/notes') //fetch call to json server
        .then(response => response.json()) // turn into javascript
        .then(parsedNotes => {
            notes = parsedNotes // store variable in notes
        })

}

export const saveNote = note => { //
    return fetch('http://localhost:8088/notes', {
        method: "POST", // makes a post request - POST means add something 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note) // the thing its going to send is a jsonified note we just built
    })
}
//purely for data access and only that - muddy the water of the principal responsibility