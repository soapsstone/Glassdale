import { useCriminals } from '../criminals/CriminalProvider.js'

//import { Associate } from './Associates.js'

// let associateContainer = document.querySelector("#criminal")

// this was my wrong code shouldve been inside the document.quesrySelector
// export const associateList = (associatesFilter) =>{
//     getCriminals().then(() => {
        
//         let associateHTMLString = "";
//         const criminals = useCriminals();
        
//         if(associatesFilter){
//             criminals = criminals.filter((criminal) => {
//                 return criminal.known_associate === associatesFilter
//             })
//         }
//         for(const currentAssociateInLoop of criminals) {
//             associateHTMLString += Associate(currentAssociateInLoop)
//         };   
//         associateContainer.innerHTML = `${associateHTMLString}`
//     })
// }

document.querySelector("main").addEventListener("click", (EventObject) => {
    // console.log("you clicked me")
    // console.log(EventObject.target.id)
    if(EventObject.target.id.includes("associates--")){
        const idOfCriminalClicked = (EventObject.target.id.split("--").pop())
        const allTheCriminals = useCriminals()
        
        const matchingCriminals = allTheCriminals.find((singleCriminalInLoop) => {
            return singleCriminalInLoop.id === +idOfCriminalClicked
        })
        console.log("matching criminals", matchingCriminals.known_associates)


        document.querySelector(".known-associates-container").innerHTML = ""
        
        for(let i = 0; i <matchingCriminals.known_associates.length; i++)
            document.querySelector(".known-associates-container").innerHTML += `
            <p><h5>Name/s:</h5>${matchingCriminals.known_associates[i].name}</p>
            <p><h5>Alibi/s:</h5>${matchingCriminals.known_associates[i].alibi}</p>
            `
    }
})
