//import { getAssociate, useAssociate } from '../associates/AssociatesProvider.js'

//import { associateList } from "./AssociatesList.js";

const eventHub = document.querySelector("main")
//const contentTarget = document.querySelector("#filters__crime")
//const contentTarget = document.querySelector("knownAssociates")

// export const AssociateList = () =>{
//     getAssociate().then(() => {
//         const known_associates = useAssociate();
//         console.log(known_associates);
//         render(known_associates)
//     });
// };
        
// const render = associatesCollection => {

//     contentTarget.innerHTML = `<option value ="0"></option>
//     ${associatesCollection.map(associateObject => {
//         const associate = associateObject.name
//         return `<option>${associate}</option>`
//      })
//     }
//     `
// }   


eventHub.addEventListener("click", (eventObject) => {
    console.log("Here is the element you clicked on: ", eventObject.target)

    if(eventObject.target.id.includes("#associates--")){
        console.log(associates)
        associatesList(eventObject.target.id)
    }
})

document.querySelector("body").addEventListener("click", () => {
   
})

//if(associateFunction);
