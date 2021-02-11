export function Criminals(criminalObject){
    return `
    <div class = "flex-container">
    <div>
        <p><h4>Name: ${criminalObject.name}</h4></p>
        <p><h4>Age: ${criminalObject.age}</h4></p>
        <p><h4>Conviction: ${criminalObject.conviction}</h4></p>
        <p><h4>Start Date: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</h4></p>
        <p><h4>End Date: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</h4></p>
        <div>
        <button class= associateButton id="associates--${criminalObject.id}">Associate Alibis</button>

        </div>
    </div>`
}

// the reason for the -- is because of multiple convicts coming back
/* <div>
<button id="associates--${criminalObject.id}">Associate Alibis</button>

<div class="button-info"><h4>${criminalObject.known_asscoiates.name}</h4></div>
<div class="button-info"><h4>${criminalObject.known_asscoiates.alibi}</h4></div>
</div> 
<container class="associate-container">${criminalObject.known_associates}</container>
*/