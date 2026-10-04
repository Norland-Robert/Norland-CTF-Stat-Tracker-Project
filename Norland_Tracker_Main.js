//Declares the arrays to be used in the program that stores the values

//CTF Names
const ctf_names = [];

//CTF Scores
const ctf_scores = [];

//CTF Flags
const ctf_flag_counts = [];

//CTF Start Dates
const ctf_start_dates = [];

//CTF End Dates
const ctf_end_dates = [];

//Creates an object to be convert the data into a JSON
const ctf_data = 
{
    names: ctf_names,
    scores: ctf_scores,
    flags: ctf_flag_counts,
    startDates: ctf_start_dates,
    endDates: ctf_end_dates,
};

//Funtion to read in data from the json file and store it for display
async function readingJson()
{

    //Opens the JSON file
    try
    {
        //Grabs the json file for reading data
        const response = await fetch('Norland_CTF_Stats.json');

        //Checks for an error for trying to load data
        if (!response.ok)
        {
            throw new Error("Could not load data from CTF data.");
        }

        //Waits for a response
        const data = await response.json();

        //Logs successful json loading
        console.log("Data from json file successfully loaded", data);

        //Stores json data into the arrays
        ctf_names.push(...data.names);
        ctf_scores.push(...data.scores);
        ctf_flag_counts.push(...data.flags);
        ctf_start_dates.push(...data.startDates);
        ctf_end_dates.push(...data.endDates);

        //Logs successful data loading
        console.log("Json data successfully loaded");

    }
    catch (error)
    {
        console.error("Error loading json file", error);
    }


}

function saveToLocalStorage()
{
    //Converts data object into json string
    const CtfJsonData = JSON.stringify(ctf_data);

    //Saves json string to localstorage
    localStorage.setItem('ctfData', CtfJsonData);
    
    //Logs the terminal with a successful save
    console.log("CTF data successfully saved to localStorage");
}

function readFromLocalStorage()
{
    //Gets json strings
    const savedData = localStorage.getItem('ctfData');

    //stops once there's no more data
    if (savedData === null)
    {
        //logs error
        console.log("No CTF saved data");
        return;
    }

    //Converts json back to Javascript
    const data = JSON.parse(savedData);

    //Adds values back into the arrays
    ctf_names.push(...data.names);
    ctf_scores.push(...data.scores);
    ctf_flag_counts.push(...data.flags);
    ctf_start_dates.push(...data.startDates);
    ctf_end_dates.push(...data.endDates);

    //logs successful reading
    console.log("CTF data successfully loaded from localStorage");
       
}

//Function to add new CTF values to an array
function updateArrays(newCTFName, newCTFScore, newCTFFlag, newCTFStartDate, newCTFEndDate)
{
    //Updates Name Array
    ctf_names.push(newCTFName);

    //Updates Score Array
    ctf_scores.push(newCTFScore);

    //Updates Flags Array
    ctf_flag_counts.push(newCTFFlag);

    //Updates Start Date Array
    ctf_start_dates.push(newCTFStartDate);

    //Updates End Date Array
    ctf_end_dates.push(newCTFEndDate);

    //Prints contents of the arrays to show success

    //Prints CTF Names
    console.log("Names: ", ctf_names);

    //Prints CTF Scores
    console.log("Scores: ", ctf_scores);

    //Prints CTF Flags
    console.log("Flag Counts: ", ctf_flag_counts);

    //Prints CTF Start Dates
    console.log("Start Dates: ", ctf_start_dates);

    //Prints CTF End Dates
    console.log("End Dates: ", ctf_end_dates);

}

//Function to append new child items to the system
function appendNewItem(nameInput, scoreInput, flagInput, startDateInput, endDateInput)
{

    //Appends new values as new child items
    const gridContainer = document.querySelector('#grid-container');

    //Declares a new block for the name
    const newCTFName = document.createElement('div');
    newCTFName.classList.add('CTF_Name');
    newCTFName.textContent = nameInput;


    //Declares a new block for the score
    const newCTFScore = document.createElement('div');
    newCTFScore.classList.add('Points_Scored');
    newCTFScore.textContent = scoreInput;


    //Declares a new block for the flag block
    const newCTFFlag = document.createElement('div');
    newCTFFlag.classList.add('Flags_Secured');
    newCTFFlag.textContent = flagInput;


    //Declares a new block for the Start Date
    const newCTFStartDate = document.createElement('div');
    newCTFStartDate.classList.add('Comp_Start');
    newCTFStartDate.textContent = startDateInput;


    //Declares a new block for the End Date
    const newCTFEndDate = document.createElement('div');
    newCTFEndDate.classList.add('Comp_Conclusion');
    newCTFEndDate.textContent = endDateInput;


    //Changes the input value to N/A if the value when applying trim = "" or null
    if (!newCTFName || newCTFName.textContent.trim() === "")
    {
        newCTFName.textContent = "N/A";
    }
    
    if (!newCTFScore || newCTFScore.textContent.trim() === "")
    {
        newCTFScore.textContent = "N/A";
    }
    
    if (!newCTFFlag || newCTFFlag.textContent.trim() === "")
    {
        newCTFFlag.textContent = "N/A";
    }
    
    if (!newCTFStartDate || newCTFStartDate.textContent.trim() === "")
    {
        newCTFStartDate.textContent = "N/A";
    }
    
    if (!newCTFEndDate || newCTFEndDate.textContent.trim() === "")
    {
        newCTFEndDate.textContent = "N/A";
    }

    //Appends Values to Arrays 

    updateArrays(nameInput, scoreInput, flagInput, startDateInput, endDateInput);

    //Calls the function to save data to localStorage
    saveToLocalStorage();

    //Appends the blocks to the grid

    //New CTF Name
    gridContainer.appendChild(newCTFName);

    //New CTF Score
    gridContainer.appendChild(newCTFScore);

    //New CTF Flag record
    gridContainer.appendChild(newCTFFlag);

    //New CTF Start Date
    gridContainer.appendChild(newCTFStartDate);

    //New CTF End Date
    gridContainer.appendChild(newCTFEndDate);


    console.log("Item Added Successfully");


}

//Function to update the screen with new ctf data 
function updateNewInfo(event)
{

    //preventDefault to prevent page from reloading or moving to non-existing page
    event.preventDefault();

    //Gathers user input for the new ctf name registrant
    const nameInput = document.querySelector('#CTF_Name');

    //Gathers user input for the new ctf score registrant
    const scoreInput = document.querySelector('#CTF_Score');

    //Gathers user input for the new ctf flags registrant
    const flagInput = document.querySelector('#CTF_Flags');

    //Gathers user input for the new ctf Start Date registrant
    const startDateInput = document.querySelector('#CTF_Start_Date');

    //Gathers user input for the new ctf End Date registrant
    const endDateInput = document.querySelector('#CTF_End_Date');

    //Calls the function to append new child items to the system
    appendNewItem(nameInput.value, scoreInput.value, flagInput.value, startDateInput.value, endDateInput.value);


    //Calls function to update and save the json file

    //updateJson(ctf_data);

    //Console logs the contents to see what values are being stored
    console.log("Name: ",nameInput.value);
    console.log("Score: ", scoreInput.value);
    console.log("Flags: ", flagInput.value);
    console.log("Start Date: ", startDateInput.value);
    console.log("End Date: ", endDateInput.value);

    //Resets each of the forms with blank values
    nameInput.value = "";

    scoreInput.value = "";

    flagInput.value = "";

    startDateInput.value = "";

    endDateInput.value = ""; 

    //Prints to the console to that the function/submission execution was successful
    console.log('Updated Values');
}

function displayCTFData(nameInput, scoreInput, flagInput, startDateInput, endDateInput)
{
//Appends new values as new child items
    const gridContainer = document.querySelector('#grid-container');

    //Declares a new block for the name
    const newCTFName = document.createElement('div');
    newCTFName.classList.add('CTF_Name', 'ctf-value');
    newCTFName.textContent = nameInput;


    //Declares a new block for the score
    const newCTFScore = document.createElement('div');
    newCTFScore.classList.add('Points_Scored', 'ctf-value');
    newCTFScore.textContent = scoreInput;


    //Declares a new block for the flag block
    const newCTFFlag = document.createElement('div');
    newCTFFlag.classList.add('Flags_Secured', 'ctf-value');
    newCTFFlag.textContent = flagInput;


    //Declares a new block for the Start Date
    const newCTFStartDate = document.createElement('div');
    newCTFStartDate.classList.add('Comp_Start', 'ctf-value');
    newCTFStartDate.textContent = startDateInput;


    //Declares a new block for the End Date
    const newCTFEndDate = document.createElement('div');
    newCTFEndDate.classList.add('Comp_Conclusion', 'ctf-value');
    newCTFEndDate.textContent = endDateInput;


    //Changes the input value to N/A if the value when applying trim = "" or null
    if (!newCTFName || newCTFName.textContent.trim() === "")
    {
        newCTFName.textContent = "N/A";
    }
    
    if (!newCTFScore || newCTFScore.textContent.trim() === "")
    {
        newCTFScore.textContent = "N/A";
    }
    
    if (!newCTFFlag || newCTFFlag.textContent.trim() === "")
    {
        newCTFFlag.textContent = "N/A";
    }
    
    if (!newCTFStartDate || newCTFStartDate.textContent.trim() === "")
    {
        newCTFStartDate.textContent = "N/A";
    }
    
    if (!newCTFEndDate || newCTFEndDate.textContent.trim() === "")
    {
        newCTFEndDate.textContent = "N/A";
    }

    //Blocks for data
    gridContainer.appendChild(newCTFName);

    //New CTF Score
    gridContainer.appendChild(newCTFScore);

    //New CTF Flag record
    gridContainer.appendChild(newCTFFlag);

    //New CTF Start Date
    gridContainer.appendChild(newCTFStartDate);

    //New CTF End Date
    gridContainer.appendChild(newCTFEndDate);

}

function displaySavedData()
{
    //For loop to loop through until completion
    for ( let i = 0; i < ctf_names.length; i++)
    {
        displayCTFData(
            ctf_names[i],
            ctf_scores[i],
            ctf_flag_counts[i],
            ctf_start_dates[i],
            ctf_end_dates[i]
        );
    }
}

function clearAllData()
{
    //Sets the length of all arrays to 0
    ctf_names.length = 0;

    ctf_scores.length = 0;

    ctf_flag_counts.length = 0;

    ctf_start_dates.length = 0;

    ctf_end_dates.length = 0;

    //Clears displayed records
    const gridContainer = document.querySelector('#grid-container');

    //Removes the grid items from the list to remove from being displayed
    while(gridContainer.children.length > 5)
    {
        gridContainer.removeChild(gridContainer.lastElementChild);
    }
    
    localStorage.removeChild('ctfData');

}

//Changes the index 0 values to say values because I honestly can't figure out how to fix any of this at this point
function setDefaultValues()
{
    //Assigns saved data for utilization from saved information
    const savedData = localStorage.getItem('ctfData');
    
    //Checks to see if there's no data
    if (savedData === null)
    {
        return;
    }

    //Parses JSON strings to java
    const data = JSON.parse(savedData);

    //Changes index 0 values
    data.names[0] = "Values";
    data.scores[0] = "Values";
    data.flags[0] = "Values";
    data.startDates[0] = "Values";
    data.endDates[0] = "Values";

    //Converts it back to JSON
    localStorage.setItem('ctfData', JSON.stringify(data));
}

//main function to run tracker functions
async function main()
{

//Checks if LS contains data
const savedData = localStorage.getItem('ctfData');

if(savedData !== null)
{
    //Loads previously saved data
    readFromLocalStorage();
}
else
{
    // Loads initial data
    await readingJson();
}

setDefaultValues();

//Displays any saved data
displaySavedData();

//Adds an event listener to the system to allow for interception so the page doesn't try to change to a non-existing page
var registerCtf = document.querySelector('#new-ctf-registry').addEventListener('submit', updateNewInfo);

var clearCTFData = document.querySelector('#clear-data-button').addEventListener('click', clearAllData);

}


//Calls the main function to run the tracker
main();