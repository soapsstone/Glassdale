export const Note = (criminalNote, relatedCriminal) => {
    return `
        <div class="note-card">
            <p>Date: ${criminalNote.date}</p>
            <p>Entry: ${criminalNote.text}</p>
            <p>Note about: ${relatedCriminal.name}</p>
        </div>
    `
}

/* <div>
<p>${criminalObject.criminalId}</p>
<p>${criminalObject.text}</p>
</div> */
/* <section class="note">
<h2>Note about ${relatedCriminal.name}</h2>
${noteObject.note}
</section> */