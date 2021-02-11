import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminals } from "./Criminal.js";

// const eventHub = document.querySelector("main");
const criminalListContainer = document.querySelector("#criminals-card");


export const CriminalList = (convictionFilter, arrestingFilter) => {
    getCriminals().then(() => {
    
    let allcriminals = useCriminals();
    let criminalListHTMLString = "";
    
    if(convictionFilter){
        allcriminals = // write your filter here
        allcriminals.filter((currentCriminal) => {
            return currentCriminal.conviction === convictionFilter
          })
    }
    else if(arrestingFilter){
        allcriminals = // write your filter here
        allcriminals.filter((currentCriminal) => {
            return currentCriminal.arrestingOfficer === arrestingFilter
          })
    }
    for (let currentCriminalInLoop of allcriminals){
        criminalListHTMLString += Criminals(currentCriminalInLoop);
    };
    criminalListContainer.innerHTML = `<h2>Criminals</h2>${criminalListHTMLString}`
    // [arrestingOfficerContainer, criminalListContainer].forEach((CriminalList)=>{
    //     eventHub.addEventListner("click", (e)=>{
    //       console.log('someone hit me');
    //   });
    //});

})
}




document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})
 // invoke the function that prints the criminals

    




    // else if(associatesFilter){
    //     allcriminals = // write your filter here
    //     allcriminals.filter((currentCriminal) => { 
    //             <section class = "associate"> 
    //                <p>Name:${known_associates.name}</p>
    //                <p>Alibi:${known_associates.name}</p>
    //           </section> 
    //       })