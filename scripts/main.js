const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){ // the "click" is a click event, could also use dblclick for a double click, keyup for a keypress (in an input field)
    // our logic for activating dark mode goes here-- this code only runs AFTER the button is clicked
   const bodyElement = document.querySelector("body")

   // Add a class
   bodyElement.classList.toggle("dark-background")
});


import {NoteForm} from "./notes/Noteform.js"
NoteForm()

import { NoteList } from "./notes/NoteList.js"
NoteList()

import {CriminalList} from "./criminals/CriminalList.js";

// CriminalList();

import {OfficerList} from "./officers/OffcierList.js";

//OfficerList();

import {LocationsList} from "./locations/LocationsList.js";

// LocationsList();

import { ConvictionList } from "./convictions/ConvictionList.js";
ConvictionList()

import { WitnessList } from "./witnesses/WitnessList.js"
//WitnessList()

import { arrestingOfficer } from "./officers/OfficerSelect.js"
arrestingOfficer()

import {} from "./associates/AssociatesList.js";


