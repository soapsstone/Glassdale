import {getNotes, useNotes} from "./NoteDataProvider.js"
import { Note } from "./Note.js"
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js'

// This may be a slight refactor to what you have in your code. We added a render function to print our criminals to the DOM. You can use the render function as we do in this example, or you can keep your logic in your NoteList function-- it's up to you.
//const contentTarget = document.querySelector("#filter__notes")
//const eventHub = document.querySelector("nav")
//const contentTarget = document.querySelector(".notelistContainer")


export const NoteList = () => { // in charge of getting criminals and printing them
    getNotes() //get notes from database - gets all the notes saved to the database
    .then(getCriminals)
    .then(() => {
        const allTheNotes = useNotes()
        const allTheCriminals = useCriminals()
        const contentTarget = document.querySelector(".notelistContainer")

        const arrayOfCriminalNotesRepresentation = allTheNotes.map(criminalNote => {
            //Find the note for this criminal by using the .find()
            //method on the criminal note array
                const relatedCriminal = allTheCriminals.find(criminal => criminal.id === +criminalNote.criminalId)
                const html = Note(criminalNote, relatedCriminal)
                return html
            })
            const stringOfAllCriminalNotes = arrayOfCriminalNotesRepresentation.join("")
            contentTarget.innerHTML = stringOfAllCriminalNotes

         //this will erase the other content on the page when the notes are printed
        
        // let criminalListContainer = document.querySelector(".criminal-list");
        // criminalListContainer.innerHTML = ``;
        // let facilityContainer = document.querySelector(".facility-list");
        // facilityContainer.innerHTML = ``;
        // let officerContainer = document.querySelector(".officer-list");
        // officerContainer.innerHTML = ``;
    })
}



