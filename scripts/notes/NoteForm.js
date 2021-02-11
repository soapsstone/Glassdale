import { saveNote } from "./NoteDataProvider.js"
import { NoteList } from "./NoteList.js"
import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".noteFormContainer")

export const NoteForm = () => {
    getCriminals().then(() => {
        let allCriminals = useCriminals()
    contentTarget.innerHTML = `
    <input type="date" id = "date"></input>
    <textarea name="entry" id="entry" rows="1" cols="20"> </textarea>
    <button id="saveNote">Save Note</button>
    </div>
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="">Please Select a Criminal...</option>
    ${allCriminals.map((currentCriminalInLoop) => {
        return `<option value="${currentCriminalInLoop.id}">${currentCriminalInLoop.name}</option>
        `
    })
    }</select>
    `
})
} // buidling the form - need an input or property of the note

// all the following is happening when we click the save button
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        console.log("you clicked me")
        //console.log(message.value)
        // Make a new object representation of a note
        const newNote = {
            date: document.querySelector("#date").value, //getting the value or inputs and storing in an object
            text: document.querySelector("#entry").value,
            criminalId: document.querySelector("#noteForm--criminal").value,
        }// Key/value pairs here
        //console.log(newNote)
        //console.log(Object.values(newNote))
        // Change API state and application state
        saveNote(newNote) //saving the note
        .then(NoteList) // Refresh your whole list of notes once you've saved your new one 
    }

    // if(clickEvent.target.id.includes(".criminalSelect")){
        
    //     console.log("you clicked me")
    //     const noteToSave = {
    //         text: document.querySelector("#noteForm"),
    //         criminalId: document.querySelector("#criminal"),
    //     }
    //     criminalSelect(noteToSave)
    //     .then(NoteList)
    // }

    //console.log(clickEvent.target.id)
})

// document.querySelector(".noteFormContainer").addEventListener("change", (eventObject) => {
//     console.log("You clicked somewhere in the main container")
//     //To be more specific, we need to know specifically what we clicked on
//     //console.log("Here is the element you clicked on: ", eventObject.target)
//     if(eventObject.target.id.includes(".criminalSelect")){
//         console.log("you clicked me")
//         const noteToSave = {
//             text: document.querySelector("#noteText").value,
//             criminalId: document.querySelector("#selectedCriminalId").value,
//         }
//         criminalSelect(noteToSave)
//         .then(NoteList)
//     }
// })

// // document.querySelector("main").addEventListener("click", () => {
// // })