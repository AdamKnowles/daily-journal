function renderJournalEntries(allJournalEntries) {
  let valueToHoldHTML = ""; // total html that will be sent to the DOM
  let stringValue = ""; //each individual html component
  for (let i = 0; i < allJournalEntries.length; i++) {
    stringValue = addStringTemplate(allJournalEntries[i]); //function that puts html components into a variable
    valueToHoldHTML += stringValue; //adding each compontent into a variable
    // console.log(`stringValue`, stringValue, `valueToHoldHTML`, valueToHoldHTML)
  }
  document.querySelector(".insertHTML").innerHTML += valueToHoldHTML; //adds all html components to the DOM at once
}
