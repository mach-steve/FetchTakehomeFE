// Imports
import { getAllRecords } from "./api/API.js"; // Gets data from web and returns JS array of entry objects

// Grab button and table display area from DOM
const getAllButton = document.getElementById("getAllButton");
const displayArea = document.getElementById("displayArea");

// On button click, call getAllRecords from API file and sort, build and display tables
const handleGetAllClick = async () => {

    // API call and set response to variable
    let records = await getAllRecords();
    
    // Iterate through 'records' object and sort into 'sorted' object by 'listId'
    let sorted = {};

    for (let [index, entry] of records.entries()) {
        if (entry.name && entry.listId && entry.id) {
            if (!sorted[entry.listId]) {
                sorted[entry.listId] = [entry];
            } else {
                sorted[entry.listId].push(entry)
            }
            
        }


    }
    
    // Tables built in for loop below will be added here and ultimately displayed on the page in '#displayArea' 
    let tablesOutput = ``;

    // Takes the 'sorted' object built by the first for loop and iterates over each key (listId), building a table for each listId and appending it to 'tablesOutput'
    for (let objEntry in sorted) {
        let finishedTable = `<table><tr><td colspan='3' id='tableHeader'>List ID ${objEntry}</td></tr><tr><td>ID</td><td>List ID</td><td>Name</td></tr>`;

        // Sort each 'listId' table by name, use regex & parseInt to isolate and sort integers
        let nameRegEx = /(\d+)/; 
        let sortedByName = sorted[objEntry].sort((a, b) =>  parseInt(a.name.match(nameRegEx)) < parseInt(b.name.match(nameRegEx)) ? -1 : parseInt(a.name.match(nameRegEx)) > parseInt(b.name.match(nameRegEx)) ? 1 : 0);
        
        // Add entries to table
        for (let entry of sortedByName) {
            finishedTable += `<tr><td>${entry.id}</td><td>${entry.listId}</td><td>${entry.name}</td></tr>`
        }

        // Add finished table to final output (all tables), close table
        tablesOutput += finishedTable;
        tablesOutput += `</table>`
    }

    // Display tables on page
    displayArea.innerHTML = tablesOutput;
}


// Listen for button click
getAllButton.addEventListener("click", handleGetAllClick);
