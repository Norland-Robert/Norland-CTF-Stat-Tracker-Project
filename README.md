
This program is a Personal Cyber CTF Stat tracker. The purpose of this program is to allow users to input statistics about Cyber competitions that they have competed in into one application. The current statistics being displayed are CTF Name, Scored Points, Flags Secured, Comp Start Date/Time, and Comp End Date/Time, with more categories being possible to implement.

To launch and utilize this stat tracker the user will need to open the file called “Norland_Index_CTF_Tracker.html” inside of a code compiler such as Visual Studio code in a way it can still access the other mandatory files. 

Once inside of the code compiler, the user will run it by either running it normally or by running it through the debugger, though the user will be prompted to select a site they want to open the webpage on near the search bar if launching for the first time, or if it questions the safety of the environment. 

Once the application has started, the user is met with a nearly blank screen with the title “Cybersecurity CTF Stat Tracker” and several columns titled, “CTF Name”, “Points Scored”, “Flags Secured”, “Competition Start”, and “Competition End”. The user will also be met with 5 fields that they can type in to. Once the user has filled in the fields, they may hit the button labeled “submit” to add the new values to the arrays and localStorage. 

The Data Source used in this project was originally going to be a local JSON file that users could store, retrieve, and modify, however, I don’t have the technical ability at this time to implement those features and I did not wish to just copy something from AI and I ran out of time to look extensively online for the solution I needed.

Functionalities of the Project
-	The user is able to add-in CTF information that is stored inside of the localStorage that allows for carryover into future executions.
-	The user is mostly able to mass delete CTF data at the click of a button, though that function is still bugged and cannot fully remove every field.
-	The program can read YES it can read from a local JSON file, but can’t do anything else with it for the time being


Known Issues/Bugs with the Project
-	The user is unable to interact with the JSON file fully, as it will only ever do an initial read-in of the date inside of it, and even so would need to be manually typed inside of the file.
-	The data deletion is bugged to where it deletes all fields except index 0, but any changes ended up deleting the column titles and left the index 0 position as N/A fields.
-	Index zero isn’t fully deleted from the system and instead is having a default “Values” tag, but the deletion button causes it to be set to N/A
-	Newly added elements will not get the new CSS style unless the page refreshes at least once
-	Page needs to be refreshed twice in order to restore the Values tag in the event the deletion button is pressed


For this project I attempted to use as minimum amount of AI as I possibly could. However, I did utilize it for fixing syntax and structuring errors, as I kept running into errors especially when attempting to read input data to and from the JSON file that I ended up scrapping using the JSON file as the primary data storage. In terms of the structuring issues, I used AI to help figure out where something needed to be moved to improve the look of the program as sometimes something would end up somewhere in the center or very far down or just completely misalign. 
