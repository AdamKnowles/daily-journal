import { getJournalEntries} from "./data.js"

const journalEntrySelector = document.querySelector(".textArea");

function addToDom() {
  fetch("http://localhost:3000/journalEntries")
    .then(response => response.json())
    .then(journalEntries => {
      console.log(journalEntries);
      // getJournalEntries()
      for (let i = 0; i < journalEntries.length; i++)
        document.querySelector(".insertHTML").innerHTML += `<div><li>Name: ${
          journalEntries[i].name
        }</li><li>Date: ${journalEntries[i].date} </li><li>Mood: ${
          journalEntries[i].mood
        }</li></div>`;
    });
}
addToDom();
