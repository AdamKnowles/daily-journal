const journalEntrySelector = document.querySelector(".textArea");



function addStringTemplate(journalEntry){
let stringTemplate = `<div>
<li>Name: ${journalEntry.name}</li>
<li>Date: ${journalEntry.date}</li>
<li>Mood: ${journalEntry.mood}</li>
</div>`;
  return stringTemplate
}